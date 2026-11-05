---
description: >-
  This article describes how to create a Globus Collection to access your data
  in Google Drive using either the Globus Web Interface​ or the Globus Connect
  Personal app.
---

# Brown Google Drive and Shared Drive

## Creating a Globus Collection

{% hint style="info" %}
_**Note:**_ ​If you are already a subscriber of Globus service and have a Globus account, some of the permissions pages might not show up during this process.
{% endhint %}

1. Navigate to [https://www.globus.org/](https://www.globus.org/), then click the 'Login' button in Figure 1.

<figure><img src="../../.gitbook/assets/image (11).png" alt="Screenshot of Globus Menu."><figcaption><p>Figure 1. Globus Web page</p></figcaption></figure>

2\. Select Brown University as Organization, then click 'Continue' in Figure 2.

{% hint style="warning" %}
PLEASE DO NOT USE 'Sign in with Google'
{% endhint %}

<div align="center"><figure><img src="../../.gitbook/assets/image (31).png" alt="Screenshot of Globus Login page with Brown University selected."><figcaption><p>Figure 2. Globus Web App Login</p></figcaption></figure></div>

3\. The page will redirect to the SSO Authentication page. Use your AD credentials.

<figure><img src="../../.gitbook/assets/image (29).png" alt="Screenshot of Brown University SSO login page."><figcaption><p>Figure 3. SSO Page</p></figcaption></figure>

4\. Navigate to File Manager, and enter '**BrownU\_GlobusMEP\_Google**' in Collection Search to create a collection for your Google Drive. Similarly, you can enter '**BrownU\_GlobusMEP\_Google\_SharedDrive**' in Collection Search to create a collection for your Google Shared Drive as shown in Figure 4:

<figure><img src="../../.gitbook/assets/image (43).png" alt="Screenshot of Globus Collection Search page."><figcaption><p>Figure 4: Collection Search</p></figcaption></figure>

5\. Click the appropriate collection (regular or shared drive) in the list from Collection Search, if it is your first time to access the BrownU\_GlobusMEP\_Google collection (Step 5 - 7), click the 'Continue' button in Figure 5 to be authenticated.

<figure><img src="../../.gitbook/assets/image (40).png" alt="Screenshot of Globus consent page."><figcaption><p>Figure 5: Authentication and Consent Required</p></figcaption></figure>

6\. Click the "\<your\_brown\_shortid>@brown.edu" in Figure 6.

<figure><img src="../../.gitbook/assets/Identity_required.jpg" alt="Screenshot of Selecting an Identity for Globus Consent."><figcaption><p>Figure 6: Identity Selection</p></figcaption></figure>

7\. Click the 'Allow' button in Figure 7 to grant permissions to Globus Web App. You should read the Terms of Service and Privacy Policy.

<figure><img src="../../.gitbook/assets/image (28).png" alt="Screenshot of Globus Terms and Conditions acceptance page."><figcaption><p>Figure 7: Globus Consents</p></figcaption></figure>

{% hint style="info" %}
If you get either of the following messages after clicking 'Allow', please consult our [Troubleshooting page](https://docs.ccv.brown.edu/storage-and-transfer/globus/support/troubleshooting).

<img src="../../.gitbook/assets/image (41).png" alt="Screenshot of Globus Errors." data-size="original"><img src="https://gblobscdn.gitbook.com/assets%2F-LtBPWc3lCoK-ZiQIe15%2F-MbvdOx0dtHKqo0s55Q3%2F-MbveCTh9QkemDxViJ82%2Fimage.png?alt=media&#x26;token=776effe4-3de4-4c19-9fec-2fe7eafc9372" alt="Screenshot of Globus Error." data-size="original">
{% endhint %}

8\. After authentication, the collection is displayed in File Manager as shown in Figure 8.

9\. You may bookmark your selected folder, by clicking the Bookmark icon which is to the right of the Path search textbox, entering the name for the selected folder, and then click the 'Create Bookmark' button as shown in Figure 9.

* **Bookmark Syntax​:** We want this name to be a standard for management purposes. ​Note: Non-Standard Names might not get associated with Brown Subscription. ​Please avoid putting your Brown ShortID in place of Name/Initial.
  1. **Syntax​:** ​BrownU​\_\<Name/Initials>\_GDrive **OR** BrownU​\_\<Name/Initials>\_GSDrive
  2. **Example:** BrownU\_JaneSmith\_GDrive **OR** BrownU​\_JaneSmith\_GSDrive

<figure><img src="../../.gitbook/assets/image (34).png" alt="Screenshot of creating a bookmark."><figcaption><p>Figure 9: Bookmark Creation</p></figcaption></figure>

After that, a confirmation will be displayed as in Figure 10. Once a bookmark is saved, you can access it later by clicking the 'BOOKMARKS' icon in the left panel, and then click the bookmark from the list of your saved bookmarks, as shown in Figure 11.

<figure><img src="../../.gitbook/assets/image (24).png" alt="Screenshot of saved bookmark."><figcaption><p>Figure 10: Bookmark Saved</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (33).png" alt="Screenshot of all saved bookmarks."><figcaption><p>Figure 11: Saved Bookmarks</p></figcaption></figure>

You can also refer to [**Globus Documentation**](https://docs.globus.org/how-to/access-google-storage/) for accessing your Google Drive(s).

## Transfer data

11\. You can transfer to any other Globus Collection that you have permission to. Once you are in your collection, to select either source/target collection, you can either click on "Transfer or Sync to" in the right menu or click the 'Dual Pane' in the Panels menu in the top right corner of the 'File Manager' window. Now you can search for the secondary collection that you want to transfer data to/from.

If you want to use Globus Online to move data to/from your own machine, you can install Globus Connect Personal. Installing Globus Connect Personal allows you to create an endpoint on your computer that you can use to transfer data to and from your computer. For installation, please visit: [https://www.globus.org/globus-connect-personal](https://www.globus.org/globus-connect-personal)

12\. You can then select the files you want to transfer. And click the 'Start' button.

13\. You should see "Transfer request submitted successfully" and an id for the transfer. Click "View Details" to see transfer progress. if you have started a transfer between two remote machines you don't have to keep your computer connect to Globus\*\*. When the transfer is complete you will receive an email.

{% hint style="info" %}
**\*\*If you are using Globus Connect Personal for a transfer to/from your machine, Globus personal needs to stay running on your machine for the transfer to complete.**
{% endhint %}

### Tips for Transferring Data between Globus and Google Drive

For Google Drive, there are "rate limits" on how much data and how many files a user can transfer in any 24 hour period. The following two tips can help to alleviate the restrictions from the rates limits:

* Transfer a subfolder as a job. A user can submit 2-3 jobs at a time.
* If the folder or subfolder contains a lot of small files, compress the folder or subfolders using zip or tar before the transfer.

## Globus links

* If you need more information on How Globus works, please refer to [HowTo Videos located ​here​](https://docs.globus.org/how-to/instructional-videos/).
* Check out [the Globus docs page](https://docs.globus.org/how-to/) for more info.
