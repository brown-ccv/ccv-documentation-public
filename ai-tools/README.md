---
icon: bookmark
cover: >-
  https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw4fHxhYnN0cmFjdHxlbnwwfHx8fDE3ODAwMDEzOTJ8MA&ixlib=rb-4.1.0&q=85
coverY: 0
---

# About

## Overview

**CCV AI Services** ([https://ai.ccv.brown.edu](https://ai.ccv.brown.edu)), informally known as ChatCCV, is **the AI Sandbox** that provides a suite of generative AI tools built and deployed in-house at Brown for all members of the Brown community. These tools include:

<table data-card-size="large" data-view="cards"><thead><tr><th>Service</th><th data-card-target data-type="content-ref">Learn more</th><th data-type="content-ref"></th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><p><strong>Transcribe</strong></p><p>Secure, accurate, and fast audio transcription with state-of-the-art open-source and enterprise models, including OpenAI Whisper and Google Gemini.</p></td><td><a href="services/transcribe/">transcribe</a></td><td><a href="https://ai.ccv.brown.edu/transcribe">https://ai.ccv.brown.edu/transcribe</a></td><td><a href="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmUlMjBtaWNyb3Bob25lfGVufDB8fHx8MTc4MDAwMTE4MHww&#x26;ixlib=rb-4.1.0&#x26;q=85">https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmUlMjBtaWNyb3Bob25lfGVufDB8fHx8MTc4MDAwMTE4MHww&#x26;ixlib=rb-4.1.0&#x26;q=85</a></td></tr><tr><td><p><strong>LibreChat</strong></p><p>A unified chat interface with free and private access to premium and open-source large language models. Experiment model parameters with different models.</p></td><td><a href="services/librechat/">librechat</a></td><td><a href="https://librechat.ccv.brown.edu/">https://librechat.ccv.brown.edu/</a></td><td><a href="https://images.unsplash.com/photo-1676573408178-a5f280c3a320?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxMHx8Y2hhdHxlbnwwfHx8fDE3ODAwMDEyNDB8MA&#x26;ixlib=rb-4.1.0&#x26;q=85">https://images.unsplash.com/photo-1676573408178-a5f280c3a320?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxMHx8Y2hhdHxlbnwwfHx8fDE3ODAwMDEyNDB8MA&#x26;ixlib=rb-4.1.0&#x26;q=85</a></td></tr></tbody></table>

### Motivation

The main motivation for providing in-house generative AI tools at Brown is data privacy and security. Commercially available AI tools such as OpenAI's ChatGPT and Anthropic's Claude are not fully transparent about what they do with the data that the users provide them, including chat history, documents, images, and videos. The data may be used by these commercial companies to train their next model, risking exposure of sensitive information. With AI services provided by CCV, we have full control over how user data is handled and can be completely transparent about how and where we store, collect, and use user-provided data. Please see our [Privacy Statement](data-privacy/) section for details about how user data is stored.

Another motivation is to provide AI services tailored specifically to the needs of the Brown community. Our [Transcribe](https://ai.ccv.brown.edu/transcribe) service, for example, was developed based on popular demand from the Brown community for a high-performance, reliable, cost-effective, and secure audio transcription service. We understand that one of the major concerns of the community about generative AI tools is sustainability, so we built a carbon meter for some of our services to estimate the carbon footprint of AI usage. We will continue to listen to the community for their feedback on how to improve our services and develop new services that meet their need for an ever-evolving landscape at work.

### Architecture

The CCV AI Services were built with data security and privacy in mind. To that end, the service are deployed on infrastructure owned and/or managed by Brown. Specifically, the LibreChat service is deployed on Brown's own Kubernetes cluster with connection to AI models provided by Brown's cloud partner Google Cloud Platform (GCP) and Microsoft Azure. The Transcribe service are deployed on GCP.
