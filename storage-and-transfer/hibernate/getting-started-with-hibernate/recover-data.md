# Recover Data

Similar to the archive process, recovering archived folders is a complex process. Some of the key factors that impact recovery times are:

* Number of objects
* Path depth
* The total size of the dataset to be recovered

Following are the steps to recover data using Hibernate service:

1. Within Starfish GUI, change the mode (top left) to 'Recovery' mode. By default, the mode is set to "Browsing (Latest data)'.
2. **Identify the data**: In 'Recovery' mode, users will be able to see previously archived data. Navigate to the directory you wish to recover.
3.  **Tag the Data**: Right-click on the particular directory and select <mark style="color:green;">Tags > Action Tags > A Hibernate: Recover.</mark> If you are unable to tag the folder, please note down the path.

    <div data-gb-custom-block data-tag="hint" data-style="danger" class="hint hint-danger"><p>Please do not select the '<strong>Recover</strong>' option.</p></div>

    ![Menu tree with the "tags" option leading to an "action tags" option, which then leads to the "Hibernate: Recover" action](<../../.gitbook/assets/Screen Shot 2022-01-12 at 4.16.32 PM.png>)

    1. Once you select that, the <mark style="color:green;">A Hibernate: Recover</mark> tag should appear on the directory​<br>

    ![The data table displaying the "Hibernate Delete" tag](<../../.gitbook/assets/Screen Shot 2022-01-12 at 4.16.47 PM.png>)

    1. Repeat the procedure to tag all relevant folders and files to be recovered.
4. **Recover Data**: Once tagging is complete, please complete the [Hibernate Service Request form](https://brown.atlassian.net/servicedesk/customer/portal/16/group/55/create/468) and select the appropriate action tag. This will automatically submit a ticket to the storage team to start the appropriate process.

## Best Practices (Restore)

Factors that affect the archive process also affect the restore process like directory/file sizes, the number of files in a single directory, etc. play a critical role in determining how efficiently data can be archived. Here are some best practices to facilitate an efficient archive process:

* Always tag folders and not individual files (except compressed folders - see next tip). If a single file(s) needs to be archived, move it to a folder.
* Folders that are small in size but contain thousands of files should be compressed (zip, tar). _For example, archiving a folder of size 10GB containing 500,000 files will be treated as 500,001 objects (files+folder) to archive and the same for retrieval. However, if the same folder is compressed, it is treated as one (1) object to archive._
