---
description: >-
  The Globus Command Line Interface (CLI) is an alternative to the Globus
  website which enables one to interact with Globus (endpoints, tasks, etc.)
  using the command line.
---

# Globus CLI

## Installation

This can be done by following [these instructions](https://docs.globus.org/cli/). We recommend that you install pipx and Globus CLI in a virtual environment.

{% hint style="info" %}
If you do choose to use a virtualenv, remember to activate it before trying to use any `globus` commands and deactivate it when you are done.
{% endhint %}

## Using the CLI

[This page](https://docs.globus.org/cli/reference/) presents a comprehensive list of commands that can be used with the Globus CLI.

### Transfer Example/Walkthrough

Here is an example of a file transfer that uses a virtualenv (which has already been set up):

#### Activation & Login

```bash
$ source "$HOME/.globus-cli-virtualenv/bin/activate"
$ globus login
```

After entering the `globus login` command, copy the supplied url into a browser, click 'Continue', click 'Allow', copy and paste the authorization code, and hit enter. You should then see something like this:

```console
You have successfully logged in to the Globus CLI!

You can check your primary identity with
  globus whoami

For information on which of your identities are in session use
  globus session show

Logout of the Globus CLI with
  globus logout
```

#### Getting Endpoint IDs

Before you make the transfer, you need to find the IDs of the source and destination endpoints. This can be done with the following command (or a variation of it):

```console
$ globus endpoint search --filter-scope administered-by-me
ID                                   | Owner               | Display Name
------------------------------------ | ------------------- | ------------------------------
ddb59aef-6d04-11e5-ba46-22000b92c6ec | thegrouch@brown.edu | BrownU_OscarGrouch_GDrive
ddb59af0-6d04-11e5-ba46-22000b92c6ec | thegrouch@brown.edu | BrownU_IrrelevantEndpoint
cf9bcaa5-6d04-11e5-ba46-22000b92c6ec | thegrouch@brown.edu | BrownU_CCV_Oscar
```

The final term of this command can be any of the following:

* administered-by-me
* my-endpoints
* my-gcp-endpoints
* recently-used
* in-use
* shared-by-me
* shared-with-me

Once you find the endpoints you need (in this case we want to transfer a file from `BrownU_OscarGrouch_GDrive` to `BrownU_CCV_Oscar`), set up your `source_ep` and `dest_ep` values using the IDs of the endpoints (these IDs are fake, so be sure to copy from the system output):

```bash
$ source_ep=ddb59aef-6d04-11e5-ba46-22000b92c6ec
$ dest_ep=cf9bcaa5-6d04-11e5-ba46-22000b92c6ec
```

#### Transfer

Finally, transfer the file using the following command:

```bash
$ globus transfer $source_ep:/folder1/file1.txt $dest_ep:/home/thegrouch/mynewfile.txt
```

This command transfers a file named `file1.txt` to the destination endpoint (its name in the destination will be `mynewfile.txt`).

{% hint style="info" %}
In order to have the timestamp for mynewfile.txt match the latest modification of `file1.txt` rather than the time of the transfer, you can add `--preserve-mtime` to the end of the line (run the line below _instead_ of the one above):

```bash
$ globus transfer $source_ep:/folder1/file1.txt $dest_ep:/home/thegrouch/mynewfile.txt --preserve-mtime
```
{% endhint %}

#### Deactivation

Finally, deactivate the virtualenv:

```bash
$ deactivate
```

For more examples of how to use the Globus CLI, try the [QuickStart Guide](https://docs.globus.org/cli/quickstart/) or the [Examples page](https://docs.globus.org/cli/examples/).

{% hint style="info" %}
If you have any issues, feel free to contact [support@ccv.brown.edu](mailto:support@ccv.brown.edu).
{% endhint %}
