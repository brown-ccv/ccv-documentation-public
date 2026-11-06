# Transferring Files between Oscar and Campus File Storage (Replicated and Non-Replicated)

You may use either Globus (recommended) or smbclient to transfer data between Oscar and Campus File Storage.

## Globus

Follow the instructions [here for transferring data between files.brown.edu and Oscar](https://docs.ccv.brown.edu/storage-and-transfer/globus/getting-started/transfer-data).

## smbclient

You can transfer files between Campus File Storage and Oscar using [smbclient](https://www.samba.org/samba/docs/man/manpages-3/smbclient.1.html).

### Transfer Instructions

1\) Log into Oscar:

```sh
   ssh ssh.ccv.brown.edu
```

2\) Start a screen session. This will allow you to reattach to your terminal window if you disconnect.

```sh
    screen
```

3\) To use Oscar's high-speed connection to Campus File Storage - Replicated:

```sh
    smbclient "//smb.isi.ccv.brown.edu/SHARE_NAME" -D DIRECTORY_NAME -U "ad\BROWN_ID" -m SMB3
```

Similarly to access Campus File Storage - Non-Replicated ( LRS: Locally Redundant Share)

```sh
smbclient "//smblrs.ccv.brown.edu/Research" -D DIRECTORY_NAME -U "ad\BROWN_ID" -m SMB3
```

Replace SHARE\_NAME, DIRECTORY\_NAME, and BROWN\_ID. DIRECTORY\_NAME is an optional parameter. The password required is your **Brown** password.

4\) Upload/download your data using the FTP "put"/"get" commands. Replace DIRECTORY\_NAME with the folder you'd like to upload.

```sh
   put DIRECTORY_NAME
```

5\) You can detach from the screen session with a "CTRL+A D" keypress. To reattach to your session:

```sh
   screen -r
```

### smbclient basics

* `put` is upload to Campus File Storage

Usage: `put <local_file> [remote file name]`

Copy `<local_file>` from Oscar to Campus File Storage. The remote file name is optional (use if you want to rename the file)

* `get` is download to Oscar

Usage: `get <remote_file> [local file name]` Copy `<remote_file>` from the Campus File Storage to Oscar. The local file name is optional (use if you want to rename the file)

### Moving more than one file:

To move more than one file at once use `mput` or `mget`. By default:

`recurse` is OFF. smbclient will not recurse into any subdirectories when copying files

`prompt` is ON. smbclient will ask for confirmation for each file in the subdirectories

You can toggle recursion ON/OFF with:

```sh
recurse
```

You can toggle prompt OFF/ON with:

```sh
prompt
```
