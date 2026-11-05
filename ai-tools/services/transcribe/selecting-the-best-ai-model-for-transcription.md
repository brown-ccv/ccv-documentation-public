---
description: Discusses which models to choose for your audio/video files
---

# Selecting the Best AI Model for Transcription

Transcribe provides [multiple AI models ](comparing-speech-to-text-models.md)for your transcription needs. Each of these AI models comes with different characteristics for different transcription needs. This page discusses which model works best for you based on the type of audio files that you have. Below is the general rule-of-thumb:

## Recommendations by Specific Requirements:

We recommend that if uncertain, please pick the **OpenAI Whisper** model for the most robust and consistent performance and the widest range of features. If you have any specific needs, please see below for our recommended model:

<table><thead><tr><th width="536.9453125">Requirement</th><th width="201.765625">Recommendation</th></tr></thead><tbody><tr><td><strong>Verbatim transcription</strong> (preserve disfluencies such as filler words, stutters, and repetitions)</td><td>Qwen</td></tr><tr><td><strong>Translation</strong> (transcribe audio into texts of a different language)</td><td>Gemini</td></tr><tr><td><strong>Chinese/Cantonese</strong> transcription</td><td>Qwen</td></tr><tr><td><strong>Singing voices</strong></td><td>Qwen</td></tr><tr><td><strong>Captions/Subtitles</strong> (SubRip (.srt) or WebVTT (.vtt) format)</td><td>Whisper, Qwen, or Cohere</td></tr><tr><td>I do NOT want my audio/video media processed by a 3rd party like Google</td><td>Whisper, Qwen, or Cohere</td></tr></tbody></table>

## Recommendations by Model:

### Select **Gemini for**:

* short audio/video files below approximately 30 minutes in duration
* audio/video files contain conversational content without much background noise or long segments with silence, as they are prone to causing the model to hallucinate
* better speaker diarization
* better speed
* accurate transcription text without accurate timestamps
* translation

{% hint style="warning" %}
Note

Although Gemini models technically support audio input of over 9 hours with its long context window, we do NOT recommend Gemini models for files longer than 1 hour.
{% endhint %}

### Select **OpenAI Whisper/Cohere Transcribe** model for

* long audio/video files over 30 minutes
* more accurate timestamps
* word-level timestamps
* private transcription without a 3rd party API
* captions/subtitles in `.srt` or `.vtt`

### Select **Qwen3-ASR** model for

* verbatim transcription of disfluencies, filler words (such as "you know," "like," etc.)
* more accurate timestamps
* word-level timestamps
* private transcription without a 3rd party API
* captions/subtitles in `.srt` or `.vtt`
* at least 1.5 times faster speed vs. Whisper
* better performance with audio with noisy backgrounds
* better performance with singing voices
* better performance with Chinese/Cantonese dialects
