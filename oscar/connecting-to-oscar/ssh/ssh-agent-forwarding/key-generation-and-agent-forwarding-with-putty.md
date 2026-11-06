---
description: >-
  SSH Agent Forwarding on a Windows system using PuTTY, with an example
  application to git.
---

# Windows (PuTTY)

## Agent Forwarding with PuTTY

1. Once adding your private key to Pageant, open PuTTY and navigate to the Auth menu.

![PuTTY Auth menu showing options for SSH authentication highlighting the 'Allow agent forwarding' checkbox](<../../../.gitbook/assets/image (15).png>)

2\. Check the 'Allow agent forwarding' checkbox, and return to the Session menu.

![PuTTY Session menu showing Host Name input field](<../../../.gitbook/assets/image (22).png>)

3\. Enter the Host Name you usually use to connect to Oscar, and click 'Open'.

4\. Entering your password. If you have ssh keys setup on your local computer to connect to GitHub, you can confirm your ssh-agent was properly forwarded by checking GitHub . If the ssh command fails, your agent has not been properly forwarded.

```bash
ssh -T git@github.com
```

```console
Hi JaneDoe! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```
