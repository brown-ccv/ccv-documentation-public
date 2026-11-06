# Stata packages

## Step 1: Download package

Download the [stata package files](https://ideas.repec.org/s/boc/bocode.html) (.ado, .sthlp, etc). You can search your package name on that page and click the red "Download" button to download the files

## Step 2: Transfer Files to Stronghold

Follow the [instructions to transfer these files](../../data-management/data-transfers/sftp-data-imports.md) to the Stronghold Workstation. You need to be a member of the import security groups to be able to do this step. If you are not a member, you should ask someone else who is a member of this group to transfer the files for you.

## Step 3: Location to store packages

{% hint style="warning" %}
This is a one-time step. You do not have to repeat this step if you performed it before.
{% endhint %}

Identify the new location for installing Stata packages. Here, we will assume it is `E:\stata_packages`

## Step 4: Add package to folder

Add the packages transferred in Step 2 in this folder.

## Step 5: Modify profile.do

{% hint style="warning" %}
This is a one-time step. You do not have to repeat this step if you performed it before.
{% endhint %}

1. Open the file browser and go to your home folder. You can do this by entering this in the address bar\
   `C:\Users\<username>`\
   For example, the home directory for user `ccvdemo2` is `C:\Users\ccvdemo2`
2. Create a new text file in the folder using Notepad. Enter this text in the file.\
   `sysdir set PLUS "E:\stata_packages"`\
   Use the folder from Step 3 instead of `E:\stata_packages`
3. Save this file in the home directory with the name `profile.do` . Choose a blank "Save as type", to prevent Windows from adding a `.txt` file extension.
4. Open Stata and run the command `sysdir`. You should see the new folder from step 2 listed here.
