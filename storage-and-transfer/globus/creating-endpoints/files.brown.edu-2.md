---
description: >-
  This article describes how to create a Globus Collection to access your
  Research folder(s) in files.brown.edu/Research/ share using either the Globus
  Web Interface​ or the Globus Connect Personal app.
hidden: true
---

# files.brown.edu (Deprecated)

## Prerequisites:

* All users should have access to Research Folder on the '//files.brown.edu/Research' share. If you don’t have one, please contact support@ccv.brown.edu to request access to an existing folder or create a new one. [More Info](https://ithelp.brown.edu/kb/articles/decide-how-to-store-and-share-files-for-researchers).
*   All users should have &#x200B;_&#x75;idnumbe&#x72;_&#x200B; and &#x200B;_&#x67;idnumber_ ​associated with their _shortid_ in Brown

    AD. Without _uidnumber_ and _gidnumber_, Globus will not be able to a uthenticate to the storage.

## Creating a Globus Collection

{% hint style="info" %}
_**Note:**_ ​If you are already a subscriber of Globus service and have a Globus account, some of the permissions pages might not show up during this process.
{% endhint %}

1. Navigate to [https://www.globus.org/](https://www.globus.org/), then click the 'Login' button in Figure 1.

![Figure 1. Globus Web page](<../../.gitbook/assets/image (11).png>)

2\. Select Brown University as Organization, then click 'Continue' in Figure 2.

{% hint style="warning" %}
PLEASE DO NOT USE "Sign in with Google"
{% endhint %}

<div align="center"><img src="../../.gitbook/assets/image (31).png" alt="Figure 2. Globus Web App Login"></div>

3\. The page will redirect to the SSO Authentication page. Use your AD credentials.

![Figure 3. SSO Page](<../../.gitbook/assets/image (29).png>)

4\. Navigate to 'File Manager', and enter '_**BrownU**_**\_**_**GlobusMEP\_Files**_' in Collection Search as shown in Figure 4:

![Figure 4: Globus Collection Search](../../.gitbook/assets/Search_Collection_Files.JPG)

5\. Click the **BrownU\_GlobusMEP\_Files** in the list from Collection Search, if it is your first time to access the BrownU\_GlobusMEP\_Files collection (Step 5 - 7), click the 'Continue' button in Figure 5 to be authenticated.

{% hint style="info" %}
**Note:** You can skip steps 5-7, if you have accessed 'BrownU\_GlobusMEP\_Files' collection before, you will not be prompted for authentication.
{% endhint %}

![](../../.gitbook/assets/Files_Authentication.jpg)

6\. Click the "\<your\_brown\_shortid>@brown.edu" in Figure 6.

![](../../.gitbook/assets/Identity_required.jpg)

7\. Click the 'Allow' button in Figure 7 to grant permissions to Globus Web App. You should read the Terms of Service and Privacy Policy.

![](<../../.gitbook/assets/GlobusMEP _perms.png>)

{% hint style="danger" %}
_If you don’t have your ‘**uidnumber**’ and ‘**gidnumber'** set properly, you will not be able to create a collection. You might end up with an error page like '_&#x49;dentity set contains an identity from an allowed domain, but it does not map to a valid username for this connector' OR 'An unexpected error has occurred'. _Please contact ​help@brown.edu or your local ITSC to resolve the issue._
{% endhint %}

![](https://gblobscdn.gitbook.com/assets%2F-LtBPWc3lCoK-ZiQIe15%2F-M4JgRWw2Km5KKj9Wxvk%2F-M4P9zqPCnd5gTwh72Af%2Fguest_collection_error.png?alt=media\&token=c2b60621-dd08-4367-80c8-a3c5834785ac)

8\. After authentication, the collection is displayed in File Manager as shown in Figure 8.

![Figure 8: Folder Selection](../../.gitbook/assets/Files_Folder_Select.jpg)

9\. In the 'Path' textbox, please enter your Researc&#x68;_&#x46;olderName. For Example: '"_**CIS\_Storage**_"_ as in **\\\files.brown.edu\Research\CIS\_Storage**, as illustrated in Figure 9.

![Figure 9: Select Research Folder](../../.gitbook/assets/Files_Folder_select_edited.jpg)

10\. You may bookmark your selected folder, by clicking the Bookmark icon which is to the right of the Path search textbox, entering the name for the selected folder, and then click the 'Create Bookmark' button as shown in Figure 10.

* **Bookmark Syntax​:** We want this name to be a standard for management purposes. ​Note: Non-Standard Names might not get associated with Brown Subscription. ​Please avoid putting your Brown ShortID in place of Name/Initial.
  1. **Syntax​:** ​BrownU​\_\<Name/Initials>\_\<FolderName>
  2. **Example:** BrownU\_AJ\_CIS\_Storage

After that, a confirmation will be displayed as in Figure 11. Once a bookmark is saved, you can access it later by clicking the 'BOOKMARKS' icon in the left panel, and then click the bookmark from the list of your saved bookmarks, as shown in Figure 12.

![Figure 10: Creating Bookmark](../../.gitbook/assets/Files_Bookmark.JPG)

![Figure 11: Saving Bookmark](../../.gitbook/assets/Files_Bookmark_saved.JPG)

![Figure 12: Saved Bookmarks](../../.gitbook/assets/Files_bookmark_snap_edited.jpg)

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

### [Troubleshooting Globus](../support/troubleshooting.md)

### Globus links

* If you need more information on How Globus works, please refer to [HowTo Videos located ​here​](https://docs.globus.org/how-to/instructional-videos/).
* Check out [the Globus docs page](https://docs.globus.org/how-to/) for more info.
