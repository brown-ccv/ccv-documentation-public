---
description: >-
  This page describes how to get energy use metrics of jobs on Oscar using the
  jobcarbon utility.
---

# jobcarbon

`jobcarbon` is a command line utility to quantify the energy use, and carbon intensity of any job running on Oscar. `jobcarbon` relies on the Prometheus metrics database to find information about a job, and the energy that job used during its run. `jobcarbon` takes those metrics and combines them into a manifest file compatible with the [Green Software Foundation's Impact Framework](https://if.greensoftware.foundation/). A manifest file is a yaml file containing observations about a job's run, and a pipeline to compute energy use and carbon intensity. The pipeline can be run using Impact Framework to see the final results.

### Manifest Files and Pipelines

The Impact Framework manifest files contain both observations about a system, and a pipeline to run over those observations to create aggregate statistics. The manifest file is transparent and reproducible by design. The manifest file contains all the information to do an analysis of the observations present in the file.

`jobcarbon` outputs a pipeline to calculate operational energy use, and the carbon intensity of that energy use. Pipelines are specific to the node the job was run on. If the job runs on multiple nodes, each node still gets its own pipeline. The final energy and carbon aggregate metrics will aggregate over nodes.

Manifest files rely on [Scaphandre](https://github.com/hubblo-org/scaphandre) to report the energy use of a node for a given time. Scaphandre reports power using the Running Average Power Limit (RAPL) API. Power use can be broken down into different domains: CPU and memory. If the node running the job is not capable of reporting CPU and memory power individually, host power is used instead.

The pipeline scales power by the share of total resources requested by the job. For nodes that support both CPU and memory, the power per component is scaled by the reservation share. For host-power based pipelines, the reservation share is weighted by CPU (70%) and memory (30%). The weights for CPU and memory are not yet verified.

$$
Reservation=0.7\cdot(Cores_{allocated}/Cores_{total})+0.3\cdot(Mem_{allocated}/Mem_{total})\\
Power_{job} = Power_{host} \cdot Reservation
$$

{% hint style="warning" %}
Each node has its own separate pipeline. A multi-node Oscar job may use nodes that support component energy measurement, and host-only energy measurements. Energy aggregates between these node types may note be accurate.
{% endhint %}

Energy use is then calculated by multiplying the duration of the job by the power consumed. Carbon intensity is calculated by multiplying the energy used by the regional carbon intensity of the Energy grid. Operational energy and carbon are aggregated across nodes as the final output.

Below is a mathematical representation of the full host-power pipeline:

$$
PowerScaled_{host} = Power_{host} \cdot \left(0.7\left(\frac{Requested_{cores}}{Total_{cores}}\right)+0.3\left(\frac{Requested_{mem}}{Total_{mem}}\right)\right)\\[15pt]

Energy_{job} = PowerScaled_{host} \cdot Duration\\[15pt]

Carbon_{job} = Energy_{job} \cdot Carbon_{grid}\\[15pt]
$$

And a representation of the full-power pipeline:

$$
PowerScaled_{cpu} = Power_{cpu} \cdot \left(\frac{Requested_{cores}}{Total_{cores}}\right)\\[15pt]

PowerScaled_{mem} = Power_{mem} \cdot \left(\frac{Requested_{mem}}{Total_{mem}}\right)\\[15pt]

Power_{job} = PowerScaled_{cpu} + PowerScaled_{mem}\\[15pt]

Energy_{job} = Power_{job} \cdot Duration\\[15pt]

Carbon_{job} = Energy_{job} \cdot Carbon_{grid}\\[15pt]
$$

#### Embodied Carbon (experimental)

`jobcarbon` also offers an embodied carbon estimation. Embodied carbon is defined as the carbon cost required to manufacture, ship, and dispose of a piece of hardware. Embodied carbon offers a way of understanding the institutional carbon cost of scientific computing. Embodied carbon is amortized over the lifetime of the hardware, which is determined by University operating procedures.

The combination of operational carbon and embodied carbon create a [Software Carbon Intensity (SCI)](https://sci.greensoftware.foundation/) score as defined by the Green Software Foundation. SCI is an industry standard ([ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)) and is used by many organizations today.

Embodied carbon of a server, not including the GPU, is estimated using a model provided by the Green Software Foundation. GPU embodied carbon uses either the product carbon footprint provided by NVIDIA, peer-reviewed Life Cycle Assessments (LCA), or estimations based on fabrication technology, die size, and memory size/type.

{% hint style="warning" %}
The Green Software Foundation server embodied carbon model is designed for cloud servers and may not be accurate for Oscar nodes. Further verification is planned.
{% endhint %}

### Getting Started

To get started with `jobcarbon` load the `jobcarbon` module:

```
module load jobcarbon
```

Once the module is loaded, you can run `jobcarbon` for any job using the job id.

```
jobcarbon manifest $JOB_ID
```

By default `jobcarbon` will output the manifest file to standard out. To save the manifest to a file use the `--output` option.

```
jobcarbon manifest --output manifest.yaml $JOB_ID
```

To generate manifests for a set of jobs, use the `batch` command. This will create a manifest file for each job id provided, in the output directory provided.

```
jobcarbon batch --output-dir manifests $JOB_ID_1,$JOB_ID_2...
```

To add embodied carbon analysis add the `--embodied` flag to either the `manifest` or `batch` commands.

```
jobcarbon manifest --embodied --output manifest.yaml $JOB_ID
```

### Running the Manifest Pipeline

To run the pipeline in the manifest file first load the Impact Framework module.

```
module load impact-framework
```

Once the Impact Framework module is loaded, use the `if-run` command to evaluate the pipeline contained in the manifest file. By default `if-run` will output to standard out. Use `-o` to specify an output file.

```
if-run -m manifest.yaml -o output.yaml
```

The aggregate statistics for operational energy and corresponding carbon intensity will be located at the end of the `if-run` output. There are no differences in running a pipeline with embodied carbon.

### Configuring jobcarbon

`jobcarbon` comes with a lot of configuration options. Defaults for `jobcarbon` are captured in a system wide configuration. These defaults should be good enough for most cases, but if you'd like to change the configuration environment variable overrides exist for most configuration options.

```
JOBCARBON_GRID_CARBON_INTENSITY    — gCO2eq/kWh
JOBCARBON_CPU_LIFESPAN_YEARS       — server amortisation period
JOBCARBON_GPU_LIFESPAN_YEARS       — GPU amortisation period
JOBCARBON_PROMETHEUS_URL           — Prometheus base URL
JOBCARBON_STEP_SECONDS             — scrape resolution in seconds
JOBCARBON_LOOKBACK_DAYS            — range for job/node discovery
JOBCARBON_MAX_SAMPLES              — max samples per Prometheus query chunk
JOBCARBON_YIELD_FACTOR             — wafer die yield for chip embodied carbon
JOBCARBON_ELECTRICITY_MAPS_ZONE    — Electricity Maps zone identifier
JOBCARBON_ELECTRICITY_MAPS_API_KEY — Electricity Maps API key (env only, no file fallback)
```

There are two variables that may need to change based on your job start time and duration: `JOBCARBON_STEP_SECONDS` and `JOBCARBON_LOOKBACK_DAYS`.

By default, `jobcarbon` will only search for your job in the last 30 days. If the job ran greater than 30 days ago, you need to set the `JOBCARBON_LOOKBACK_DAYS` variable. The following looks for jobs in the past 60 days.

```
JOBCARBON_LOOKBACK_DAYS=60 jobcarbon manifest $JOB_ID
```

The defaults are curated to capture the most data points possible, one sample every 60 seconds. This may be impractical for long running jobs. To decrease the frequency at which `jobcarbon` samples the metric data set the `JOBCARBON_STEP_SECONDS` variable greater than `60` seconds. The following samples the job metrics every 10 minutes.

```
JOBCARBON_STEP_SECONDS=600 jobcarbon manifest $JOB_ID
```

### Electricity Maps

{% hint style="info" %}
This feature is entirely optional. If you opt-in to Electricity Maps data you get finer grained grid carbon intensity data, otherwise `jobcarbon` defaults to a yearly average.
{% endhint %}

[Electricity Maps](https://www.electricitymaps.com/) provides global power mixes, prices, and carbon intensity. By default `jobcarbon` uses a static yearly average for the regional carbon intensity of the power grid from the [EPA eGRID 2023 dataset](https://www.epa.gov/egrid/detailed-data). To get finer grained results, you can use an API key for Electricity Maps by setting the `JOBCARBON_ELECTRICITY_MAPS_API_KEY` environment variable.

```
JOBCARBON_ELECTRICITY_MAPS_API_KEY=XXX jobcarbon manifest $JOB_ID
```

While Electricity Maps licensing prevents us from using a single default API key for all of Oscar, Electricity Maps does provide free API access for academic use. [Create an account](https://app.electricitymaps.com/auth/signup) on their website. From there your API key will be listed under [Settings > API Keys](https://app.electricitymaps.com/settings/api-access).

Enabling Electricity Maps with the `JOBCARBON_ELECTRICITY_MAPS_API_KEY` environment variable will add a `grid_carbon_intensity` field for each observation. Electricity Maps has a temporal granularity of 5 minutes. Each observation from `jobcarbon` is matched to the nearest grid carbon intensity measurement from Electricity Maps.

### Contextualizing the Output

Grams of CO2e can be hard to interpret on their own. Carbon intensity mostly reflects changes in the regional power grid, not just your job. Energy use is usually the more actionable metric. You can reduce it by optimizing code, shortening runtime, or right-sizing resources. You can also lower job carbon intensity by running work when the grid is cleaner. Tools like Electricity Maps help identify those periods.

Use energy and carbon as comparison metrics. Start with a baseline run that uses known input data. Then compare changes across data sets, parameters, or algorithms. This practice is called carbon baselining. It helps you measure whether a change improves efficiency or only shifts where energy is spent.
