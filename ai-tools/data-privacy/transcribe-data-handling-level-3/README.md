---
description: This page describes how Transcribe handles data you provide.
---

# Transcribe Data Handling (Level 3)

Thank you for using Transcribe! Before using Transcribe, please read this Privacy Policy carefully to learn how we collect, use, disclose, and protect your personal data.

{% include "../../.gitbook/includes/transcribe-risk-notice.md" %}

## How we collect your personal data

For the purposes of the Privacy Policy, “personal data” refers to any information relating to an identified or identifiable natural person, and “you” refers to the individual using Transcribe (the “user”). We collect personal data for more efficient operation and to provide you with best usage experience. The ways in which we collect personal data include: (a) where you provide personal data to us; (b) where you access or use the Services.

Generally, we collect personal data in the following ways:

<table><thead><tr><th width="412.65625">Description</th><th>Source</th></tr></thead><tbody><tr><td><strong>Account Information</strong>: We collect your personal data, such as your name, Brown email address when you login with your Brown email account.</td><td>This is provided <strong>by you to us</strong> via application login</td></tr><tr><td><strong>User Content</strong>: We collect data that you provide or upload when accessing or using our Services, including your the audio/video files that you upload to Transcribe.</td><td>This is provided <strong>by you to us</strong> by using our service.</td></tr><tr><td><strong>Feedback</strong>: We appreciate feedback, including ideas and suggestions for improvement or rating a transcription. If you rate a transcript—for example, by providing a star rating—we will store the feedback as part of the related transcription. If you provide feedback via forms, we collect your email address and feedback.</td><td>This is provided <strong>by you to us</strong> via feedback forms or star ratings feature</td></tr><tr><td><strong>Log Data</strong>: We collect application logging data which may include anonymous information that your browser or device automatically sends when you use a web service. This may contain device data, your Internet Protocol (IP)address, browser information, the date and time of your request, and how you interact with the services.</td><td>Information we automatically collect during your use of the Services</td></tr><tr><td><strong>Cookies</strong>: To improve your experience, we use cookies and similar technologies to operate our Services.</td><td>Information we automatically collect during your use of the Services</td></tr></tbody></table>

If you provide us with any personal data relating to a third party (e.g. the subject of an interview), by submitting such personal data to us, you represent to us that you have obtained the consent of such third party to you providing us with their personal data, and for the collection, use and disclosure of their personal data for all purposes set out herein and by or for the benefit of the persons referenced herein.

## Data Processing and Retention

Transcribe is a service provided by OIT for the Brown community to transcribe audio/video files using Enterprise APIs or open-weight AI models. Neither OIT nor CCV uses data provided by you to train its own AI models or improve/fine-tune any existing models.

### Your submitted audio/video files

While using the Transcribe service, you will be prompted to upload the audio/video files that you want transcribed. These files will be uploaded through a secure connection to a Google Cloud Storage (GCS) bucket managed by CCV, where all data is [stored with AES-256 encryption](https://cloud.google.com/storage/docs/encryption/default-keys). Only authorized personnel at Brown University will have access to the audio files. The files are stored temporarily for up to 7 days. Within this window, you will be able to play the audio file or the audio within the video file to correct any errors in the transcripts generated. We have an automated procedure that runs daily and deletes any files in the GCS bucket that are older than 7 days.

If the OpenAI Whisper model is selected, the audio files are processed securely in secure computing resources managed by CCV. NO audio/video files are transmitted to a 3rd party provider.

If the Google Gemini model is selected, the Google Gemini Vertex AI API will require access to the audio/video file to produce the transcription. Google will NOT use your data for training purposes, and no data will be retained by Google for using this API. For more information, please see [Google's Data Governance page](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance) for more information.

### Transcriptions

The transcriptions from your submitted audio and video files are temporarily stored in a [Google Cloud Firestore database](https://firebase.google.com/docs/firestore) managed Google Cloud. By default, FireStore encrypts the data before writing it to disk, so all data stored in Firestore is encrypted. Only authorized personnel at Brown has access to this database. The transcriptions stored in the database will not be used for any other purposes than for you to retrieve. You can retrieve only your own transcriptions at any time through the web interface from the associated job page. Unlike the audio/video files, the transcriptions will not be deleted unless you choose to delete them.

### Deletion of your data

You can choose to delete the content that you have submitted to us at any point.

Before starting a transcription job, you can delete any audio/video files that you have submitted to the Transcribe service via the trash can buttons in the Files Uploaded table. You can also close the Start Job form or click the "Cancel" button. Your uploaded audio files for this job will then be deleted.

At any point after a transcription job is completed, you can choose to delete the job either through the Delete button in the All Jobs table on the Transcribe page or the Delete button on the View Job page. This will delete all audio files and all associated transcriptions from CCV AI Services. We will retain some metadata for the job for billing and record-keeping purposes, such as the durations of the audio files and the the timestamps of when the jobs are created and finished.

{% hint style="warning" %}
The deletion is permanent. You will no longer be able to retrieve the audio files or the associated transcriptions after deletion.
{% endhint %}

Below is a table summarizing how personal data is processed and retained by Transcribe:

| Data Description                     | Where it is sent to                            | Retention Period                                                                                   |
| ------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **1. Account Information**           | Transcribe FireStore database                  | Lifetime of the account                                                                            |
| **2. Your Content**                  |                                                |                                                                                                    |
| 2.1 Your submitted audio/video files | Transcribe Google Cloud Storage bucket         | Up to 7 days, or upon your request to delete, whichever comes first                                |
| 2.2 Transcriptions                   | Transcribe FireStore database                  | Lifetime of the account, unless you delete the associated transcription job                        |
| **3. Feedback**                      | Transcribe FireStore database and Google Drive | Rating are tied to the lifetime of the transcriptions. Google form feedback is stored Indefinitely |
| **4. Log Data**                      | Enterprise Cloud Services                      | Up to 90 days                                                                                      |
| **5. Cookies**                       | Your browser                                   | Defined by you                                                                                     |
