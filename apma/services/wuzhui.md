---
icon: horse
---

# Wuzhui GPU Server

The division runs a GPU server with:

* Four Nvidia Quadro RTX 6000 (Turing) 24GB GPUs
* Two Intel Xeon E5-2623 4-core CPUs
* 256GB DDR4 RAM

This is a shared resource among the division and is useful for prototyping code and running short jobs. It is not a replacement for [Oscar](https://docs.ccv.brown.edu/oscar). Accessing it requires APMA Linux privileges which you can request by emailing the [CCV ResSys team](mailto:ccv-sysadmins@brown.edu).

Please be considerate of other users and monitor GPU usage with: `nvidia-smi`.

## Access

* SSH: `ssh wuzhui.dam.brown.edu`
*   Graphical: `https://wuzhui.dam.brown.edu:3300`

    (bypass the security certificate warnings to connect)
