---
icon: globe
---

# Apache Web Hosting

The Apache web server hosts seminars and interest group sites like [www.dam.brown.edu/siam](http://www.dam.brown.edu/siam). It is separate from the general Applied Math site that can be found at [appliedmath.brown.edu](https://appliedmath.brown.edu/).

The pages are HTML-coded and are managed by uploading new content files through SFTP. Faculty members can request access for themselves and others that would assist in managing the sites.

## Required Software

An SFTP client is required to upload new content to the server. [Filezilla](https://www.brown.edu/information-technology/software/catalog/filezilla) is available on the Brown software page and supports Windows, Mac, and Linux.

The [Brown VPN](https://it.brown.edu/services/virtual-private-network-vpn) is required to access to server from off-campus.

## Uploading Content

1. Off-campus users must first connect to the [Brown VPN](https://ithelp.brown.edu/kb/articles/get-started-with-brown-s-vpn-virtual-private-network).
2. In Filezilla, click **File** > **Site** **Manager**.
3.  Click **New Site,** enter “**DAM web**” as the name.

    `Protocol: SFTP`

    `Host: www.dam.brown.edu`

    `Port: 22`

    `Logon Type: Interactive`

    `User: <your-username>`
4. On the **Advanced** tab, set **Default remote directory** to `/www.dam/htdocs`
5. Click **Connect**.
   1. Click **OK** to accept the server host key.
   2. Enter your Password and click **OK**.
   3. You may be prompted to select a Duo authentication method. Enter the number of your choice and click **OK**. (Note: this looks very similar to a password prompt.)
6. In the right pane (Remote site) the web directories are listed. Navigate to the folder of your site.

<figure><img src="../.gitbook/assets/unknown (1).png" alt="Filezilla folder listing"><figcaption></figcaption></figure>

7\. Upload files by dragging them from your local computer (left pane) to the server (right pane).
