# Captions/Subtitles

Downloading Captions/Subtitles have the following options, some of which are for advanced users or require the usage of specific models.

{% hint style="warning" %}
Enhanced SRT captions, WebVTT captions, and Word Level Timestamps require transcribing using the Whisper, Qwen, and Cohere models. Gemini cannot render these subtitle styles due to a different focus of the model.
{% endhint %}

## Enhanced SRT captions (.srt)

{% hint style="danger" %}
* Manual edits on the View Transcription page will **not** be applied to Enhanced SRT captions.
* This style of captions **requires** transcribing with the OpenAI Whisper, Qwen3-ASR, or Cohere Transcribe model.
{% endhint %}

Enhanced SRT captions are word-level, meaning that each word has a timestamp to display subtitles timely at the cost of having to edit the subtitles within your video editing software.

Before downloading, you have the following options to alter how the captions are created:

* **Max characters per line**: How many characters are shown per line of caption. Long subtitles can be smaller and harder to read, while short subtitles may move on too quickly to read.
* **Max lines per caption**: How many lines of text to present at a time. Typically this is always 2 lines or less, depending on context of conversation.

## WebVTT captions (.vtt)

{% hint style="danger" %}
* Manual edits on the View Transcription page will **not** be applied to Enhanced WebVTT captions.
* This style of captions **requires** transcribing with the OpenAI Whisper, Qwen3-ASR, or Cohere Transcribe model.
{% endhint %}

WebVTT captions use the same word-level timing and caption layout options as Enhanced SRT captions, but export to the `.vtt` format for platforms and players that prefer WebVTT. In addition, the WebVTT format supports highlighting individual words as they are spoken.

## Word-Level Timestamps (.json)

{% hint style="danger" %}
* Manual edits on the View Transcription page will **not** be applied to enhanced caption exports.
* This style of captions **requires** transcribing with the OpenAI Whisper, Qwen3-ASR, or Cohere Transcribe model.
{% endhint %}

Word-Level Timestamps, similar to enhanced SRT and WebVTT captions, are word-level, meaning that each word has a timestamp to display subtitles timely at the cost of having to edit the subtitles within your video editing software.

This download creates a `.json` file instead of a caption file such as `.srt` or `.vtt`, designed for certain software or manual editing of these captions.

## Additional Options

The "Group Sentences" option is disabled for all caption-styled exports as sentence grouping is not relevant for subtitle generation.

### Including Speaker Names in Captions

Each caption export has the ability to include speaker names. Simply select "Include Speaker Names" in the "Download Transcription" options before pressing Download.

{% hint style="info" %}
Word-Level Timestamps (.json) always has the "Speaker Names" option chosen.
{% endhint %}
