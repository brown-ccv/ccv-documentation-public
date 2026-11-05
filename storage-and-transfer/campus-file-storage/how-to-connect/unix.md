# UNIX

1. Before connecting to the service, please make sure the following packages are installed: _**samba-client, samba-common, and cifs-utils.**_
2. The easiest way (security implications of including a password in a system-generated mount) to access SMB shares is edit the /etc/fstab and include\
   “`<servername/sharename/folder_name> <mount_point> cifs user,uid=500,rw,suid,username=adusername,password=adpassword 0 0`”
3. To mount securely either by using a credential file or by doing auto-mount during the login process, a little bit of tweaking is necessary.
