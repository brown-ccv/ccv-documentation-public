# Windows Tenants

**These steps must be performed by a member of the Admin group i.e. PI**

**Step 1:** Login into the Globus webpage via this link [https://app.globus.org/](https://app.globus.org/)

**Step 2:** Authenticate using Brown credentials

![](<../../.gitbook/assets/Screen Shot 2022-03-27 at 11.50.52 AM.png>)

**Step 3:** Navigate to File Manager and search for the collection name. Collection name syntax will be '**BrownU\_SH\_<**_**tenant\_name**_**>**'. For example, if the tenant name is '**GLOBUS2**', then the collection name is '**BrownU\_SH\_GLOBUS2'**<mark style="color:blue;">.</mark>

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 9.55.34 AM.png>)

**Step 4:** Accept the Terms of Service for Globus

![](<../../.gitbook/assets/Screen Shot 2022-03-27 at 11.55.29 AM.png>)

**Step 5:** After accepting the terms of service. We need to create a `Guest Collection` for your tenant, from the <mark style="color:blue;">`File Manager`</mark> <mark style="color:blue;">></mark> <mark style="color:blue;">`BrownU_SH_GLOBUS2`</mark>

![](<../../.gitbook/assets/Screen Shot 2022-03-29 at 10.36.31 AM.png>)

![](<../../.gitbook/assets/Screen Shot 2022-03-31 at 8.43.05 AM.png>)

![](<../../.gitbook/assets/Screen Shot 2022-03-29 at 10.39.03 AM.png>)

**Step 6:** Create an `Import/Export` collection(s). Must be done individually.

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 9.58.14 AM.png>)

<mark style="color:blue;">Create Export Collection</mark>

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 9.59.23 AM.png>)

**Step 7:** Add Permissions for users, click on `Permissions` button

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 10.03.38 AM.png>)

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 10.05.01 AM.png>)

{% hint style="danger" %}
Note: Don't give permissions to anyone without conforming their Globus ID (organization email ID is preferred)
{% endhint %}

{% hint style="info" %}
Any files uploaded by the user(s) will be owned by PIs UID on the tenant
{% endhint %}

**Step 8:** Upload the desired files/directories from your local machine.

**Step 9:** To access your files, login into your Stronghold Tenant > Navigate to <mark style="color:orange;">File Explorer > (G:) Drive.</mark> The uploaded files will be automatically placed inside this directory. You can drag and drop the files into your desired Data directory.

![](<../../.gitbook/assets/Screen Shot 2022-04-07 at 9.51.54 AM.png>)
