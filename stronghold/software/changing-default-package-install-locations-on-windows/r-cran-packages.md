# R (CRAN Packages)

## Step 0

Follow this step only if you have already installed R packages on this workstation. Otherwise, skip to the next step.

Open RStudio and run the command `.libPaths()` inside the console. Copy the line that starts with `C:/Users` . This is the current location where user-installed packages are located. Paste this in the Address bar of the Windows File Browser. Keep this Window open

## Step 1

Identify the new location for installing R packages. Here, we will assume it is `E:\R_packages\3.6` .If you use two different versions of R, you will to choose different directories for each version.

## Step 2

1. Open RStudio
2. Run `file.edit("~/.Renviron")` inside RStudio console. This will open an empty text editor.
3. Add this line in the text editor. Replace the path with your chosen path. Use **two** backslashes (\\\\) instead of one (\\).\
   `R_LIBS_USER="E:\\R_packages\\3.6"`
4. Save this file
5. Restart RStudio to see the change in effect

## Step 3

To verify that the setup is complete run the command `.libPaths()` inside RStudio console. You should see the new path in the list of paths.

## Step 4

If you have performed Step 0, follow this step. Otherwise, your setup is complete.

Copy the contents of the folder from Step 0 to the new folder from Step 1. Run the command `installed.packages()` or `library()` to verify that the packages are available.
