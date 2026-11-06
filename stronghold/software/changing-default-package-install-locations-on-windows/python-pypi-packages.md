# Python (Pypi packages)

## Step 0

Follow this step only if you have already installed python packages on this workstation. Otherwise, skip to the next step.

Run this command to save the list of installed packages to a file on the Desktop

`pip freeze > %USERPROFILE%\Desktop\req.txt`

## Step 1

Identify the new location for installing python packages. Here, we will assume it is `E:\pip_packages`

## Step 2

Open Command Prompt and run this command. This is a one-time setup.

`pip config --user set install.target E:\pip_packages`

`pip config --user set install.user no`

## Step 3

After making these changes, run the command "`pip config list`" to verify the changes. You should see this output:

`global.index-url='https://pypi.services.brown.edu/simple'`

`global.target='E:\\pip_packages'`

`global.trusted-hosted='pypi.services.brown.edu'`

`install.user='no'`

## Step 4

If you have performed Step 0, follow this step. Otherwise, your setup is complete.

Run this command to reinstall your packages

`pip install -r %USERPROFILE%\Desktop\req.txt`

After the installation is complete, feel free to delete the contents of this folder

`%USERPROFILE%\AppData\Roaming\Python\Python37\site-packages`

AppData is a hidden folder. To see this folder, click on "View" on the File Manager Menu bar -> Check the "Hidden items" checkbox
