# Oscar Docs MCP Server

## MCP Servers

An MCP (Model Context Protocol) server is a lightweight service that exposes tools, resources, or prompts to AI models through a standardized protocol developed originally by Anthropic.

The core idea is straightforward: instead of every AI application building custom integrations with external services, MCP provides a common interface. An MCP server acts as a bridge between an AI model and some external capability—a database, an API, a file system, a SaaS product, etc.

## Oscar Documentation MCP Server

The documentation for Oscar (i.e., what you're reading now) is currently hosted on the GitBook platform. A recently added new feature on GitBook is that you can turn any GitBook into an MCP server by just flipping a switch. Here is why that's useful: if you use Claude Code or other AI assistants/editors you can now add the Oscar docs MCP server to your tools, which will allow the assistant/editor to automatically access the documentation and answer with that context.

### Claude Code

The command below will register the Oscar docs MCP server with your instance of Claude Code.

```bash
claude mcp add --transport http oscar-docs https://docs.ccv.brown.edu/oscar/~gitbook/mcp
```

This will allow you to ask Claude Code questions related to Oscar, and it will answer with full knowledge of everything in the Oscar docs.

### OpenCode

The process is similar for OpenCode. But instead of being a one-liner you first tell OpenCode you want to register an MCP server using the command below.

```bash
opencode mcp add
```

This will open an interactive prompt where you'll be asked to give your MCP server a name (e.g., `oscar-docs`) as well as provide the URL, which is \`[https://docs.ccv.brown.edu/oscar/\~gitbook/mcp](https://docs.ccv.brown.edu/oscar/~gitbook/mcp)\`. This is a `remote` server, and there is no authentication required.

### VS Code

The process of adding an MCP server to VS Code has two steps. First, you add the MCP server from your terminal with the line below.<br>

```bash
code --add-mcp '{"name":"oscar-docs","type":"http","url":"https://docs.ccv.brown.edu/oscar/~gitbook/mcp"}'
```

After that, you will need to open the Command Palette (e.g., `Cmd + Shift`), then list the MCP servers (i.e., `MCP List Servers`), and finally you'll select the `oscar-docs` MCP server and activate it.

### Other Assistants/Editors

There are many, _many_ other AI assistants and editors, and if they support MCP servers, you can use this URL to point them at the Oscar docs MCP server.

```http
https://docs.ccv.brown.edu/oscar/~gitbook/mcp
```
