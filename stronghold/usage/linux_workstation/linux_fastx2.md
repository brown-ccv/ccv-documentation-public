# FastX 2

## Overview

Stronghold tenants with Linux compute environments can access their environments using **FastX 2**. These sessions are persistent, which allows users to disconnect and resume them at another time and from different devices. CIS has configured a lightweight graphical panel for users to launch terminal sessions and other software packages.

Due to the highly sensitive nature of the data contained in Stronghold, CIS has taken measures to restrict the ability to accidentally or intentionally move data out of the environment. Direct SSH access is not enabled for end users, as there is no way to restrict copying and pasting the contents of a file from an SSH session. Copying and pasting from remote applications to local applications is also disabled (and vice versa). Here's how it works:

1. Connect to tenant via **FastX 2**
2. Start a session for your environment using **FastX 2**
3. Navigate your environment

## Instructions

**NOTE:** Users on campus must be connected to the Brown WiFi or a wired connection in a research building. Off-campus users can access their environments by connecting through the [Brown VPN](https://it.brown.edu/services/virtual-private-network-vpn)

### 1. Establish a Connection using FastX 2

To get started, you’ll need to download and install **FastX 2** from [Brown Software Catalog](https://www.brown.edu/information-technology/software/catalog/fastx-2)

Launch FastX 2.

![](<../../.gitbook/assets/image (69).png>)

In the **FastX 2** connections window, click the `+` icon and select `SSH`

Complete the SSH connection fields.

Replace `<tenant>` with your assigned tenant and `<username>`with the username used to access Stronghold . The Name field can be filled in with any name you would like to call your session and Sci should be left blank.

Click Save

* Name: `<name>`
* Host: `<tenant>.stronghold.brown.edu`
* Port: `2201`
* User: `<username>`
* Sci:

![SSH Connection Window](<../../.gitbook/assets/image (90).png>)

Double click the connection entry you just created.

![](<../../.gitbook/assets/image (91).png>)

Enter your credentials and click `Continue`

![](<../../.gitbook/assets/image (52).png>)

You will be prompted to select a Duo two-factor authentication method. Enter the number of your choice, and click `Continue`

![](<../../.gitbook/assets/image (8).png>)

The first time you log in, you may see a window asking to confirm the authenticity of your environment. If this is your first time logging in, type “yes” in the text box and click `OK`.

### 2. Start a Session

After logging in, you’ll see the sessions window. If you had any running sessions, they would be listed here. Since this is your first time logging in, we’ll need to start a new session.

Click the `+` icon

![](<../../.gitbook/assets/image (63).png>)

Click “Stronghold” and “OK” to start the launcher panel.

![](<../../.gitbook/assets/image (65).png>)

### 3. Navigate Environment

A drop down menu of applications is found on the upper left hand side of the window

![](<../../.gitbook/assets/image (77).png>)

If you click the terminal icon from the drop down, you’ll open a new terminal window. In it, you can load [software modules](../../software/linux-standard-software/#software-modules), [Conda environments](../../software/linux-standard-software/#environment-modules), and run other commands. Expect to do most of your work here.

Note: you can only run one Stronghold panel at a time. Launching an additional panel will automatically terminate any other running sessions.

### 4. Exit/Leave a Session

To save and disconnect your session, click the “person” icon and select “Disconnect”, as shown in the picture below. The next time you log in you can resume your existing session by clicking the triangular “play” icon

![](<../../.gitbook/assets/image (35).png>)

{% hint style="info" %}
If you already close the FastX window where you can launch applications and/or start a terminal, the 'Disconnect' option will be in gray. Then you can just close the window shown in the picture above.
{% endhint %}

{% hint style="danger" %}
If you do not exit/leave a FastX session correctly, you may not be able to reconnect your existing FastX session again.
{% endhint %}
