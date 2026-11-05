---
description: >-
  This article describes how to create a Globus Collection to access your Brown
  Google Drive using either Globus Web Interface or a Globus Connect Personal
  app.
---

# Brown Google Drive (Deprecated)

{% hint style="warning" %}
**IMPORTANT NOTICE:** Globus Endpoint for Brown Google Drive will be unavailable from June 3- 5 due to maintenance. During maintenance, users will not be able to create new collections or do any data transfers.
{% endhint %}

## Tips for Transferring Data to Google Drive

For Google Drive, there are "rates limits" on how much data and how many files a user can transfer in any 24 hour period. The following two tips can help to alleviate the restrictions from the rates limits:

* Transfer a subfolder as a job. A user can submit 2-3 jobs at a time.
* If the folder or subfolder contains a lot of small files, compress the folder or subfolders using zip or tar before the transfer.

## Steps to Create a Globus Collection for Google Drive

### Click this link to get started:

{% embed url="https://collections.globus.org/create?client_id=9c24cbef-5169-4ddb-ad9b-c757541bb81d" %}

### Link your Brown username (shortid) to your Brown Globus Identity

You should land on a page similar to this. Select ‘Brown University’ and click ‘Continue’.

![Note: ​Please DO NOT use the ‘Sign in with Google’ option here.](<../../.gitbook/assets/use_existing_org_login (1).png>)

After selecting continue you will be redirected to the Brown University authentication page - enter your Brown username and use Two-Step Verification as usual.

![](../../.gitbook/assets/authentication.png)

Once the login is successful, you might land on a page as shown below. Click ‘Continue’.

![](../../.gitbook/assets/Globus_login.png)

Complete your sign up by selecting account options and agreeing to the Terms of Service and Privacy Policy.

![](../../.gitbook/assets/complete_sign_up.png)

You need to allow the Globus Collections App to manage your file transfers. Click ​Allow​.

![](../../.gitbook/assets/collections_app_permissions_google.png)

Link your Brown email address to your Brown Globus Identity. Type your Brown email address in the Google Account section and click Continue.

![](../../.gitbook/assets/create_guest_collection_google.png)

You will be redirected to the Google sign-in page. Select your Brown Google email account to continue.

![](../../.gitbook/assets/sign_in_google.png)

Grant Globus (glob.us) access to your Google Drive.

![](../../.gitbook/assets/google_permissions.png)

### Create a Guest Collection

You will be presented with a screen that has two options. Select the first option which is labeled 'BrownU Google Drive Storage Gateway (Google Drive)'.

![](<../../.gitbook/assets/image (42).png>)

**IMPORTANT:** At this point, you are ready to create your Google Drive Collection.

![](<../../.gitbook/assets/image (30).png>)

* [ ] **Storage Gateway:** Should read ‘BrownU Google Drive Storage Gateway (Google Drive)’.
* [ ] **Credentials:** Should specify your Brown Gmail account by default.
*   [ ] **Base Directory:** By default, the gateway is pointing to your ‘My Drive’ directory, so if you leave this field empty, the collection will contain all of the files and folders in your drive. If you want to share a specific folder in your ‘My Drive’, please specify its directory.

    Example: /Globus\_Share/
* [ ] **Collection Display Name:** We want this name to be a standard for management purposes.
  1. **Syntax:** Brown&#x55;_\__\<Name/Initial>\_GDrive
  2. **Example:** BrownU\_JaneSmith\_GDrive

{% hint style="danger" %}
Be sure to format the display name according to the syntax given and avoid putting your Brown ShortID in place of Name/Initial. This standardization will help us keep track of Globus accounts associated with Brown.
{% endhint %}

* [ ] **Description and Keywords​:** You can add your own description and keywords if you like.
* [ ] **Default Directory:** ​This is relative to Base Directory. Leave it empty to default it to your Base Directory.
* [ ] ​Click on the checkbox labeled 'Force encryption on transfers to and from this collection' to make your transfers more secure. ​Note:​ Encryption will ensure that your data is encrypted as it moves from site to site, but there is a performance penalty for encryption, but if you aren't sure if your data needs to be encrypted in flight - we would say better safe than sorry.
* [ ] Click on ‘​Create Collection​’.

Once the Guest Collection is successfully created, you will land on a confirmation page similar to this. Click on ‘Transfer data to or from this new collection’.

![](../../.gitbook/assets/collection_success_google.png)

### Globus Web App

You will need to give Globus permission to use your identity to access information and perform actions (like file transfers) on your behalf.

![](../../.gitbook/assets/web_app_permissions.png)

You will be redirected to the Globus WebApp File Manager. You should be able to view your Google Drive contents in the File Manager. Click on appropriate tabs on the right to manage/transfer your data.

![](../../.gitbook/assets/file_manager_google.png)

## Globus links

* If you need more information on How Globus works, please refer to [HowTo Videos located ​here​](https://docs.globus.org/how-to/instructional-videos/).
* Check out [the Globus docs page](https://docs.globus.org/how-to/) for more info.
