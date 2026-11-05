# Snapshots

Campus File storage is protected by local snapshots. The frequency of local snapshots varies by the share/export/path. The typical frequency and its respective retention periods are

{% hint style="info" %}
Some paths might have snapshot schedules outside of the standard snapshot schedule.
{% endhint %}

| Frequency |     Retention     |
| :-------: | :---------------: |
|   Hourly  | 48 Hours (2 Days) |
|  6 Hours  | 48 Hours (2 Days) |
|   Daily   | 2 weeks (15 Days) |
|   Weekly  |      6 Weeks      |
|  Monthly  |      6 Months     |

## Recovering data from Snapshots

### Windows

#### Recover all of the contents of a folder

{% hint style="warning" %}
Using this method will overwrite any existing data. Please make sure the file/subfolder doesn't exist at the destination. Otherwise, you will be overwriting the data, which might lead to data loss. This method is recommended to restore the entire folder and not a subset of files within a folder.
{% endhint %}

1. Navigate to the right pane of the open Windows Explorer window of your departmental or research file share.
2. Right-click in the right pane of your Windows Explorer window and select “Properties” from the quick menu.
3. Click on the Previous Versions tab. Select the restore date from the list of dates available.
4. Click on the **Restore** button.
5. When asked if you want to restore the previous version, click the Restore button.
6. You will receive confirmation that the previous version has been restored. Click OK.

#### Recover a subset of files/subfolders within a folder

1. Navigate to the right pane of the open Windows Explorer window of your departmental or research file share.
2. Right-click in the right pane of your Windows Explorer window and select “Properties” from the quick menu.
3. Click on the Previous Versions tab. Select the restore date from the list of dates available.
4. Click on the **Open** Button. A new Window will open showing the contents of the folder from the date selected.
5. Find the file or folder to restore. Right-click the file or subfolder to restore and choose copy.
6. Go back to the original Explorer Window (where the Departmental file share is open), right-click in an open space, and choose paste.
7. The file/subfolder will be copied to the location you chose (this may take some time depending on the number of files/folders to recover).

### Unix

Depending on the path, snapshots are available up to 6 months. Please follow the steps to restore the data.

#### Path to snapshot folder

```console
## SNAPSHOT LOCATION

/mnt/path/to/export/.snapshot

ls /mnt/path/to/export/.snapshot
export_2025-04-22_00_00_00_UTC    export_2025-05-22_00_00_00_UTC
export_2025-06-22_00_00_00_UTC    export_2025-07-22_00_00_00_UTC

## Pick the correct folder to restore from
/mnt/path/to/export/.snapshot/export_<yyyy-mm-dd>_00_00_00_UTC/<path_to_restore>
```

**Example:**

```console
/oscar/data/.snapshot/Oscar_2025-06-22_00_00_00_UTC/bruno/data
```

#### Restoring the data

To restore a file, copy the file from the snapshot to your directory.

{% hint style="warning" %}
Before copying, make sure the file/subfolder doesn't exist at the destination. Otherwise, you will be overwriting the data, which might lead to data loss.
{% endhint %}

```console
# Locate the file/subfolder to restore
ls -l /oscar/data/.snapshot/Oscar_2025-06-22_00_00_00_UTC/bruno/data/<path_to_restore>

# Example (March 2025 Results subfolder got accidentally deleted):
ls -l /oscar/data/bruno/data/Mar25_analysis/
-rwxrwxrwx 1 bruno brown 22 Mar  1  2025 results.csv

ls -l /oscar/data/.snapshot/Oscar_2025-06-22_00_00_00_UTC/bruno/data/Mar25_analysis/
drwxrwxrwx 1 bruno brown 22 Mar  1  2025 results       <<< Missing SubFolder
-rwxrwxrwx 1 bruno brown 22 Mar  1  2025 results.csv

# Copy missing data from the snapshot
cd /oscar/data/.snapshot/Oscar_2025-06-22_00_00_00_UTC/bruno/data/Mar25_analysis/
cp ./results /oscar/data/bruno/data/Mar25_analysis/
```

IMPORTANT: Do **not** use the links in your home directory snapshot to try and retrieve snapshots of data and scratch. The links will always point to the current versions of these files. An easy way to check what a link is pointing to is to use `ls -l`

**Example:**

```console
ls -l /oscar/home/.snapshot/Osar_2023-06-22_00_00_00_UTC/bruno/data
lrwxrwxrwx 1 bruno brown 22 Mar  1  2016 /oscar/home/.snapshot/Oscar_2023-06-22_00_00_00_UTC/bruno/data -> /oscar/data/brown
```

### Mac

Connecting to snapshot folders from MacOS is not supported. Oit-Storage recommends restoring from remote-app servers using Windows recovery instructions.
