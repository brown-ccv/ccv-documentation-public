---
description: >-
  Thank you for using CCV AI Services! We will continue to improve with the
  feedback from all of you!
icon: swap-arrows
---

# What's New in Transcribe

{% updates format="full" %}
{% update date="2026-10-13" %}
## Transcribe v1.1.5

Transcribe most files 2–2.5× faster, with improved speaker diarization.

* Pro models now use NVIDIA's [`nemotron-3-diarization`](https://huggingface.co/nvidia/Nemotron-3-Diarization) model for speaker diarization by default. This end-to-end model improves both speed and accuracy.
* **Breaking change:** Transcribe now supports up to eight speakers. For better accuracy with files containing more speakers, use the new streamlined file uploader to select 8+ speakers.
* Pro models now comes with a toggle to skip speaker detection when it is not important to maximize speed.
{% endupdate %}

{% update date="2026-09-23" %}
## Transcribe v1.1.4

Preview captions/subtitles before downloading them!

* Captions/subtitles are now downloaded from a separate dialog called "Download Caption/Subtitles." Users can preview the caption/subtitle before downloading them. This is only available for Pro models

Performance enhancements

* The worker for the Gemini model is now written in Rust. Transcribing with Gemini is much faster now.
* We have also tweaked the system prompt to achieve better results with the Gemini 3.8 Flash model.
* We have also tweaked both Qwen and Cohere models for better accuracy.
{% endupdate %}

{% update date="2026-05-21" %}
## Transcribe v1.1.3

This update includes several new features:

* Support for captions/subtitles in **WebVTT format**. This format supports **highlighting individual words** as they are spoken.
* Transcribe now uses **Gemini 3.5 Flash**.
* The Qwen3-ASR model is now graduated to a **Pro** model
* The **Cohere Transcribe** model has received comprehensive enhancements. It can now transcribe an hour of audio in **2.5 minutes**, down from 4 minutes.
* Revamped user interface for Create Job form. The **model recommendation system** is now more intelligent.
{% endupdate %}

{% update date="2026-04-29" %}
## Transcribe is Level-3 approved

Transcribe is now approved to handle data under [Risk Classification Level 3](https://it.brown.edu/policies/data-risk-classifications)! Please read the [Data Security Best Practices for Transcribe page](data-privacy/transcribe-data-handling-level-3/data-security-best-practices.md) for recommendations when using Transcribe to handle sensitive research data.
{% endupdate %}

{% update date="2026-04-09" %}
## Transcribe v1.1.2

💥 The Gemini model now supports [translation](services/transcribe/creating-a-job/performing-translation.md)! Simply choose a language that is different from the source language of the audio/video files and Gemini will automatically translate the content of the file in the target language. [Please report any issues and bugs via our feedback form.](https://forms.gle/w9bn1zFXrYatc1V57)
{% endupdate %}

{% update date="2026-04-01" %}
## Transcribe v1.1.1

💥 **New Model:** We added the Cohere Transcribe model, a new open source transcription model released in March 2026 that currently leads all other models on [the Open ASR Leaderboard](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard). The Cohere Transcribe model is currently in `beta`. We will improve the usability of this model over time. [Please report any issues and bugs via our feedback form.](https://forms.gle/w9bn1zFXrYatc1V57)

UI Improvements:

* We have streamlined how models are selected.
* You can now start a new transcribe job on any page from the side bar.
{% endupdate %}

{% update date="2026-03-24" %}
## Transcribe v1.1.0

🚨 **New Model:** We added the Qwen3-ASR model, a state-of-the-art transcription model that excels at transcribing speech with dialects/accents, in noisy environments, in Chinese/Cantonese, and singing voices. Like the Whisper model, the Qwen3-ASR model also supports enhanced SRT captions and word-level timestamps.

The Qwen3-ASR model is currently in `beta`. We will improve the usability of this model over time. [Please report any issues and bugs via our feedback form.](https://forms.gle/w9bn1zFXrYatc1V57)

We have also added an [Improving accessibility of audio/video media with Transcribe page](services/transcribe/improving-accessibility-of-audio-video-media-with-transcribe.md) to provide recommendations for using Transcribe to aid the creation of captions for audio/video media.
{% endupdate %}

{% update date="2026-03-05" %}
## Transcribe v1.0.8

We fixed a bug where for some users with long audio files, word-level timestamps would return a "400 Invalid Document" error.
{% endupdate %}

{% update date="2026-02-25" %}
## Transcribe v1.0.7

The Whisper model has received a significant upgrade in functionality. It is now our `Pro` model recommended for quality and advanced features such as word-level timestamps. The Gemini model is now our `Flash` model that balances speed and accuracy for shorter audio/video files.

Updates in this version are:

1. Speaker diarization (distinguishing speakers from the conversation) model is now updated to Pyannote 4 for better performance.
2. For Whisper models only, we now support word-level timestamps, which can be used for a wide range of applications such as subtitles that can highlight the word being spoken.
3. Also for Whisper models only, you can now produce enhanced SRT subtitles from word-level timestamps with limited numbers of character each line and limited numbers of lines for each segment, which improves readability of subtitles on screen.
{% endupdate %}

{% update date="2026-02-02" %}
## Transcribe v1.0.6

We have made a lot of updates to the Transcription viewer:

1. Transcription viewer is now its own page instead of a sliding panel on the side. This allows for more screen space for reading/editing transcripts.
2. Transcription viewer can now be navigated with they keyboard only, with keyboard shortcuts to control the audio, enter/exit edit modes, etc. Please check out the latest [Viewing/Editing transcriptions](services/transcribe/viewing-editing-transcriptions.md) page for detailed instructions. Please also use the Quick Help (Ctrl + Shift + Q) and the Keyboard Shortcuts (Ctrl + Shift + T) dialogs to on the Transcription viewer page for more information.
3. You can now [download transcriptions](services/transcribe/downloading-transcriptions/) in Word (docx) format. You can also download all transcriptions in a job from the View Jobs page.
{% endupdate %}

{% update date="2026-01-08" %}
## Transcribe v1.0.5

This update features the following updates:

1. Gemini model is now updated to Gemini 3.0 flash with much-improved performance.
2. We did some under-the-hood updates to dependencies for security purposes
3. Ask Oscar is now agentic and can answer questions about Oscar, Stronghold, and CCV AI Tools.
{% endupdate %}

{% update date="2025-11-05" %}
## Transcribe v1.0.4

This update features the following updates:

1. Updated Next.js version to fix a critical vulnerability recently discovered
2. Added two more supported foreign languages requested by users: Indonesian and Hindi
3. Improved the login/logout flow in the UI
4. Lot's of under-the-hood improvements to accessibility and code organization
{% endupdate %}

{% update date="2025-10-24" %}
## Transcribe v1.0.3

This update consolidates Transcribe's multi-language support for both models based on user feedback and usage data. These languages include:

* Arabic
* Korean (for Whisper model only. Gemini does not support Korean at the moment)
* Vietnamese

We have also removed language options that are not supported by Gemini, including Cantonese and many others.

Accessibility was also improved in this update and multiple minor UI issues are fixed
{% endupdate %}

{% update date="2025-10-17" %}
## Transcribe v1.0.2

This update fixes the issue where transcription with the Whisper model could fail for some languages. The alignment model for these languages are now hosted locally on Google Cloud. Whisper now reliably supports these languages:

* English
* Spanish
* French
* German
* Italian
* Japanese
* Russian
* Dutch
* Portuguese
* Chinese (Mandarin)

The users can now [request for more languages](https://docs.google.com/forms/d/e/1FAIpQLSdegJrToN2m6gphmcl6O8kMv16i9jLRPt2QW16nyyrsE_5GTw/viewform?usp=dialog) if the language they want to transcribe is not listed above.

There are other small UI tweaks:

* The "View Job" and "View Transcription" page now displays the time used to process the job/transcription and the associated Real Time Factor (RTF).
* Carbon emission information is not displayed on the "View Job" page until the transcription job is completed for accuracy.
* The `FAQ` section is not displayed on smaller screen sizes to save screen space.
* Other small language fixes.
{% endupdate %}

{% update date="2025-10-08" %}
## Transcribe v1.0.1

This is mainly a maintenance update that changes some of the languages around the use of the service and adds a 20-hour usage limit to prevent the abuse of the system.
{% endupdate %}

{% update date="2025-10-01" %}
## AI Transcribe Service goes 1.0

Over 17 months in development, our Transcribe Service is officially released with version 1.0! This official release version is packed with new features frequently requested by our users!

* You can now edit your transcription while listening to the audio (when available)! You can add, remove, and name speakers, insert/edit segments, and edit timestamps!
* You can play your audio files now. The sentence being played will be highlighted, and transcriptions can even be automatically scrolled so that the segments/sentences are always centered on the screen.
* Azure Speech-to-text model is removed from the service. According to our experience, the battle-tested Open Whisper model is significantly faster and more accurate. We removed the Azure model to simplify the model selection process.
* Gemini transcriptions might be even faster now.
* We also fixed an error where consecutive OpenAI Whisper jobs submitted by one user may fail.
{% endupdate %}
{% endupdates %}
