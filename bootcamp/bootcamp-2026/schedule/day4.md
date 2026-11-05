---
description: Domain-Specific Applications and Workflows
metaLinks:
  alternates:
    - https://app.gitbook.com/s/0VFB0srUHAjyi3t7EcGw/schedule/day4
---

# Day 4: Thursday, 4 June

Today's tutorials will occur along three tracks running concurrenlty, each devoted to a different programming language. The tutorials associated with each track are listed on the corresponding tab below.

{% tabs %}
{% tab title="Software Engineering" %}
## An Introduction to Parallel Computing | 10:00 - 10:50 EDT

_<mark style="color:$info;">**Hybrid with in-person instructor: CIT219**</mark>_

A quick overview of parallel computing concepts and techniques with OSCAR, touching on threading, OpenMP, MPI, and coroutines.

[video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4693b00b-c526-4303-a2c7-b4830144cb02)

## Debugging and Profiling Your Code with Linaro Forge | 11:00 - 11:50 EDT

_<mark style="color:$info;">**Remote only**</mark>_

Learn how to set up and use Linaro's DDT and MAP tools to debug your code and analyze its performance on Oscar.

[slides](https://docs.google.com/presentation/d/1TJPs1xMUoQZ9M5f4M8usFKkzLGkxT7ZRV5O8kCXJ2Z0/edit?usp=sharing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=75628f05-c5b8-48ff-8c1c-b483014f7ead)

## Packaging and Distributing Software with Python | 1:00 - 3:30 EDT

_<mark style="color:$info;">**Hybrid with in-person instructor: CIT219**</mark>_

Learn how to transform your research scripts into professional, shareable software packages using modern industry standards. This session covers the essential directory structures and metadata files, such as `pyproject.toml`, required to make your code installable and reproducible. You will walk away with a clear framework for organizing your projects so they can be easily distributed to collaborators and beyond.

You will need a [GitHub](https://github.com/) account to follow along with this workshop.

[slides](https://docs.google.com/presentation/d/1IGsr7GOrbtYGV-Aiq0f1dENiaAI3vwN8rdYopQGhQ14/edit?usp=sharing) | [video](https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ece3c112-7d06-4c64-9fdd-b4830142dbeb)
{% endtab %}

{% tab title="Basic Bioinformatics" %}
## Foundations for Bioinformatics Data Analyses | 9:30 - 10:30 EDT

_<mark style="color:$info;">**Remote only**</mark>_

This session we will discuss the most common file formats used in bioinformatics, some resources for accessing public datasets (like the SRA), and a few other helpful bioinformatics QC tools.

## NextFlow and SnakeMake | 10:30 - 11:30 EDT

_<mark style="color:$info;">**Remote only**</mark>_

This session will address how you can use and run Nextflow/Snakemake workflow tools to run publicly available bioinformatic analysis pipelines on Oscar. We will also briefly provide an overview of tips and suggestions on specific configurations to modify the workflows.
{% endtab %}

{% tab title="Advanced Bioinformatics" %}
## Single Cell RNAseq using Python | 1:00 - 2:00 EDT

_<mark style="color:$info;">**Remote only**</mark>_

This workshop introduces single-cell RNA-seq analysis in Python using Scanpy and the PBMC 3k dataset. Participants will work through quality control, normalization, dimensionality reduction, clustering, and visualization in a Jupyter notebook. The workshop is designed to run on Brown University’s Oscar cluster through the OpenOnDemand portal.

[repo](https://github.com/compbiocore/singlecell_python_workshop)

## Parabricks/Alphafold | 2:00 - 3:00 EDT

_<mark style="color:$info;">**Remote only**</mark>_

This workshop will discuss GPU-enabled bioinformatics packages available through NVIDIA parabricks. We will discuss the available packages, hardware requirements, and how to effectively use the tools and monitor their performance on OSCAR. We will also discuss how to run Alphafold using Oscar resources. It workshop will also introduce AlphaFold 3 and how to run it on Brown’s HPC cluster, OSCAR. We will discuss what AlphaFold 3 does and its updates from previous versions, when and why to use it, how to get started on OSCAR, and how to prepare and run jobs using your own input data. The workshop will also cover how to locate outputs, interpret key result files, and troubleshoot common issues when running AlphaFold 3 on the cluster.

[slides (Alphafold)](https://docs.google.com/presentation/d/1vm45vgXOKnUZwIYK_JsgXepTan_B1Fl7/edit?usp=sharing\&ouid=101891560741232755652\&rtpof=true\&sd=true) | [slides (Parabricks)](https://docs.google.com/presentation/d/1XkkdDNW0qGF5-Fi56Gw4yYXhnbW-417v/edit?usp=sharing\&ouid=109896945913961672328\&rtpof=true\&sd=true)
{% endtab %}
{% endtabs %}
