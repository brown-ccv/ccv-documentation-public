# FastX 2

**FastX 2** (from [Brown Software Catalog](https://www.brown.edu/information-technology/software/catalog/fastx-2)) client software will need to be installed on the user’s local workstation. Here's how it works:

1. Create SSH Connection by configuring **FastX 2** with your information
2. Start **Firefox** or **Filezilla** Session from **FastX 2** to access data
3. Transfer data from Xfer server to workstation

## Instructions

### 1. Create SSH Connection

Run **FastX 2** from your local workstation

Click the `+` icon and select SSH

![FastX Window](<../../.gitbook/assets/image (97).png>)

Complete the SSH connection fields.

Replace `<tenant>` with your assigned tenant and `<username>`with the username used to access Stronghold . The **Name** field can be filled in with any name you would like to call your session and **Sci** should be left blank. We recommend calling your session `<tenant>-download` where you replace `<tenant>` with your assigned tenant.

Click Save

* Name: `<name>`
* Host: `<tenant>.stronghold.brown.edu`
* Port: `2223`
* User: `<username>`
* Sci:

![SSH Connection Window](<../../.gitbook/assets/image (53).png>)

You will be prompted for your password and then a Duo two-factor confirmation.

![FastX Password Window](<../../.gitbook/assets/image (71).png>)

Next you will see what looks like another password prompt, but if you read the text you’ ll see it’s actually prompting you to select a Duo authentication method. Enter the number of your choice and click `Continue`. Confirm your Duo authentication in the manner you selected.

![Duo Passcode Window](<../../.gitbook/assets/image (88).png>)

The first time you log into this service, you may see a message regarding the authenticity of the the host. Enter “yes” in the text field and click “Continue”.

### 2. Start Firefox or Filezilla Session

Click the `+` icon, select **Firefox** or **Filezilla** and click `OK`.

![FastX Sessions](<../../.gitbook/assets/image (37).png>)

* Use **Firefox** to navigate to one of your whitelisted websites or use **Filezilla** to create an SFTP session to one of your whitelisted servers
* Files are downloaded to your `~/Downloads` directory by default. The files need to be stored here in order to be imported
* When you’re done with the download, you should exit or “X” out of **Firefox** or **Filezilla**. Skipping this step may prevent the data from being properly virus scanned and moved to the import area.

### 3. Transfer Data from Xfer Server to Environment

You can then log into your Stronghold workstation to complete the transfer by following the **Transferring Import Data from Xfer Server to Workstation** section in our [Data Imports](../data-transfers/sftp-data-imports.md) guide. You will need to be part of the `sh_<tenant>_import_r` group to finish the transfer to your workstation. Your file will be under the`import/<username>` directory.
