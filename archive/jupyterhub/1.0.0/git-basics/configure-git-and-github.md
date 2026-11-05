# Set Up Git in JupyterHub

We recommend syncing content to and from JupyterHub using Git and GitHub. However, before you can start, we will need to tell Git and GitHub who we are.

## 0. Start a Terminal Session Inside of JupyterHub

1. Start a terminal session **inside your hub** using the terminal launcher (#18 in the [interface-overview.md](../using-your-hub/interface-overview.md "mention"))

## 1. Configure Git

In the terminal in JupyterHub, enter the following commands:

Set your git identity with your name and email

```bash
git config --global user.name "John Doe"
git config --global user.email "your_email@example.com"
```

Set default configurations for git. These commands will set git to always clone using SSH and set the default branch name to `main` rather than the traditionally used `master`

```bash
git config --global --add url."git@github.com:".insteadOf "https://github.com/"
git config --global init.defaultBranch main
```

## 2. Generate an SSH Key

1.  Generate an ssh key:

    ```bash
    ssh-keygen -t rsa -b 4096
    ```

    This creates a new ssh key, using the provided email as a label.

    ```bash
    > Generating public/private rsa key pair.
    ```
2.  When you're prompted to "Enter a file in which to save the key," press **Enter** accept the default file location.

    ```bash
    > Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
    ```
3.  You will be asked for a passphrase. **If you will be using nbgitpuller magic links in combination with git, please leave it empty, the passphrase prompt may break nbgitpuller.** If you leave it empt&#x79;**,** you won't be asked for the passphrase when connecting to GitHub. For more information, see ["Working with SSH key passphrases"](https://docs.github.com/en/articles/working-with-ssh-key-passphrases).

    ```bash
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```

## 3. Adding a new SSH to your GitHub Account

1.  Copy the SSH public key to your clipboard\
    The following command shows the public SSH key on the terminal.

    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

    Copy the entire key which starts with `ssh-rsa` and ending with `"your_email@example.com"`

    ```bash
    # Example SSH Key (DO NOT COPY)
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDWtCVS8LyAWQF60RCGSE5/b4egu7NwjIwNlM1pI+x9cqoZSRP2h4qBH9k2f8C+wOcVQ4jxhF1NmpAs/BA6r9tKQFxXXNz/Dx6X+JLl7BQCdd2ptTC+ozWfbO4zEGpVT4Gozxh6P18zO9VMJFxl6FdCwsDYeCJw7ywlY4H7zzvPx3lINplHacqViCwDIo3eQWCwesdIAAd/BIZGOl9FTqepxcAAR5RB5/pNGZbwuoXgnmIicEqu9+WBWaPoSYBwnxTVneMHZkYqVmmGWAN67DC0VICPMXFgAmfRr4SUpG5HP10tMNKNzhOT5zUhvSqWcGvCnShHopfUDO3FNXOvNhRfVl/BCaTEIDQQ/FomQg8yT6aagtejqv6DxH+KYrcsXiDX6eDn/PQMTitdMwApuvteV0/R+NQ0H4rKP1bpy6c/heGUpTTeM2czgkaPLT+gR98IwBMT3W5z0QMIznS7F+HPi2aQmazHZooPuwsunbpNkdPWbiVITRdsvtWI2qgPMrYYQZlPARKWYeg/APCf8ucvDTrFLL+Y59xZZujPCaz/Lp4OpUrvCkJP2esPeoCRgzb8VT9zJRWieAAxNldetUnN06Gh7F9I11WoQcE/BGTCVd4jO2tDu7rI46WlaOtLe8eOmelT+NVabePq3okFq7+KjdIny+8X+YhVjnAiY7VS9w== ccvdemo@CIS2L39BJGH6
    ```
2. Go to [GitHub](https://github.com). In the upper-right corner of any page, click your profile photo, then click **Settings**.\
   ![Settings icon in the user bar](https://docs.github.com/assets/images/help/settings/userbar-account-settings.png)
3. In the "Access" section of the sidebar, click **SSH and GPG keys**.
4. Click **New SSH key** or **Add SSH key**.
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
6. In the "Key type" field it should say **Authentication Key**
7. In the "Key" field, paste your public key
8. Click **Add SSH key**

## 4. Test your ssh connection on JupyterHub

1.  In the terminal of your hub type

    ```bash
    ssh -T git@github.com
    ```
2.  After accepting the host key you should received:

    ```shell
    Hi USERNAME! You've successfully authenticated, but GitHub does not
    > provide shell access.
    ```

Congratulations! You've successfully authenticated Github in JupyterHub!

## 5. For more information check GitHub's documentation:

{% embed url="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" %}
