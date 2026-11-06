# RStudio

These instructions are for using **RStudio** on the Stronghold Linux workstation. If you prefer to use **R directly from the terminal** to install packages using [**CRAN**](../mirrors/cran-mirror.md) or [**Bioconductor**](../mirrors/bioconductor-mirror.md) mirrors, please refer to the corresponding documentation link.

When working with the **RStudio interface**, the key difference is that you need to:

1. Load <mark style="color:$danger;">**both**</mark> the `r` and `rstudio` modules, and
2. Launch RStudio using the `rstudio` command.

Detailed instructions for different package sources and R versions are provided below.

## 1. Using the CRAN Mirror

If you want to install packages from the **CRAN mirror**, run the following commands:

1\) Load the R and RStudio modules into your current environment.

```bash
module load r rstudio
```

2\) Launch the RStudio interface.

```bash
rstudio
```

3\) Install the R package you specify (replace `<package_name>` with the actual name of the package) using Brown University’s CRAN mirror for faster access and reliability.

```r
install.packages("<package_name>", repos="http://cran.services.brown.edu")
```

## 2. Using the Bioconductor Mirror

If you need to install packages from **Bioconductor**, use the following commands:

1\) Load the R and RStudio modules into your current environment.

```bash
module load r rstudio
```

2\) Launch the RStudio interface.

```bash
rstudio
```

3\) Disable Bioconductor’s online version diagnosis (to avoid network-related conflicts), then install and use the **BiocManager** package to install your desired package(s).

```r
BIOCONDUCTOR_ONLINE_VERSION_DIAGNOSIS = FALSE
install.packages("BiocManager")

BiocManager::install(c("<package_name>"))
```

## 3. Changing the R Version

If you want to use a different version of R in RStudio, you must change it **outside** of RStudio before launching it.

3.1 Check which R versions are available on the system.

```bash
module avail r/
```

3.2 Load the desired R version together with RStudio. Replace `4.3.1` with the version you want.

```bash
module load r/4.3.1 rstudio
```

3.3 Launch RStudio using the selected R version.

```bash
rstudio
```
