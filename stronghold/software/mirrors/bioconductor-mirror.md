---
description: >-
  The following guide will allow users to download R packages from BioConductor
  by connecting to a trusted mirror from a Linux workstation
---

# BioConductor Mirror

> _**Software from the BioConductor mirror is currently only available to Linux users. We expect to make it available for Windows users soon.**_

In R, issue the following commands:

```r
BIOCONDUCTOR_ONLINE_VERSION_DIAGNOSIS = FALSE
install.packages("BiocManager")
```

You may be prompted with two dialog windows:

```r
1) Would you like to use a personal library instead?

2) Would you like to use a personal library "C:\Users\"....
```

Choose **Yes** for both of them.

After the installation completes, quit R and reopen it. You can add Bioc packages with an install command (change "abc" to the package you'd like to install):

```r
BiocManager::install(c("<package>"))
```

## Troubleshooting

```r
BiocManager::install(c("<package1>", "<package2>"))
```

If you have trouble adding packages, confirm the following lines exist in your `~/.Rprofile` file:

```r
options(

repos = "http://cran.services.brown.edu",
BioC_mirror = "http://bioc.services.brown.edu"
)
```
