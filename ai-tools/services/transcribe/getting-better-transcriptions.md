---
description: Tip for improving transcription quality
---

# Getting Better Transcriptions

Although Automated Speech Recognition (ASR) have come a long way with transformer-based ASR models such as OpenAI Whisper, there might be still be issues with transcription quality. Here are some tips for you to improve the quality of your transcriptions.

<details>

<summary>Model produces repetitive or non-sensical content</summary>

This phenomenon is called **Hallucination**: it happens when an ASR model makes up information that is not included in the original audio files. The transcription can also get stuck in a loop of certain phrases. Hallucination is especially prominent with LLM based models such as Gemini and Whisper.

To reduce hallucination, try the following:

* **Reduce file lengths:** the longer the files are, the more likely it is for the model to hallucinate. Cutting the file into smaller chunks might help reduce the chance of hallucination.
* **Check audio quality:** even the best models cannot handle low-quality audio recordings. Please check the quality of the audio recordings to ensure that the models and provide the best audio quality recordings.
* **Check for gaps:** Unusually long gaps or non-speech content in the audio files can trigger hallucination. If possible, cut out these gaps in your audio files.
* **Out-of-distribution content:** ASR models are trained on daily conversations. Speech that is not daily conversations might also trigger hallucinations.

</details>

<details>

<summary>Inaccurate timestamps</summary>

The Gemini model, which is a multimodal large language model, generally cannot produce very accurate timestamps. Please choose any other model, which uses an additional alignment process post transcription to produce accurate segment- and word-level timestamps, which are ideal for captions and subtitles synchronized with speech.

</details>

<details>

<summary>Speech is assigned to the wrong speaker</summary>

Speaker diarization (assigning speech to different speakers) is still a hard problem. There can also be problems with overlapping speech. In general, all of our models provide decent diarization results, but please still check the transcription and fix diarization errors in mission-critical scenarios.

</details>
