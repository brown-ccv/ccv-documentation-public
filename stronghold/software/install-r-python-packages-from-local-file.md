# Install R/Python Packages from Local File

The following steps are helpful to install the packages when you need to install a package which is not available from Brown [Package Archive Mirrors](https://docs.ccv.brown.edu/stronghold/software/mirrors). For example, you may need to install an R package from GitHub repo. But the `remotes::install_github("<package_name>")` command doesn't work on the Stronghold workstation. You can follow the instruction below to download and transfer the package to your Stronghold workstation and install it from there.

## **1. Download the package to local machine.**

For example, if the package is a Git repo, that can be downloaded via the `git clone` command:

```bash
git clone https://github.com/file_path/file_name.git
```

## **2. Please follow the** [**Data Import**](../data-management/data-transfers/sftp-data-imports.md) **instruction to transfer the package file from local machine to** your personal directory or a shared directory on **Stronghold workstation.**

## **3. Install the downloaded package on Stronghold workstation.**

Please use the following commands in a terminal to install the downloaded R/Python package:

{% tabs %}
{% tab title="R" %}
Start an R session in the terminal, and install the downloaded package via `install.packages` command:

```r
R
> install.packages("/<file_path>/<package_name>/", repos = NULL, type = "source")
```
{% endtab %}

{% tab title="Python" %}
Please use the following command to install the package:

```python
python3 -m pip install <package_source_folder_path>
```

If the download package file is a `.tar.gz` file, you can install the package directly from the `.tar.gz` file:

```python
python3 -m pip install <path>/package_name.tar.gz
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Installing a specific package may require loading other dependent modules.
{% endhint %}
