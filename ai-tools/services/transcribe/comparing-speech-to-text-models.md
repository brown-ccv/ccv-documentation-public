---
description: >-
  On this page we discuss the technical details of the speech-to-text models
  that we use for the Transcribe service to help users choose what model to use
  for their use cases.
---

# Comparing Speech-to-text Models

## Overview

The CCV AI Transcribe service uses state-of-the-art speech-to-text and voice activity detection (VAD) models to provide high-quality and fast transcriptions. Currently, we offer the proprietary Google Gemini model and the open-source OpenAI Whisper and Qwen3-ASR models. We are continually adding high-performance transcription models as they become available.

Below is a quick comparison between the models documented on this page. We also include Cohere Transcribe as an external reference point. Please continue reading for more technical details.

<table><thead><tr><th width="205.6796875">Model</th><th>Google Gemini</th><th>OpenAI Whisper</th><th>Qwen3-ASR</th><th>Cohere Transcribe</th></tr></thead><tbody><tr><td>Word error rate (WER)*<br>(Lower is better)</td><td>Unpublished from data source</td><td>7.44%</td><td>5.76%</td><td>5.42%</td></tr><tr><td>Diarization quality</td><td>Best</td><td>Better</td><td>Better</td><td>Better</td></tr><tr><td>Open source</td><td></td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Runs on Brown-managed infrastructure</td><td></td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Supports word-level timestamps</td><td></td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Captions/Subtitles</td><td></td><td>Enhanced SRT and WebVTT support with better readability</td><td>Enhanced SRT and WebVTT support with better readability</td><td>Enhanced SRT and WebVTT support with better readability</td></tr><tr><td>Speed</td><td>&#x3C;5 min/audio hr, multiple audio files uploaded in the same job are transcribed simultaneously</td><td>&#x3C; 5 min/audio hr</td><td>&#x3C; 5 min/audio hr, 1.2~1.5 times faster than Whisper</td><td>&#x3C; 5 min/audio hr</td></tr><tr><td>Recommendation</td><td>Better for short audio files and best-in-class transcription and diarization results. Supports translation across all supported languages</td><td>Better for longer audio files. Best for use cases that require word-level timestamps and better subtitles</td><td>Better for longer audio files. Best for use cases that require word-level timestamps and better subtitles, and also:<br>Noisy environments, singing voices, and Chinese/Cantonese dialects</td><td>Good for enterprise transcription of noisy audio, accented speech, customer calls, meetings, and specialized vocabulary</td></tr></tbody></table>

\* WER changes based on the dataset the test is performed on. Data comes from the [Open ASR Leaderboard](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard).

## Languages supported

The table below compares language support across the models supported by Transcribe.

| Language                | Google Gemini | OpenAI Whisper | Qwen3-ASR | Cohere Transcribe |
| ----------------------- | ------------- | -------------- | --------- | ----------------- |
| 🌐 English              | ✓             | ✓              | ✓         | ✓                 |
| 🇸🇦 Arabic             | ✓             | ✓              |           |                   |
| 🇭🇰 Cantonese          |               |                | ✓         |                   |
| 🇨🇳 Chinese (Mandarin) | ✓             | ✓              | ✓         | ✓                 |
| 🇳🇱 Dutch              | ✓             | ✓              |           |                   |
| 🇪🇸 Spanish            | ✓             | ✓              | ✓         | ✓                 |
| 🇮🇹 Italian            | ✓             | ✓              | ✓         | ✓                 |
| 🇩🇪 German             | ✓             | ✓              | ✓         | ✓                 |
| 🇷🇺 Russian            | ✓             | ✓              | ✓         |                   |
| 🇵🇹 Portuguese         | ✓             | ✓              | ✓         | ✓                 |
| 🇯🇵 Japanese           | ✓             | ✓              | ✓         | ✓                 |
| 🇰🇷 Korean             | ✓             | ✓              | ✓         | ✓                 |
| 🇫🇷 French             | ✓             | ✓              | ✓         | ✓                 |
| 🇻🇳 Vietnamese         | ✓             | ✓              |           |                   |
| 🇮🇳 Hindi              | ✓             | ✓              |           |                   |
| 🇮🇩 Indonesian         | ✓             | ✓              |           |                   |

## The Google Gemini model

Gemini- is the flagship multimodal large language model by Google that offers state-of-the-art performance for audio transcription.

At the moment, the Gemini model offers best-in-class performance in terms of diarization accuracy, and transcription speed, and it is affordable enough that we can offer the use of Gemini for free. Therefore, it is our recommended model to try out when you use Transcribe.

**New as of Apr 10, 2026** 💥: Gemini now also supports translation. When [creating a job](creating-a-job/), simply choose a target language that is different from the source language your audio/video media is in, and the transcription will be performed in that target language.

## The OpenAI Whisper model

{% hint style="info" %}
Under the hood, we use the [WhisperX](https://github.com/m-bain/whisperX) implementation to handle transcription tasks. The WhisperX implementation performs voice activity detection (VAD) first on the audio file and chunks the audio into smaller speech segments before sending the segments to the Whipser model. In our experience, WhisperX significantly reduces model hallucination and improves accuracy on most transcriptions tasks.
{% endhint %}

[The OpenAI Whisper](https://openai.com/index/whisper/) is the most popular and robust open-source speech-to-text model first released by OpenAI in late 2022. Since release, it has been one of [the top open-source models for automated speech recognition (ASR) tasks](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard). The `Whisper-large-v3`model that the Transcribe service uses was released in September 2023.

All transcription jobs using the OpenAI Whisper model are run on GPU in a Google Cloud Run container. Therefore, no calls to a third-party API happens in this process, so that users are assured data does not leave Brown-managed infrastructure.

When the OpenAI Whisper model is selected, speaker diarization (recognizing and tracking different speakers) is performed by another open-source model specializing in speaker diarization, [pyannote.audio](https://github.com/pyannote/pyannote-audio). As OpenAI Whisper does audio transcription only and does not support speaker diarization, both models are run [together over Brown-managed services](../../data-privacy/transcribe-data-handling-level-3/). Although one of the best open-source speaker diarization models available, pyannote.audio still trails behind commercial alternatives. Therefore, if the accuracy of speaker diarization is a priority and/or the audio includes many speakers talking over each other, please choose the Microsoft Azure model for better performance in those tasks.

## The Qwen3-ASR model

[The Qwen3-ASR model family](https://qwen.ai/blog?id=qwen3asr) is the new state-of-the-art open source speech-to-text model in early 2026. This model consistently beats other commercial and open-source ASR models on almost all metrics. It especially excels in the following speech-to-text tasks:

* English accents and dialects from 16 countries
* Challenging acoustic/linguistic scenarios: It remains stable and produces reliable outputs under challenging conditions such as elderly/child speech, extremely low SNR, maintaining very low character/word error rates.
* Singing voice recognition: Supports full-song transcription (Chinese/English) with background music (BGM)
* Chinese, Cantonese, and 20+ regional dialects

Like the jobs using OpenAI Whisper model, all transcription jobs using the Qwen3-ASR model are on GPU in a Google Cloud Run container without interchanging data to a third-party API. The speaker diarization performance is the same as the Whisper Model because it is also done with pyannote.audio.

## The Cohere Transcribe model

[Cohere Transcribe](https://cohere.com/blog/transcribe) is Cohere's speech-to-text offering for enterprise transcription workflows. Cohere positions it for real-world audio such as customer calls, meetings, and other recordings where background noise, accents, and specialized terminology can reduce accuracy.

Like the jobs using OpenAI Whisper model, all transcription jobs using the Cohere Transcribe model are on GPU in a Google Cloud Run container without interchanging data to a third-party API. The speaker diarization performance is the same as the Whisper Model because it is also done with pyannote.audio.
