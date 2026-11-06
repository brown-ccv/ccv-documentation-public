# Linux Standard Software

## Introduction

On Linux workstations in Stronghold, scientific software is managed using a module system. In particular, there are "software modules" and "environment modules". Both of these are accessible using the Linux command line. In general, we prefer environment modules, because they provide software package collections that are known to work well together.

## Software Modules

Software modules on a given workstation can be accessed using the Linux command line. In particular, open the `Terminal` application and type `module avail`. This will show a long list of software packages that is organized by category (see example below).

```console
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ category: languages ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
R/3.2.3               java/9.0.4            stata/mp-14-20151007
R/dev                 julia/0.4.3           stata/mp-14-20151116
anaconda/2-2.4.0      julia/0.4.6           stata/se-14-20151116
anaconda/2-2.7.0      julia/0.5.0           stata-addons/v1
anaconda/2.3.0        mathematica/11.0.0    stata-addons/v2
anaconda/3-2.4.0      matlab/R2017a         stata-addons/v3
anaconda/3-3.5.0      mro/3.3.1             stata-ado/20160907
anaconda/4.3.0        nodejs/0.12.9         stata-mp/19Dec2017
java/8u162            scala/2.11.11         texlive/2018
```

### Loading a Software Module

In order to use a module, you can simply load if from the command line using the `module load` command. For example we can load the `julia` language module by simply typing `module load julia` from the command line. The software module can now be launched as it normally would be. In the case of Julia, we would simply launch the interpreter by running `julia` from the command line. Note that this will load the version of Julia that has been designated as the default; as of this writing, that is Julia 0.4.6. However, there is a newer version, which we could load by running `module load julia/0.5.0`. In this case, we would load version 0.5.0 of Julia.

## Environment Modules

{% hint style="info" %}
The environment modules are configured only for the RHEL 7 system and are not compatible with the migrated RHEL 9 environment. [Activate conda environments](./#conda-environments).
{% endhint %}

Environment modules are essentially a collection of software. For example, a given lab might have a collection of software packages that they use frequently. This collection of packages can be wrapped up in an "environment". Technically speaking, these environments are Conda environments, and we simply store them in the module database as if they were standard software.

We can view the available environment modules by simply running `module avail conda`. This will show the list of available environment modules (see example below).

```console
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ name: conda*/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
conda/bcbi_v0.0.0        conda/cbc_generic        conda/psteytest
conda/bcbi_v0.0.1        conda/datasci_v0.0.0     conda/riipl_v1
conda/bcbi_v0.0.2-alpha  conda/datasci_v0.0.1     conda/riipl_v2
conda/bcbi_v0.2.3        conda/datasci_v0.0.2     conda/riipl_v3
conda/bcbi_v1            conda/datasci_v1         conda/riipl_v4
conda/bcbi_v1_mari       conda/datasci_v2         conda/riipl_v5
conda/bcbi_v2            conda/fgelintest         conda/root
conda/bjorkegren_v1      conda/graphlab_2.1       conda/sing_v0.1.0
conda/cbc_conda_v1       conda/nlp_v0.1.0         conda/stronghold_v1
```

Each of these environment modules contains a huge list of packages. For example, consider the `conda/datasci_v2` environment module. In order to view the available software in this particular module, run `conda list --name=datasci_v2`to produce a huge list of output that resembles the truncated list below.<br>

```console
# packages in environment at /opt/browncis/conda/envs/datasci_v2:
#
alembic                   0.9.5            py27h0668a64_0
amqp                      1.4.9            py27h5eaba50_0    brown-data-science
anyjson                   0.3.3            py27hdf0fd94_1
asn1crypto                0.22.0           py27h94ebe91_1
atk                       2.25.2               hd48c387_0    brown-data-science
atom-editor               1.21.1               h67387a4_0    brown-data-science
babel                     2.5.0            py27h20693cd_0
backports                 1.0                      py27_0
backports_abc             0.5                      py27_0
billiard                  3.3.0.23         py27h318c9ab_0    brown-data-science
bkcharts                  0.2                      py27_0
bleach                    1.5.0                    py27_0
bokeh                     0.12.7                   py27_0
boost                     1.61.0           py27h2e6ecf4_0    brown-data-science
boto3                     1.4.4                    py27_0
botocore                  1.5.78           py27hd4e8fcf_0
bzip2                     1.0.6                h6d464ef_2
ca-certificates           2018.03.07                    0
cairo                     1.14.10              haa5651f_5
celery                    3.1.25           py27h97bc7ca_0    brown-data-science
```

### Loading Environment Modules

Much like software modules, we can load environment modules with the `module load` command. In particular, we give the full name of the module. For example we could load the `conda/datasci_v2` module by running `module load conda/datasci_v2`.

### Default Environment Modules to load

The conda/cbc\_generic module provides R, Python, and Rstudio. In general, a user may start with the conda/cbc\_generic module by

```sh
module load conda/cbc_generic
```

If a user needs to access Julia, the user may load the conda/bcbi\_v0.3.1 by

```sh
module load conda/bcbi_v0.3.1
```

## Conda Environments

{% hint style="info" %}
The conda environments are configured only for the RHEL 9 system and are not compatible with the older RHEL 7 system. Instead, follow [these instructions](./#environment-modules).
{% endhint %}

Environment modules are essentially a collection of software. For example, a given lab might have a collection of software packages that they use frequently. This collection of packages can be wrapped up in an "environment". On Stronghold, we provide these environments as "Conda" environments.

### Using Conda

You need to run these two commands to use conda environments

```bash
module load miniforge3/25.3.0-3
source $MAMBA_ROOT_PREFIX/etc/profile.d/conda.sh
```

### List Conda environments

To view all the available environments, run

```bash
conda info --envs
```

Here's an example output

```bash
[pbandark@dev9-lnx1 ~]$ conda info --envs

# conda environments:
#
base                   /opt/browncis/mod/25/x86_64_v4/miniforge3-25.3.0-3-c7w4kftfn4bwurxqgs4b3man7tyyelap
ccvtest_env            /opt/browncis/mod/conda_envs/ccvtest_env
```

Each of these environment contains a huge list of packages. For example, consider the `ccvtest_env` environment module. In order to view the available software in this particular module, run `conda list --name=ccvtest_env` to produce a huge list of output that resembles the truncated list below.

```bash
[pbandark@dev9-lnx1 ~]$ conda list --name=ccvtest_env
# packages in environment at /opt/browncis/mod/conda_envs/ccvtest_env:
#
# Name                    Version                   Build  Channel
_libgcc_mutex             0.1                 conda_forge    conda-forge
_openmp_mutex             4.5                       2_gnu    conda-forge
bzip2                     1.0.8                hda65f42_8    conda-forge
ca-certificates           2025.10.5            hbd8a1cb_0    conda-forge
ld_impl_linux-64          2.44                 h1aa0949_3    conda-forge
libblas                   3.9.0           37_h4a7cf45_openblas    conda-forge
libcblas                  3.9.0           37_h0358290_openblas    conda-forge
libexpat                  2.7.1                hecca717_0    conda-forge
libffi                    3.5.2                h9ec8514_0    conda-forge
libgcc                    15.2.0               h767d61c_7    conda-forge
libgfortran               15.2.0               h69a702a_7    conda-forge
libgfortran5              15.2.0               hcd61629_7    conda-forge
libgomp                   15.2.0               h767d61c_7    conda-forge
liblapack                 3.9.0           37_h47877c9_openblas    conda-forge
liblzma                   5.8.1                hb9d3cd8_2    conda-forge
libmpdec                  4.0.0                hb9d3cd8_0    conda-forge
libopenblas               0.3.30          pthreads_h94d23a6_2    conda-forge
libsqlite                 3.50.4               h0c1763c_0    conda-forge
libstdcxx                 15.2.0               h8f9b012_7    conda-forge
libuuid                   2.41.2               he9a06e4_0    conda-forge

```

### Activating Conda environments

To activate the required environment, run the command `conda activate <env-name>` . For example, to activate the ccvtest\_env environment

```bash
conda activate ccvtest_env
```

To deactivate this environment, run

```bash
conda deactivate
```
