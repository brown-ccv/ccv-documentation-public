---
description: >-
  This page describes how to use OpenCode, a terminal-based AI coding assistant,
  on Oscar with LLMs served by Ollama.
---

# OpenCode

[OpenCode](https://opencode.ai/) is a terminal-based AI coding assistant that can connect to locally running LLMs. By pairing OpenCode with the Ollama framework on Oscar, you can use a powerful AI coding assistant backed by open-weight LLMs running directly on Oscar's GPUs. This means your code and queries never leave the cluster.

OpenCode auto-discovers a running Ollama instance, so once Ollama is serving models on a GPU node, getting OpenCode up and running is straightforward.

## Installing OpenCode

OpenCode is not pre-installed on Oscar, so we first need to install it. **This only needs to be done once.** Open a terminal and connect to Oscar, then run the following command.

```bash
curl -fsSL https://opencode.ai/install | bash
```

## Setting the Ollama Models Path

CCV hosts several dozen public, open-weight LLMs on Oscar. To tell Ollama where to find these models, we need to set an environment variable. **This only needs to be done once**, and you can do so using the commands below.

```bash
echo 'export OLLAMA_MODELS=/oscar/data/shared/ollama_models' >> ~/.bashrc

source ~/.bashrc
```

## Requesting a GPU Node

LLMs are particularly well suited to running on GPUs, so we begin by requesting a GPU node on Oscar using the following `interact` command, which requests 4 CPU cores, 32 GB of memory, and 1 GPU for 1 hour.

```bash
interact -n 4 -m 32g -q gpu -g 1 -t 1:00:00
```

Note that depending on the particular LLM, you may want additional resources (e.g., more CPU cores, memory, or GPUs). The above example should be good for most models.

## Starting the Ollama Server

Once we get our job allocated and we are on a GPU node, we must next load the `ollama` module.

```bash
module load ollama
```

Because the Ollama framework operates using a client/server architecture, we must now launch the server component of Ollama. This is done using the command below.

```bash
ollama serve
```

After running the command above, we will see a stream of output; this is the indication that the Ollama server has started.

## Launching OpenCode

Now that we have the Ollama server running, we need to _**start a new terminal session**_ and use it to connect to our GPU node. Note that our original terminal session needs to continue running; that session is responsible for running the Ollama server.

If you are using an Open OnDemand Desktop session, you can right-click on the `Terminal` icon at the bottom of the screen, and select `New Window`. Similarly, if you are connecting via your local machine's terminal application, you would start a new window. And the same is true if you are using PuTTY on Windows.

Once we have a new terminal started, run the `myq` command to see the hostname of our running Ollama server; it will be under the `NODES` heading and look something like `gpuXXXX`. We can connect to our GPU node from the login node by running the following command, where `XXXX` is an integer greater than `1000`.

```bash
ssh gpuXXXX            # replace XXXX with your GPU node's number
```

Once we have connected to our GPU node, we need to load the `ollama` module again.

```bash
module load ollama
```

We can now launch OpenCode with Ollama as the provider using the command below.

```bash
ollama launch opencode
```

OpenCode will start up and auto-detect the available models from the running Ollama server. You can then select a model and begin using OpenCode as your AI coding assistant directly on Oscar.

## Tips for Using OpenCode on Oscar

### Recommended Models

While any of the CCV-hosted models will work with OpenCode, some are better suited for coding tasks than others.

**Coding-focused models** tend to perform best for code generation, editing, and explanation:

* `qwen2.5-coder` — available in 3b, 7b, 14b, and 32b variants
* `deepseek-coder-v2` — available in 16b and 236b variants
* `codellama` — available in 7b, 13b, 34b, and 70b variants
* `codestral` — available in 22b

**General-purpose models** also work well and are a good choice for tasks that blend coding with broader reasoning:

* `llama3.2` — fast and capable for its size
* `gemma2` — available in 2b, 9b, and 27b variants
* `deepseek-r1` — strong reasoning capabilities

To see the full list of models available on Oscar, you can run `ollama list` from any terminal where the Ollama module is loaded and the `OLLAMA_MODELS` environment variable is set.

### Performance Considerations

For the best experience with OpenCode, mid-size models (7b to 27b parameters) tend to offer a good balance of response speed and quality. Smaller models respond faster but may produce less accurate code, while larger models are more capable but slower.

Some of the largest LLMs hosted on Oscar are too large to fit into the VRAM of a single GPU. If you attempt to use one of these models, the Ollama server will split the model between the CPU and GPU, which generally leads to poor performance. If you need a larger model, we recommend requesting multiple GPUs in your `interact` command. The Ollama server will handle splitting the model weights across multiple GPUs automatically.

## MCP Servers

OpenCode supports MCP (Model Context Protocol) servers, which allow it to access external tools and resources. For example, you can add the Oscar documentation MCP server to OpenCode so that it can answer questions about Oscar with full knowledge of the docs. See the [Oscar Docs MCP Server](oscar-docs-mcp-server.md) page for setup instructions.
