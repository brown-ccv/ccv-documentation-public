# H100 NVL Tensor Core GPUs

Oscar has two [DGX ](https://en.wikipedia.org/wiki/Nvidia_DGX)H100 nodes. [H100 ](https://www.nvidia.com/en-us/data-center/h100/)is based on the [Nividia Hopper architecutre](https://www.nvidia.com/en-us/data-center/technologies/hopper-architecture/) that accelerates the training of AI models. The two DGX nodes provides better performance when multiple GPUS are used, in particular with Nvidia software like [NGC containers](https://catalog.ngc.nvidia.com/containers?filters=\&orderBy=weightPopularDESC\&query=\&page=\&pageSize=).

## Hardware Specifications

Each DGX H100 node has 112 Intel CPUs with 2TB memory, and 8 Nvidia H100 GPUs. Each H100 GPU has 80G memory.

## Access

The two DGX H100 nodes are in the `gpu-he` partition. To access H100 GPUs, users need to submit jobs to the gpu-he partition and request the h100 feature, i.e.

```bash
#SBATCH --partition=gpu-he
#SBATCH --constraint=h100
```

## Running NGC Containers

NGC containers provide the best performance from the DGX H100 nodes. [Running tensorflow containers ](../installing-frameworks-pytorch-tensorflow-jax/installing-tensorflow.md)is an example for running NGC containers.

## Running Oscar Modules

The two nodes have Intel CPUs. So Oscar modules can still be loaded and run on the two DGX nodes.
