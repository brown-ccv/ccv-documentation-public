# PyPI Mirror

{% hint style="info" %}
This PyPI mirror setup applies only to the RHEL 7 system and is not compatible with the migrated RHEL 9 environment.
{% endhint %}

On the **Stronghold Linux workstation**, if you want to install Python packages using the **PyPI mirror**, you must first create and activate a **Python environment**. Packages must be installed within an active Python virtual environment.

Please follow these steps:

1.  Clear all currently loaded modules.

    ```bash
    module purge
    ```
2.  Load the desired Python module (for example, Python 3.11.11).

    ```bash
    module load python/3.11.11
    ```
3.  Create a new virtual environment (replace `<env_name>` with your preferred name).

    ```bash
    python -m venv <env_name>
    ```
4.  Activate the virtual environment.

    ```bash
    source env_name/bin/activate
    ```
5.  Install the desired package using **pip** (replace `<package>` with the actual package name).

    ```bash
    pip install <package>
    ```
6.  If you want to deactivate the environment, run:

    ```bash
    deactivate
    ```
