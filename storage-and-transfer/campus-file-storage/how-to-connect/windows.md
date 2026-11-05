# Windows

If you are logged into the Brown domain, your shared drives will automatically be mapped at login, meaning they can be accessed from My Computer. If not, follow these steps to connect to the drive.

{% hint style="warning" %}
If you are off campus, you will need to [connect to the Brown VPN](https://ithelp.brown.edu/kb/articles/connect-to-brown-s-vpn-pc-mac) and have [CrowdStrike](https://software.brown.edu/) installed before following the instructions below.
{% endhint %}

1. Reboot your computer to refresh your mapping.
2. Click the Start Menu, type in "Run" (without quotes), and press Enter:
   * **`\\files22.brown.edu\dfs`** (departmental shares) or
   * **`\\files22.brown.edu\departments`** (departmental shares - Multiprotocol) or
   * **`\\files22.brown.edu\multimedia`** (Multimedia shares) or
   * **`\\files22.brown.edu\research`** (Replicated Research folders) or
   * **`\\files22.brown.edu\lrsresearch`** (Non-Replicated Research folders)
3. If your computer is not in Active Directory (AD), you will be prompted to enter a username and password. Be certain to enter your username in the format **`ad\username`** (e.g., _ad\jcarberr_).
4. A list of folders\*\* will appear in Windows Explorer based on the share you connected to (from above). Double-click on the folder name you wish to access.
5. You may create a desktop shortcut to your Departmental or Research file share by right-clicking on the share and selecting “create shortcut” from the quick menu. A dialog will appear notifying you that you cannot create a shortcut in this location, but you can place it on the desktop. Click Yes.

{% hint style="info" %}
Local downloads are typically unnecessary. However, if an application requires low-latency access for processing, copy the file to your local drive. Once finished, upload the updated version to files22 to ensure the data is properly backed up and accessible to your department.
{% endhint %}

{% hint style="info" %}
\*\* Files22 is enabled with Access Bases Enumeration (ABE). So, users will only see folders that they have access to. The rest of the folders will remain hidden.
{% endhint %}
