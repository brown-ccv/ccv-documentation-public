---
description: >-
  An overview of the sustainability tracking efforts associated with the CCV AI
  tools with an exploration of the methodology used to track digital emissions
  on our services.
icon: leaf-heart
---

# Sustainability

As AI tools become more prominent in our society, the conversation around the sustainability of AI tools has grown. In order to understand how CCV's AI tools align with Brown's commitments to sustainability, we try to measure the environmental impact of our tools. In the spirit of the Office of Sustainability and Resiliency's Campus as Living Laboratory initiative, we share our environmental impact analysis with the people who use our tools.

The climate impact of each tool is different and requires a bespoke analysis. As such, the rest of this document will explore the methodology used to collect data for the individual tools we've been able to gather data for so far.

{% hint style="warning" %}
This is a living document. We will update this page as our methodology evolves.
{% endhint %}

## Transcribe

The ChatCCV Transcribe tools allow users to get AI transcriptions for uploaded audio files. On the backend, there are two different ways an audio file can be transcribed. Both are executed on Google Cloud Platform

1. Whisper (OpenAI) Transcription
2. Gemini Transcription

Google Cloud Platform offers a [Carbon Footprint](https://cloud.google.com/carbon-footprint) product to help end users understand the environmental impact of their workloads. Google provides documentation for their [Carbon Foot Print methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology). Digital emissions are updated on the 15th of every month. The digital emissions data is broken down by service used. Whisper (OpenAI) transcriptions are run using Cloud Task, Gemini transcriptions are run through Vertex AI. To calculate the digital emissions of a given transcription task we sum the emissions for the model used, and divide that by the total number of seconds transcription jobs ran for.

$$
\text{emissions for transcription job} = \frac{\sum{\text{kgCO2eq emissions}_{model}}}{\sum{\text{seconds processing}_{model}}}\cdot \text{job duration} \cdot 1000
$$

The Google Carbon Footprint methodology includes direct emissions (GHG Protocol scope 1), power purchased (scope 2), and supply chain (scope 3) emissions. The scope 2 emissions are broken down into "market based" and "location based". Location based scope 2 emissions take into account the regional carbon intensity of the power grid where the application processing occurred. Market based scope 2 emissions apply any renewable power purchase agreements and credits Google may have purchased. We use the location based scope 2 emissions as it represents the carbon emitted by the work requested.

$$
\text{kgCO2eq emissions} = \text{scope 1} + \text{scope 2}_{location} + \text{scope 3}
$$

For both transcription methods, we cannot know exactly what is being measured in each service and if they exactly align. We assume that the methodology Google uses to report digital emissions is similar enough that Gemini and Whisper transcriptions can be compared directly.

### Whisper Transcription v1

{% hint style="warning" %}
As of Nov 13, 2025, we no longer use this methodology for estimating carbon emissions of Whisper transcriptions. This section is kept for record-keeping purposes.
{% endhint %}

Our analysis includes both the power consumed during the transcription process and an estimation of the embodied carbon (carbon emitted during manufacturing, transportation, and disposal of a product) of the underlying compute hardware. Network transfer and web application hosting are not included in this estimate.

To calculate the emissions for Whisper transcriptions, we leverage the [`codecarbon`](https://codecarbon.io/) library in an offline mode. This allows us to directly measure the energy consumption of the computational resources used for each transcription job.

For each transcription request using the Whisper model, we initiate a carbon tracking process. This process monitors the energy used by the CPU, GPU and memory during the transcription. Once the transcription is complete, we calculate the total operational carbon emissions based on the recorded energy consumption and the duration of the job.

In addition to the operational emissions, we also estimate the embodied emissions associated with the hardware utilized for the Whisper model. Our estimation of embodied emissions considers the following components:

* **Memory (RAM and GPU Memory):** We estimate the embodied emissions of both system and GPU memory based on industry reports detailing the carbon intensity of memory production.
* **Processors (CPU and GPU):** We utilize die size as a proxy for the complexity and resource intensity of processor manufacturing. We apply factors derived from lifecycle assessments of semiconductor manufacturing to estimate the embodied emissions.
* **Other Components:** To account for the embodied carbon of other essential server components like the mainboard and power supply units (which are not explicitly calculated), we apply an additional factor of 20% to the total embodied emissions. [Existing literature](https://link.springer.com/article/10.1007/s11367-022-02131-z) suggests that the mainboard and processor combined account for >50% of the total embodied emissions. Therefore, a conservative scaling factor of 20% was applied to estimate the embodied emissions of these other essential parts.

$$
\text{embodied emissions} = 1.2\cdot(\text{CPU}_\text{embodied}\space+\space\text{GPU}_\text{embodied}\space+\space\text{Memory}_\text{embodied})
$$

The total embodied carbon for a specific transcription job is then scaled based on the fraction of the server's estimated lifespan (assumed to be 5 years) that the job utilized. This provides a proportional estimate of the embodied carbon attributed to that specific transcription.

The final carbon emission estimate for a Whisper transcription job is the sum of the operational emissions recorded during the transcription and the scaled embodied carbon of the hardware. This total carbon emission value is then associated with the specific transcription job.

It is important to note that while this method provides a more comprehensive estimate by including embodied carbon, it still relies on certain assumptions and industry averages due to the complexities and lack of granular data on the specific hardware and manufacturing processes involved in the cloud infrastructure.

### Gemini Transcription v1

{% hint style="warning" %}
As of Nov 13, 2025, we no longer use this methodology for estimating carbon emissions of Gemini transcriptions. This section is kept for record-keeping purposes.
{% endhint %}

We're currently working on collecting more accurate carbon footprint for Google Gemini transcriptions. At the moment, [Google claims](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference) that a median Gemini _text_ prompt from August 2025 uses approximately 0.24 Wh of energy and emits 0.03 grams of carbon dioxide equivalent (gCO2e). We are using this number to estimate the carbon emissions of Gemini audio to text prompts while we discover more accurate ways to compute them.

Google Cloud Platform has a Carbon Footprint product that can estimate the carbon equivalents emitted by a GCP project. The estimations use billing as a way to calculate service utilization for carbon estimates. **As of September 24 2025, the export of carbon footprint data from a GCP billing account is broken; there is no way to provide a better estimate at the moment.**

### Azure Transcription (Legacy)

{% hint style="warning" %}
As of Oct 1, 2025, the Azure Speech-to-Text model is deprecated from the AI Transcribe service. This section is kept for record-keeping purposes.
{% endhint %}

The Azure Transcription relies on the Azure AI Speech to Text Service. This is a hosted service. We do not have information on the servers used for model inference; we rely on the carbon emissions reporting of Azure to do our analysis.

All the major public cloud providers have started to expose carbon emissions data. Each public cloud provider varies in their analysis and implementation. In Azure, the carbon emissions data are exposed via the Azure Carbon Optimizer API. For more details, see the [Carbon Optimizer API methodology](https://web.archive.org/web/20250907125747/https://learn.microsoft.com/en-us/industry/sustainability/sustainability-data-solutions-fabric/azure-emissions-insights-calculation-methodology).

The Azure Carbon Optimizer API allows users to query for carbon emissions numbers on a month-to-month basis. At the beginning of each month, you can query for the amount of carbon emitted for all Azure transcriptions in the previous month. We can also query our database for the total number of seconds transcribed across all Azure transcription jobs in that same month.

This allows us to compute the carbon emission per second of audio transcribed:

$$
\text{Emissions Per Second Transcribed} = \frac{\text{Total Carbon Emitted}}{\text{Total Transcribe Time}}
$$

Then, by multiplying this value by the duration of a specific job, we can estimate the carbon emitted by that job.

$$
\text{Carbon Emitted By Job}(duration) = duration\times\text{Emissions Per Second Transcribed}
$$

This method can also be applied to estimate the carbon emissions for prospective jobs. When a job is being created, we know the number of seconds of audio in that job and can pass that as the _duration_ value to "Carbon Emitted By Job" equation. This assumes that the rate at which carbon is emitted during a job is mostly the same, month to month. And while there's no guarantee of that, it does give a decent estimate until Azure provides better data.

This method assumes that carbon emissions are distributed equally across all transcription jobs. It is reasonable to assume this, but possible this might not be the case. Unfortunately, the opacity of the carbon reporting from Azure doesn't allow for more granular insight.

### Important Considerations When Comparing Azure (Legacy) and Whisper Emissions Estimates

Azure and Whisper carbon emission should not be compared directly. Azure's data, derived from their Carbon Optimizer API, primarily reflects operational emissions, while our Whisper analysis includes both operational and estimated embodied carbon. This difference in scope, along with variations in methodology and data granularity, makes direct comparison difficult, if not impossible.

## LibreChat

We're currently working on collecting climate data for LibreChat.

### Ask Oscar

We're currently working on collecting climate data for Ask Oscar.
