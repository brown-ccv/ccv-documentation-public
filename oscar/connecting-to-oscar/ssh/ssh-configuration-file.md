---
description: How to save ssh configurations to a configuration file
---

# SSH Configuration File

When regularly connecting to multiple remote systems over SSH, you’ll find that remembering all the hosts and various command-line options becomes tedious. OpenSSH allows setting up a configuration file to store different SSH options for each remote machine you connect t.

## SSH Config File Location

OpenSSH client-side (in this case your personal computer) configuration file is named `config`, and it is stored in the hidden `.ssh`directory under your user’s home directory (i.e., `~/.ssh`)

When you use the [`ssh`](https://linuxize.com/post/ssh-command-in-linux/)command for the first time. The `~/.ssh` directory is automatically created. If the directory doesn’t exist on your system, create it using the command below:

```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
```

By default, the SSH configuration file may not exist, so you may need to create it using the [`touch` command](https://linuxize.com/post/linux-touch-command/) :

```bash
touch ~/.ssh/config
```

This file must be readable and writable only by the user and not accessible by others:

```bash
chmod 600 ~/.ssh/config
```

## SSH Config File Structure Basics

The SSH Config File takes the following structure:

```ini
Host hostname1
    SSH_OPTION value
    SSH_OPTION value

Host hostname2
    SSH_OPTION value

Host *
    SSH_OPTION value
```

The contents of the SSH config file is organized into sections. Each section starts with the `Host` directive and contains specific SSH options used when establishing a connection with the remote SSH server.

## Oscar Hosts

Here we provide a list of Oscar hosts and typical SSH configuration options. You have two options

1. Copy the list of hosts below directly into your SSH Config File (i.e., `~/.ssh/config`)
2. Keep this content in a separate file for Oscar hosts, let's say `~/.ssh/config.oscar` and include that file in your main configuration file. In this case, **the first line** of `~/.ssh/config` will be\
   \
   `Include "~/.ssh/config.oscar"`

{% hint style="info" %}
Don't forget to replace \<username> with your user. Also the configuration assumes your identity key is \~/.ssh/id\_rsa - if you named it anything else, please update the value. If you need to generate a key, visit the [SSH Key Login page](ssh-key-login-passwordless-ssh/) for instructions.
{% endhint %}

<pre><code># Oscar Hosts. Any hosts with the -campus suffix can be accessed
# only within Brown network i.e. campus or vpn
# Hosts without -campus suffix can be accessed from outside Brown
# but will requiere 2FA

# Hosts to connect to login nodes
Host oscar
    HostName ssh.ccv.brown.edu
    User &#x3C;username>
    IdentityFile ~/.ssh/id_rsa
    ForwardAgent yes
    ForwardX11 yes
    TCPKeepAlive yes
    ServerAliveCountMax 20
    ServerAliveInterval 15
Host oscar-campus
    HostName sshcampus.ccv.brown.edu
    User &#x3C;username>
    IdentityFile ~/.ssh/id_rsa
    ForwardAgent yes
    ForwardX11 yes
    TCPKeepAlive yes
    ServerAliveCountMax 20
    ServerAliveInterval 15

<strong># When connecting from VSCODE use the following hosts
</strong># Jump box with public IP address
Host jump-box
    HostName ssh.ccv.brown.edu
    User &#x3C;username>

# Target machine with private IP address
Host ccv-vscode-node
    HostName vscode1
    User &#x3C;username>
    ProxyCommand ssh -q -W %h:%p jump-box
</code></pre>

## Connecting to your preconfigured host

You may now connect using the shortcut notation provided by your configuration file. That is, all you need to type is:

```bash
ssh oscar-campus
```

According to the configuration above, this is equivalent to

{% code overflow="wrap" %}
```bash
ssh -X -A -o TCPKeepAlive=yes -o ServerAliveCountMax=20 -o ServerAliveInterval=15 user@sshcampus.ccv.brown.edu
```
{% endcode %}

Much shorter. Enjoy!
