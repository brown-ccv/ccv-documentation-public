# RStudio

RStudio by default saves all temporary files in the C:/ in Windows workstations. To prevent users from using too much space on the C:/ drive, storage quota per user is set for the C:/ drive on every Windows workstation. Users should follow the following steps to change the temporary directory so that they are not over their C:/ drive quota.

## **Step 1:**

Open RStudio and run the command tempdir() . This will show you the current temporary folder. Open the folder in Windows Explorer and check if there are any abnormally large files (several GB). R should have deleted these files at the end of the session. You should be able to delete old files in this directory, later.

## Step 2:

Identify the new location for the new temporary folder. It should NOT be in the C:\ . We recommend the data drive. Here, we will assume it is E:\R\_Temp\ccvdemo2

## Step 3:

1. Open RStudio
2. Run file.edit("\~/.Renviron") inside RStudio console. This will open a text editor. It might be empty.
3. Add this line in the text editor. Replace the path with your chosen path from step 1. Use two backslashes (\\\\) instead of one (\\).

```r
TMPDIR="E:\\R_Temp\\ccvdemo2"
TMP="E:\\R_Temp\\ccvdemo2"
TEMP="E:\\R_Temp\\ccvdemo2"
```

(R Documentation is unclear about the name of this variable. But setting all of them should work)

4\. Save this file

Restart RStudio to see the change in effect.

## Step 4:

To verify that the setup is complete run the command tempdir() inside RStudio console. You should see the new path in the list of paths.
