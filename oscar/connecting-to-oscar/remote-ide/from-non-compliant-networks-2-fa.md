---
description: Accessing VSCode from Non-Brown compliant networks
---

# From Non-compliant Networks (2-FA)

{% hint style="info" %}
This guide is only for users connecting from Non-Brown Compliant Networks. 2-FA is mandatory.
{% endhint %}

1. Install the [Remote Development extension pack](https://aka.ms/vscode-remote/download/extension) for VSCode
2.  Open VSCode settings

    * On Windows/Linux - **File** > **Preferences** > **Settings**
    * On macOS - **Code** > **Preferences** > **Settings**

    Search for `symlink` and make sure the symlink searching is unchecked

    ![VSCode settings with symlink searching unchecked](<../../.gitbook/assets/Screen Shot 2021-07-27 at 9.52.23 AM.png>)
3.  Under VSCode settings, search for `remote ssh timeout` and manually enter a timeout value i.e. `50s`. It should give you enough time to complete 2-Factor Authentication.

    ![VSCode settings showing remote SSH timeout value](<../../.gitbook/assets/Screen Shot 2022-03-28 at 9.15.51 AM.png>)
4.  Edit the `~/.ssh/config` file on your local machine, add the following lines. Replace `<username>` with your Oscar username.

    ```console
    # Jump box with public IP address
    Host jump-box
      HostName ssh.ccv.brown.edu
      User <username>
    # Target machine with private IP address
    Host ccv-vscode-node
      HostName vscode1
      User <username>
      ProxyCommand ssh -q -W %h:%p jump-box
    ```
5.  In VSCode, select **Remote-SSH: Connect to Host…** and after the list populates select `ccv-vscode-node`

    ![VSCode Remote-SSH connect to host dialog](<../../.gitbook/assets/Screen Shot 2021-09-08 at 10.24.42 AM.png>)

    <figure><img src="../../.gitbook/assets/vscode_setup.png" alt="select vscode node"><figcaption></figcaption></figure>
6.  When prompted in VSCode, please enter your Brown password and complete the DUO authentication. After that, wait about 30 seconds and VSCode should connect to Oscar.

    <figure><img src="../../.gitbook/assets/image (52).png" alt="Enter your Brown password and confirm access"><figcaption></figcaption></figure>
