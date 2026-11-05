---
description: Download transcripts, captions, and subtitles in the formats you need.
---

# Downloading Transcriptions

{% hint style="info" %}
In Transcribe 1.1.4 and later, transcripts and captions/subtitles have separate download options. You can preview captions and subtitles before downloading.
{% endhint %}

Download a transcription for one file or download every transcription in a job.

## Downloading a transcription for one file

On the **View Transcription** page, open the menu in the upper-right corner. Choose from:

* `Copy to clipboard`
* `Download transcript`
* `Download captions/subtitles`

<figure><img src="../../../.gitbook/assets/image (44).png" alt=""><figcaption></figcaption></figure>

### Downloading a transcript

Select `Download transcript` to open the download dialog. Choose either format:

* Text file (`.txt`)
* Word document (`.docx`)

You can group consecutive utterances from the same speaker into one segment.

<figure><img src="../../../.gitbook/assets/image (36).png" alt="Download transcript dialog for a single transcript" width="375"><figcaption></figcaption></figure>

### Downloading captions or subtitles (Pro models only)

Select `Download captions/subtitles` to open the dialog. Review captions and subtitles in the preview. Then choose a format and subtitle options. Supported formats are:

* Subrip (.srt)
* Web Video Text Tracks (.vtt), which supports text highlighting

This option is available while your audio or video remains available, for up to seven days. It is not supported by the Flash (Gemini) model.

{% hint style="warning" %}
Manual transcript edits do not apply to captions or subtitles.

Captions, subtitles, and word-level timestamps use the ASR model's raw timestamps. Manual edits on the **View Transcription** page will not apply to these formats. Please edit the downloaded files directly.
{% endhint %}

Set the maximum characters per line and lines per caption or subtitle. For English, use up to 32 characters per line and two lines per caption or subtitle. Other languages may need different limits.

You can include speaker names and edit them in **Edit speakers**. Select `Highlight each word` for karaoke-style captions. This option is available only for `.vtt` files.

<figure><img src="../../../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure>

## Downloading all transcriptions in a job

On the **View Job** page, open the menu in the upper-right corner. Then select the option to download every transcription in the job. Downloads are provided in a `.zip` file.

<figure><img src="../../../.gitbook/assets/image (46).png" alt=""><figcaption></figcaption></figure>

### Downloading all transcripts (`.txt` or `.docx`)

Select `Download all transcripts` to open the download dialog. Choose a format and optionally group consecutive utterances from the same speaker. Select **Download** to start.

Choose from:

* Text file (`.txt`)
* Word document (`.docx`)

### Batch downloading captions or subtitles (Pro models only)

Select `Download all captions/subtitles` to open the dialog. Review captions and subtitles for each file in the preview. Then choose a format and subtitle options. Supported formats are:

* Subrip (.srt)
* Web Video Text Tracks (.vtt), which supports text highlighting

This option is available while your audio or video remains available, for up to seven days. It is not supported by the Flash (Gemini) model.

<figure><img src="../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Manual transcript edits do not apply to captions or subtitles.

Captions, subtitles, and word-level timestamps use the ASR model's raw timestamps. Manual edits on the **View Transcription** page will not apply to these formats. Please edit the downloaded files directly.
{% endhint %}
