# Delete Data

Deleting folders (clean up) with thousands of objects from a client is a very tedious job. `Delete` tag in Hibernate service will provide researchers with a convenient way to submit a request to the storage team to delete large folders efficiently.

Following are the steps to delete data using Hibernate service:

**Step 1 (Identify the data):** Navigate into the directory you wish to delete

**Step 2a (Tag the data):** Right-click on the particular directory and select <mark style="color:green;">Tags > Action Tags > A Hibernate: Delete</mark>

![Menu tree with the "tags" option leading to an "action tags" option, which then leads to the "Hibernate: Delete" action](<../../.gitbook/assets/Screen Shot 2022-01-12 at 4.13.16 PM.png>)

**Step 2b:** Once you select that, the <mark style="color:green;">A Hibernate: Delete</mark> tag should appear on the directory

![The data table displaying the "Hibernate Delete" tag.](<../../.gitbook/assets/Screen Shot 2022-01-12 at 4.13.39 PM.png>)

{% hint style="danger" %}
**Hibernate:Delete** tag will only work on <mark style="color:blue;">**Folders**</mark> and **NOT** on <mark style="color:blue;">i</mark><mark style="color:blue;">**ndividual files**</mark>. We also recommend tagging **folders with at least 50K objects**.
{% endhint %}

**Step 2c:** Repeat the procedure to tag all relevant folders to be deleted.

**Step 3 (Delete the data):** Once tagging is complete, please complete the [Hibernate Service Request form](https://brown.atlassian.net/servicedesk/customer/portal/16/group/55/create/468) and select the appropriate action tag. This will automatically submit a ticket to the storage team to start the appropriate process.

{% hint style="danger" %}
Starfish interface is not a live one. All the information in the Starfish interface is based on the last scan of that folder. So, any deletions done using Hibernate service will be reflected after the next successful scan. Typically, all NAS platforms are scanned once every week.
{% endhint %}
