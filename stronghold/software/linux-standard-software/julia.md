# Julia

## Introduction

This section briefly describes some of the nuances of using Julia in Stronghold. In particular, there are some subtle issues that we must keep in mind when using Julia in Stronghold. These subtleties are primarily related to the cache files that Julia writes as part of its normal operations.

Note that the documentation below pertains only to Julia installations that are part of Conda environment modules in Stronghold. If you are working with the "container-ized" Julia in Stronghold, then the issues discussed below do not apply.

## DEPOT\_PATH Variable

Julia has a built-in variable called `DEPOT_PATH` . The variable controls where the package manager looks for registries, installed packages, named Julia environments, cloned repos, cached compiled package images, configuration files, as well as the REPL history file. This variable is an array of directory paths on the file system. In Stronghold, the default is for `DEPOT_PATH` to hold only the location of the installed Julia packages for a given Conda environment. For example, in the `conda/bcbi_v0.2.6` environment, the Julia `DEPOT_PATH` will (by default) contain only the following:

`/opt/browncis/conda/envs/bcbi_v0.2.6/julia-1.2.0/local/share/julia`

### The Problem

The major caveat in Stronghold is that the software that is shared across workstations lives in a central _read-only_ file system. This creates a problem when Julia tries to write cached files to the file system, since it is not write-able.

### The Solution

The way we address the above problem of the read-only file system is by adding an entry to the `DEPOT_PATH` variable. More specifically, we will create a new directory at `~/.julia_depot` and then add this as an entry to the `DEPOT_PATH` variable in Julia. This has a few steps, which are outlined below (note that these steps only need to be complete once).

1. In a new Terminal window, run `mkdir ~/.julia_depot` to create a location for storing cache files
2. Next, run `mkdir -p ~/.julia/config` to create the location for storing our `startup.jl` file
3. Run `touch ~/.julia/config/startup.jl` to create the start-up configuration file
4. Finally, run the command below

`echo 'pushfirst!(DEPOT_PATH, "/data/home/<USERNAME>/.julia_depot")' >> ~/.julia/config/startup.jl`

where `<USERNAME>` contains the given user's username—note that you can obtain your username by running `whoami` from the Linux command line.
