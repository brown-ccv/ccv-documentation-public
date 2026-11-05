---
description: Research Computing at Brown
---

# Wednesday, 7 June

Today's tutorials will occur along three tracks running concurrently. Each tab below corresponds to one of these tracks. The tutorials associated with each track are listed on the relevant tab.

{% tabs %}
{% tab title="Intermediate Oscar" %}
### Slurm for Beginners | 9:30 - 11:00 EDT

A primer on submitting jobs to the job scheduler on Oscar. Some basic familiarity with Unix/Linux systems is assumed. Topics covered include: an overview of the use of Slurm for resource allocation, submitting jobs to Slurm, and using Bash scripts to configure and submit jobs to Slurm.

[slides](https://docs.google.com/presentation/d/1WX1PCMMnLBeh1KS1zr0Wz7ReGR1Kq4myAeM02yqMD4E/edit?usp=sharing) | [repo](https://github.com/phall-brown/batch-scripts) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3ab447ed-6edb-46f1-8a46-b035001f5e30)

### Advanced Slurm | 11:00 - 12:30 EDT

This workshop is for people who are already familiar with Slurm, but would like to use Slurm's more powerful features. Topics covered include: dependencies for conditional execution of jobs, job arrays for parameter sweeps, dealing with hundreds or thousands of small tasks, how to limit the number of jobs running at once, and how to cancel multiple jobs.

[slides](https://docs.google.com/presentation/d/1WDfPP64atTHhfyBRXFxFy7-kxNr-bZBH6_9Q0bPHUPY/edit?usp=sharing) | [repo](https://github.com/brown-ccv/slurm) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b3a63af4-5f71-447e-9499-b035001f5e2f)

### Checkpointing and DMTCP | 1:30 - 3:00 EDT

This workshop will introduce users to checkpointing in HPC workloads. Checkpointing allows users to periodically save the state of a distributed/serial computation to disk. This allows user to restart a job from a checkpoint file in case of a node/job failure. This workshop will include a hands-on demonstration on using DMTCP to checkpoint batch jobs, job-arrays, multithreaded programs, and MPI applications.

[slides](https://docs.google.com/presentation/d/1POgy0xU91NHSdBT0ExUibXk1_kVI6fWOgBqPLp5CbdA/edit?usp=sharing) | [repo](https://github.com/brown-ccv/checkpointing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9e53f5f9-ff5e-4477-9529-b0300103e8bb)

### Computing with GPUs on Oscar | 3:00 - 4:30 EDT

A general Introduction to GPU architectures available on Oscar, using NGC container images to leverage RT cores on higher-end GPUs, and optimizing GPU jobs for better filesystem IO.

[slides](https://docs.google.com/presentation/d/13ml7H3S7ifyPU5ge6SJ9KuRXL3Up3m09kJhJ_rA0U44/edit?usp=sharing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4084415a-ffac-4cba-9027-b03000f779ab)
{% endtab %}

{% tab title="Research Computing" %}
### VR Development with Unity | 9:30 - 10:45 EDT _\*Hybrid\*_

An introduction to the Unity platform with specific aims for the development of 3D Virtual Reality applications. This workshop tours an example app provided by Unity and dives into the tools and structure required for an app deployed in Virtual Reality.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b4d15169-9a82-406f-83da-b0300106279f)

### Remote 3D Rendering for Large Datasets | 11:00 - 12:30 EDT _\*Hybrid\*_

Get to know this new service that uses Oscar to provide you with your own 3D render server to visualize datasets that will not fit in your desktop/laptop. We will use Paraview as a tool to interact with and analyze your data. No previous experience with Oscar or Paraview is needed.

[Instructions](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=526cb8b8-2ce3-439b-ab84-adc001569019)

### File Transfer Basics | 1:30 - 3:00 EDT

An overview of methods for moving files across the network. Topics covered include: Linux command line tools for file transfer (scp, rsync, sftp), GUI-based file transfer applications, mounting remote filesystems using CIFS, and using Globus.

[slides](https://docs.google.com/presentation/d/19uCXVPYLbqTLI1h4kTR00CNd62hBYHKaw5L6pLN_BYg/edit#slide=id.gd70b0deb48_0_38) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3050b388-a7b5-4be5-bdd8-b035001f5e30)

### Version Control with Git | 3:00 - 4:30 EDT _\*Hybrid\*_

In this hands-on workshop we will be covering source control: what it is, why every coder needs it, and how to use the popular source control tool git for solo and collaborative coding.

[website](https://brownccv.notion.site/Coding-Collaboration-using-Git-GitHub-and-Pull-Requests-afdc0e8c48a449f2864f0e3e8b5b4a59?pvs=4) | [repo](https://github.com/brown-ccv/how-to-pr) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d844d376-7c3c-4332-b27a-b035001f5e31)
{% endtab %}

{% tab title=" Basic Bioinformatics  " %}
**Foundations for Bioinformatics Data Analyses | 10:30 - 12:00 EDT**

This session we will discuss the most common file formats used in bioinformatics, some resources for accessing public datasets (like the SRA), and a few other helpful bioinformatics QC tools.

[repo](https://github.com/compbiocore/ccv_bootcamp_fnds_bioinformatics_analysis) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=10d1a583-154f-467e-8dda-b03700f98a81)

### Basic Bioinformatics Workflows & Workflow Management on OSCAR including NextFlow/Snakemake | 1:30 - 3:00 EDT

This session will address how you can use and run Nextflow/Snakemake workflow tools to run publicly available bioinformatic analysis pipelines on Oscar. We will also briefly provide an overview of tips and suggestions on specific configurations to modify the workflows.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=86fe4645-7caf-4601-a97b-b03700f9c2be)

### Reproducible Research with R | 3:00 - 4:30 EDT

This session will briefly cover different approaches to using R on Oscar.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8ba7a50c-6313-46ab-91d9-b03700fa085e)
{% endtab %}
{% endtabs %}
