# Git Sync

## Overview

Git sync allows users to update their local repositories in Stronghold with both public and private remote repositories through the transfer server. After creating a remote repository and uploading code to it, the user can clone it to their Stronghold environment and automatically have future changes pulled to their local repo. Here's how it works:

1. Create a "newrepo" file with information about your repository
2. Copy the "newrepo" file to the transfer server of your tenant
3. Clone the repo from transfer server
   * Please note that the repo is cloned to your current directory and is public to anyone with access to the directory
4. Pull most recent commits

{% hint style="warning" %}
Git Sync only allows users to **clone** and **pull** repositories. Commits cannot be pushed to the remote repos.
{% endhint %}

## Instructions

### Public Repo

#### 1. Create "newrepo" File

Create a text file named "newrepo" without a file extension on your computer. This file should be a single line with two parameters: the name of your repo and a Git URL (https:// or ssh://).

#### Example:

`<repo name> <git url>`

#### 2. Send "newrepo" File to Transfer Server

The repo file should be uploaded to the transfer server using the instructions found in the [SFTP Data Transfers](https://docs.ccv.brown.edu/stronghold/data-management/data-transfers) documentation. Upload the file from your local computer to the `/import/<username>` directory on the transfer server. The transfer server will download the public repo and perform a virus scan on each file in the repo.

NOTE: It may take 15+ minutes for the repo on the transfer server to sync with the external repo.

#### 3. Clone Repo

On the Stronghold workstation, navigate to the directory you want to clone the repo into and git clone from the transfer server. The URL should be formatted with “git://”

#### Syntax:

`git clone git://<tenant>-xfer.stronghold.brown.edu/<repo name>`

Where `<tenant>` is your Stronghold tenant and `<repo name>` is the same value as the first parameter in the "newrepo" file you made.

#### 4. Pull Repo

You can pull new commits by navigating to the repo on your stronghold workstation and doing a `git pull`.

NOTE: It may take 15+ minutes for the repo on the transfer server to sync with the external repo.

### Private Repo

#### 1. Create Private Key File

Create a text file that contains ONLY the private key for your private repo. The name of this file can be whatever you wish because the "newrepo" file will specify this file name. A private key looks like:

**starts with:**

```
-----BEGIN OPENSSH PRIVATE KEY-----
```

**and ends with:**

```
-----END OPENSSH PRIVATE KEY-----
```

#### 2. Create "newrepo" File

Create a text file named "newrepo" without a file extension on your computer. This file should be a single line with three parameters: the name of your repo, a Git URL (ssh://), and the name of the private key file you made in the previous step.

**Syntax:**

```
<repo name> <git ssh url> <private key name>
```

**Example:**

```
my_repo ssh://github.com/my_project/my_repo.git my_private key
```

#### 3. Send Private Key File File to Transfer Server

The private key file should be uploaded to the transfer server using the instructions found in the [SFTP Data Transfers](https://docs.ccv.brown.edu/stronghold/data-management/data-transfers) documentation. Upload this file to the `/import/<username>` directory.

#### 4. Send "newrepo" File to Transfer Server

The repo file should now be uploaded to the transfer server using the instructions found in the [SFTP Data Transfers](https://docs.ccv.brown.edu/stronghold/data-management/data-transfers) documentation. Upload this file to the `/import/<username>` directory. The transfer server will download the private repo and perform a virus scan on each file in the repo.

NOTE: It may take 15+ minutes for the repo on the transfer server to sync with the external repo.

#### 5. Clone Repo

On the Stronghold workstation, navigate to the directory you want to clone the repo into and git clone from the transfer server. The URL should be formatted with “git://”

#### Syntax:

`git clone git://<tenant>-xfer.stronghold.brown.edu/<repo name>`

Where `<tenant>` is your Stronghold tenant and `<repo name>` is the same value as the first parameter in the "newrepo" file you made.

#### 6. Pull Repo

You can pull new commits by navigating to the repo on your stronghold workstation and doing a `git pull`.

NOTE: It may take 15+ minutes for the repo on the transfer server to sync with the external repo.
