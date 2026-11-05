# Replicating the Environment

If you want to replicate the JupyterHub environment elsewhere. We provide Conda and Julia environment files with the packages installed in the class' image.

The files are available for download from this [Google Storage Bucket](https://console.cloud.google.com/storage/browser/jupyterhub-environment-files).

## To recreate the Conda environment

1. Download the `environment.nb.yml` file
2.  Create the environemtn using the file.

    ```sh
    conda env create --name my_env -f environment.nb.yml
    source activate my_env
    ```

## To recreate Julia enviroments

1. Download the `Project.toml` file and add it to your project's folder and rename it to `Project.toml`
2. `cd` into your folder
3. From the Julia REPL:

```jl
]activate .
Activating environment at `~/your/project/Project.toml`
pkg> instantiate
```
