# Creating a Job

A **Job** is a set of audio/video files to transcribe that have the same language and model requirements. Click _Create Job_ under **All Jobs** to open the **Create Job** slide-out.

* **Step 1 –&#x20;**_**Upload Files**_**:** Start uploading files by clicking on the file upload zone or dragging and dropping files to it. We recommend that you upload multiple files to the same job, which can significantly reduce processing time and energy use. You can delete the files that you have uploaded by mistake. We have the following limits of the files that you upload in a job:
  * They must be common audio or video files (mp3, wav, mp4, ogg, mov, etc).
  * The service is designed for simple conversational content. The models might not perform well on non-conversational content, such as audible footsteps or a job site.
  * Size limit: 1GB _per file._
  * Duration limit: 5 hours of audio _per file_. 6 hours _total._

{% hint style="warning" %}
Some files, especially video files, can be incompatible with web browsers and may be rejected. If that happens, please extract the audio from your video file and/or convert the audio to a popular format such as wav or mp3 for compatibility.
{% endhint %}

* **Step 2 –&#x20;**_**Select a model**_**:** You currently have _four_ models to choose from:
  * **Google Gemini**, which is Google's flagship AI model that is capable of handling audio transcription tasks. Though currently experimental, it can produce surprisingly good results.
  * **OpenAI Whisper**, a batttle-tested open source transcription model. Though it is created by OpenAI, the inference is run on a Brown-maintained service, not on OpenAI servers.
  * **Qwen3-ASR**, a versatile open source model capable of handling accents and dialects in English and Chinese, noisy recordings, and singing voices.
  * **Cohere Transcribe:** a state-of-the-art model as of March 2026 that offers best-in-class accuracy even with noisy backgrounds.
* **Step 3 –&#x20;**_**Name**_**:** Name the Job. If not supplied, a name is automatically determined from the names of the files.
* **Step 4 –&#x20;**_**Language**_**:** selects a language or dialect. Different models may have different options. Please note that not selecting the source language your audio/video media is in might result in unusable results. Transcribe currently _cannot_ automatically recognize the language of the source files.

{% hint style="info" %}
New 💥: If your selected model is Gemini, you can perform translation by choosing a language that is different from the source language of the audio/video media.
{% endhint %}

* **Step 5:** **Click on&#x20;**_**Start**_ to start transcription - the Start button will appear faded if not all steps are complete.

{% hint style="warning" %}
Remember: The Job does not begin until you press _Start_!
{% endhint %}
