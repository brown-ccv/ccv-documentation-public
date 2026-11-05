---
description: Research Computing at Brown
---

# Day 2: Tue, 11 June

Today's tutorials will occur along three tracks running concurrently. Each tab below corresponds to one of these tracks. The tutorials associated with each track are listed on the relevant tab.

{% tabs %}
{% tab title="Intermediate Oscar" %}
### Slurm for Beginners 9:30 - 11:00 EDT

A primer on submitting jobs to the job scheduler on Oscar. Some basic familiarity with Unix/Linux systems is assumed. Topics covered include: an overview of the use of Slurm for resource allocation, submitting jobs to Slurm, and using Bash scripts to configure and submit jobs to Slurm.

[slides](https://docs.google.com/presentation/d/1Ia15nPFsEwTOH3jm1-rJXHwXFKYoZI1zErP8IjQv1G0/edit?usp=sharing) | [repo](https://github.com/phall-brown/batch-scripts) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8907c07d-3388-4cdd-9515-b1af00edae06)

### Advanced Slurm 11:00 - 12:30 EDT

This workshop is for people who are already familiar with Slurm, but would like to use Slurm's more powerful features. Topics covered include: dependencies for conditional execution of jobs, job arrays for parameter sweeps, dealing with hundreds or thousands of small tasks, how to limit the number of jobs running at once, and how to cancel multiple jobs.

[slides](https://docs.google.com/presentation/d/1m0Fus34K6T6cxO_fqfPJLLo6F3bG5IrNKjJYr7mFkno/edit?usp=sharing) | [repo](https://github.com/brown-ccv/slurm) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1242c11a-d803-4b89-b5c2-b1af00ee8984)

### Checkpointing and DMTCP 1:30 - 3:00 EDT

This workshop will introduce users to checkpointing in HPC workloads. Checkpointing allows users to periodically save the state of a distributed/serial computation to disk. This allows user to restart a job from a checkpoint file in case of a node/job failure. This workshop will include a hands-on demonstration on using DMTCP to checkpoint batch jobs, job-arrays, multithreaded programs, and MPI applications.

[slides](https://docs.google.com/presentation/d/1GJm5FCt1UMHScRxdA_IjAKk8XjWsPRb378K1USCxpK8/edit?usp=sharing) | [repo](https://github.com/brown-ccv/checkpointing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=75656088-45fa-4f05-9f3c-b1af00f94d17)

### GPU Computing on Oscar 3:00 - 4:30 EDT _\*Hybrid\*_

An introduction to GPUs, the architectures available on Oscar, submitting, running, and evaluating jobs. Using nvidia ngc containers on Oscar for deep learning, installing or building python packages, and using docker to make changes. Prerequisites: command line, basic bash, and some python experience.

[slides](https://docs.google.com/presentation/d/1h-xyoOmrL9ZKIPVSe2x4ylf7N2IhrUwmll2GKnq0CZA/edit?usp=sharing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cd82ac82-431d-48ba-8d4d-b1af00f97aef)
{% endtab %}

{% tab title="Research Computing" %}
### Version Control with Git | 11:00 - 12:30 EDT

In this hands-on workshop we will be covering source control: what it is, why every coder needs it, and how to use the popular source control tool git for solo and collaborative coding.

[website](https://brownccv.notion.site/Collaboration-using-Git-GitHub-and-Pull-Requests-afdc0e8c48a449f2864f0e3e8b5b4a59?pvs=74) | [repo](https://github.com/brown-ccv/how-to-pr) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2990dfb1-9e92-4246-9949-b1af00f4afd0)

### Empower Your Code: Building an Easy-to-Use Command Line Interface from Scratch | 1:30 - 3:00 EDT _\*Hybrid\*_

Facilitating automation and enabling seamless integration into scripts and workflows, Command Line Interfaces (CLIs) are indispensable tools in scientific computing. We will explore the advantages of CLIs and learn to harness their full potential in Python programs. Join us!

Topics include: entry points, parsing arguments, validation, commands, options, and high-level frameworks.

[repo](https://github.com/cpaniaguam/cli-interfaces-ccv-bootcamp/) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e3b79836-eaef-4498-916f-b1af00f64f04)
{% endtab %}

{% tab title=" Basic Bioinformatics  " %}
### Foundations for Bioinformatics Data Analyses | 10:30 - 12:00 EDT

This session we will discuss the most common file formats used in bioinformatics, some resources for accessing public datasets (like the SRA), and a few other helpful bioinformatics QC tools.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f72072d7-2359-4235-8e6a-b1af00f16fba)

### Basic Bioinformatics Workflows on OSCAR | 1:30 - 3:00 EDT

This session will address how you can use and run Nextflow/Snakemake workflow tools to run publicly available bioinformatic analysis pipelines on Oscar. We will also briefly provide an overview of tips and suggestions on specific configurations to modify the workflows.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=100396f5-cd91-431d-bffd-b1af00f3e727)

### Reproducible Research with R | 3:00 - 4:30 EDT

This session will briefly cover different approaches to using R on Oscar.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1e9c85a5-e454-492a-8690-b1af00f384a8)
{% endtab %}

{% tab title="Research Applications" %}
### XNAT: Data Management | 10:00 - 12:00 EDT _\*Hybrid\*_

Join us for a hands-on workshop where we will provide a comprehensive overview of the XNAT neuroimaging data platform, in addition to showcasing the latest features in our data processing tools. During the workshop, we will guide you step-by-step through our documentation, while offering our best practices and demonstrating a live demo of our data processing pipeline alongside a new utility script for running on Oscar.

Whether you’re new to XNAT or an experienced user, this workshop is designed to help you stay up-to-date with our most recent changes to xnat-tools, which are now available to your lab. You’ll walk away with a deeper understanding of our xnat2bids pipeline and be ready to implement it in your lab’s workflow.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7a4f87b9-4567-43b1-ae55-b1af00efcac0)

### Recruiting Participants Online: A Survey of the Field | 1:30 - 3:00 EDT _\*Hybrid\*_

Online recruitment has come a long way in the twenty years since Mechanical Turk upended the field with online crowdworkers. Today, there are many sources of participants, each with different strengths. In this workshop, the founder of the online lab Volunteer Science, Dr. Jason Radford, provides an overview of the different types of recruitment options out there, their relative strengths and weaknesses, and the vendors in each space. Dr Radford will also provide some decision tools for finding the right vendor for your study.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=eae2a829-6ac9-4353-997d-b1af00f76e58)

### JavaScript for JsPsych | 3:15 - 4:45 EDT _\*Hybrid\*_

jsPsych is a JavaScript framework for creating behavioral experiments that run in a web browser. This workshop focuses on the fundamental building blocks of JavaScript needed to understand, build, and deploy such tasks. It aims to provide a distinction between the Honeycomb template repository and its dependency on jsPsych.

[slides](https://docs.google.com/presentation/d/1t2kDOG5ARGk89HComgsxgqFCDqouvzxOefY9VVOBYBw/edit#slide=id.p) | video
{% endtab %}
{% endtabs %}
