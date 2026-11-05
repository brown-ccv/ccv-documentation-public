---
description: Guide to download (or clone) a GitHub Repository to your JupyterHub
---

# Downloading Content

Downloading a GitHub repository into your JupyterHub is done via `git clone`. The operation can be done via the Git Plugin interface that comes pre-installed in your JupyterHub or a terminal session

## Prerequisites :

*
  1. GitHub **Username,** **Password and Email.** See [Create GitHub Account](create-github-account.md)
  2. You have authenticated your JupyterHub and GitHub Accounts. See [Configuring Git in JupyterHub](configure-git-and-github.md)

## Clone using a terminal session

Launch a terminal on JupyterHub by following the instructions below:

1. [Launch a terminal session](../getting-started/launch-a-terminal-session.md)
2. Clone your assignment to the hub using the git clone command

```sh
git clone <gitURL>
```

{% hint style="info" %}
Replace \<gitURL> with your copied git URL via your clipboard from [Step 2](../github-classroom-student-guide/getting-assignments.md#step-2-copy-assignment-url) or other repository URL
{% endhint %}

To launch a specific notebook file downloaded, see the [Launch a Notebook](../getting-started/launch-an-existing-notebook.md#opening-an-existing-notebook-on-your-hub) steps

## Using the Git Plugin Interface

1. Select the Git Clone button circled in blue below
2. Paste the url at the prompt
3. A new folder with your repository will show in your file browser

{% hint style="info" %}
It may take few seconds for your repository folder to show up in the file browser
{% endhint %}

To launch a specific notebook file downloaded, see the [Launch a Notebook](../getting-started/launch-an-existing-notebook.md#opening-an-existing-notebook-on-your-hub) steps

![Screencap of JupyterHub interface with the "git clone" button circled.](<../.gitbook/assets/jhub-clone.001 (1).jpeg>)

##
