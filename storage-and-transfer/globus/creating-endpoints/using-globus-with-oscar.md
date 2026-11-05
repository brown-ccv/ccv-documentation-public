# Oscar

## Access Oscar Collection

1. Navigate to [https://www.globus.org/](https://www.globus.org/), then click the 'Login' button in Figure 1.

<figure><img src="../../.gitbook/assets/image (11).png" alt="Screenshot of Globus Menu."><figcaption><p>Figure 1. Globus Web page</p></figcaption></figure>

2\. Select Brown University as Organization, then click 'Continue' in Figure 2.

<figure><img src="../../.gitbook/assets/image (31).png" alt="Screenshot of Globus Login Page with Brown University selected."><figcaption><p>Figure 2. Globus Web App Login</p></figcaption></figure>

3\. The page will redirect to the SSO Authentication page. Use your AD credentials.

<figure><img src="../../.gitbook/assets/image (29).png" alt="Screenshot of Brown University SSO login page."><figcaption><p>Figure 3. SSO Page</p></figcaption></figure>

4\. Navigate to File Manager, and enter 'BrownU\_CCV\_Oscar' in Collection Search as shown in Figure 4:

<figure><img src="../../.gitbook/assets/image (19).png" alt="Screenshot of Globus Collection search page."><figcaption><p>Figure 4. Collection Search</p></figcaption></figure>

5\. Click the BrownU\_CCV\_Oscar in the list from Collection Search, if it is your first time to access the BrownU\_CCV\_Oscar collection (Step 5 - 7), click the 'Continue' button in Figure 5 to be authenticated.

<figure><img src="../../.gitbook/assets/image (22).png" alt="Screenshot of Globus Consent required page."><figcaption><p>Figure 5. Collection Authentication</p></figcaption></figure>

6\. Click the your\_brown\_id@brown.edu in Figure 6.

<figure><img src="../../.gitbook/assets/image (4).png" alt="Screenshot of selecting the identity for the consent."><figcaption><p>Figure 6. Identity Selection</p></figcaption></figure>

7\. Click the 'Allow' button in Figure 7 to grant permissions to Globus Web App. You should read the Terms of Service and Privacy Policy.

<figure><img src="../../.gitbook/assets/image (15).png" alt="Screenshot of Globus  terms and conditions ."><figcaption><p>Figure 7. Grant Permissions</p></figcaption></figure>

8\. After authentication, the collection is displayed in File Manager as shown in Figure 8.

<figure><img src="../../.gitbook/assets/image (46).png" alt="Screenshot of Globus Collection Page."><figcaption><p>Figure 8. Oscar Collection</p></figcaption></figure>

9\. You may navigate through directories by clicking on them or entering one of the following in the 'Path' textbox:

* data directory - /data/\<pi\_group>/\<user\_name>/\<folder\_name>
* scratch directory - /scratch/\<user\_name>/\<folder\_name>
* home directory - /home/\<user\_name>/\<folder\_name>

Note that the \<pi\_group>, \<user\_name>, \<folder\_name> should be replaced by a PI's group, an Oscar username, and the actual folder name to access, as illustrated in Figure 9.

<figure><img src="../../.gitbook/assets/image (25).png" alt="Screenshot of Globus Navigation functionality."><figcaption><p>Figure 9. Select Folder</p></figcaption></figure>

10\. You may bookmark your selected folder, by clicking the Bookmark icon which is to the right of the Path search textbox, entering the name for the selected folder, and then click the 'Create Bookmark' button as shown in Figure 10. After that, a confirmation will be displayed as in Figure 11. Once a bookmark is saved, you can access it later by clicking the 'BOOKMARKS' icon in the left panel, and then click the bookmark from the list of your saved bookmarks, as shown in Figure 12.

<figure><img src="../../.gitbook/assets/image (13).png" alt="Screenshot of Bookmarking a Globus collection."><figcaption><p>Figure 10. Bookmark</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (44).png" alt="Screenshot of Confirmation of Saved Bookmark."><figcaption><p>Figure 11. Confirmation of Saved Bookmark</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (17).png" alt="Screenshot of all saved bookmarks."><figcaption><p>Figure 12. Access Bookmarks</p></figcaption></figure>

## Transfer data

11\. If you want to use Globus Online to move data to/from your own machine, you can install Globus Connect Personal. Installing Globus Connect Personal allows you to create an endpoint on your computer that you can use to transfer data to and from your computer. For installation, if you have started a transfer between two remote machines you don't have to keep your computer connect to Globus. When the transfer is complete you will receive an email. details see: [https://www.globus.org/globus-connect-personal](https://www.globus.org/globus-connect-personal)

12\. You can then select the files you want to transfer. And click the 'Start' button below.

13\. You should see "Transfer request submitted successfully" and an id for the transfer.

**Note if you are using Globus Connect Personal for a transfer to/from your machine, Globus personal will need to stay running on your machine for the transfer to complete.**

### Tips for Transferring Data between Globus and Google Drive

For Google Drive, there are "rate limits" on how much data and how many files a user can transfer in any 24 hour period. The following two tips can help to alleviate the restrictions from the rates limits:

* Transfer a subfolder as a job. A user can submit 2-3 jobs at a time.
* If the folder or subfolder contains a lot of small files, compress the folder or subfolders using zip or tar before the transfer.
