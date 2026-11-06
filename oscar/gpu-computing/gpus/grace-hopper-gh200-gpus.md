# Grace Hopper GH200 GPUs

Oscar has two Grace Hopper GH200 GPU nodes. Each node combines [Nvidia Grace Arm CPU](https://www.nvidia.com/en-us/data-center/grace-cpu/) and [Hopper GPU architecture](https://www.nvidia.com/en-us/data-center/technologies/hopper-architecture/).

## Hardware Specifications

Each GH200 node has 72 Arm cores with 550G memory. Both CPU and GPU threads on GH200 nodes can now [concurrently and transparently access both CPU and GPU memory](https://resources.nvidia.com/en-us-grace-cpu/nvidia-grace-hopper).

## Access

The two GH200 nodes are in the `gracehopper` partition.

### gk-condo Account

A gk-condo user can submit jobs to the GH200 nodes with their gk-gh200-gcondo account, i.e.,

```bash
#SBATCH --account=gk-gh200-gcondo
#SBATCH --partition=gracehopper
```

### CCV Account

For users who are not a gk-condo user, a _High End GPU priority account_ is required for accessing the `gracehopper` partition and GH200 nodes. All users with access to the GH200 nodes need to submit jobs to the nodes with the ccv-gh200-gcondo account, i.e.

```bash
#SBATCH --account=ccv-gh200-gcondo
#SBATCH --partition=gracehopper
```

## Running NGC Containers

NGC containers provide the best performance from the GH200 nodes. [Running tensorflow containers ](../installing-frameworks-pytorch-tensorflow-jax/installing-tensorflow.md)is an example for running NGC containers.

{% hint style="info" %}
A NGC container must be built on a GH200 node for the container to run on GH200 nodes
{% endhint %}

## Running Modules

The two nodes have Arm CPUs. So Oscar modules **do not** run on the two GH200 nodes. Please contact support@ccv.brown.edu about installing and running modules on GH200 nodes.
