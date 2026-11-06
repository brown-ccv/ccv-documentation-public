# SFTP Data Transfers

Stronghold tenants use transfer (xfer) servers to import data into and export data from their workstations through SFTP. Access to the xfer servers is granted by group membership. These groups designate which workflows (e.g. export, import) users have permission to use and in which locations they will have read and write privileges.

Additionally, uploading to the import area is restricted to users that log in from outside of Stronghold. The reverse is also true, uploading to the export area is restricted to users that log in from inside of Stronghold.

**Files transferred to the xfer server are not available for transfer from the server until virus scanning is completed. Virus scanning typically only takes a few minutes but is dependent on the size, type, and number of files being transferred.**

**A note on data deletion:** The data that is uploaded to the xfer server is automatically deleted after 24 hours. To manually delete data, users will need ownership of the files, membership in the appropriate write group `sh_<tenant>_import_w` or `sh_<tenant>_export_w`, and to be logged in from outside when deleting import files and from inside when deleting export files.

## Required Software

We recommend using FileZilla for file transfers, which is an open source SFTP client for Windows, Mac, and Linux. Any SFTP client software should work as long as the transfer setting can be configured to use the browser connection or be limited to a single connection; otherwise the user will be prompted for multiple password/Duo authentications. Also please note that our documentation uses FileZilla as the SFTP client in examples.

FileZilla can be downloaded by going to Brown’s software catalog and selecting the FileZilla link near the bottom of the [page](https://www.brown.edu/information-technology/software/free-alternatives-brown-licensed-software). Please download and install on your computer or system.

Please follow the [Data Exports](sftp-data-exports.md) guide in order to export data from the Stronghold workstation and [Data Imports](sftp-data-imports.md) guide to import data into your Stronghold workstation.
