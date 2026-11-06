# RDP Gateway from Mac

The **RDP Gateway** allows users to access Windows workstations within a Stronghold tenant **without** connecting to the Brown VPN. This option is intended for users who experience degraded performance while using the VPN.

Before proceeding, please confirm with **support@ccv.brown.edu** whether RDP Gateway access is enabled for your tenant.

> ⚠️ **Note:** We do not recommend using the RDP Gateway if you are already connected to a Brown-compliant network (e.g., Brown Wi-Fi, on-campus wired connection, or Brown VPN). Doing so may introduce additional network overhead and result in further performance degradation.

Follow the instructions below to configure your connection through the RDP Gateway.

## Instructions

### 1. Download `Windows App` for Mac

Mac users can download the `Window App` from the Apple store using this [Download Link](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12)

<figure><img src="../../.gitbook/assets/image (114).png" alt="" width="367"><figcaption></figcaption></figure>

### 2. Access Your Stronghold Tenant

#### 1) Launch the **Windows App**.

#### 2) Click **“+ (New)”**, then select **“Add PC”** to create a new connection.

<figure><img src="../../.gitbook/assets/image (116).png" alt="" width="563"><figcaption></figcaption></figure>

#### 3) **In the configuration screen:**

* Enter your Stronghold tenant name using the format: `<tenant>.stronghold.brown.edu`.
* Select your user credentials from the dropdown menu.
  * If your credentials are not listed, click **“Add Credentials”**, then enter your login information.
  * In the **Username** field, enter **`AD\<username>`**.
* Go to the **General** tab, click the **Gateway** dropdown menu, and select **“Add Gateway…”**.
  * In the **Gateway name** field, enter `srdg.ad.brown.edu`.
  * Under **User account**, choose the user credentials you added in the previous step.
  * Click **Add**.

<figure><img src="../../.gitbook/assets/image (106).png" alt=""><figcaption></figcaption></figure>

#### 4) Click **“Add”** to save the PC and credential settings. Your Stronghold workstation will then appear under **“Saved PCs”**. Double-click it to initiate the connection.

<figure><img src="../../.gitbook/assets/image (120).png" alt="" width="563"><figcaption></figcaption></figure>

#### 5) When a warning message appears, click **“OK”** to continue.

<figure><img src="../../.gitbook/assets/image (121).png" alt="" width="563"><figcaption></figcaption></figure>

#### 6) You will be prompted for **Duo authentication**. Under **“Choose an authentication method,”** select your preferred option. The device list will display your device name and the last four digits of your phone number.

<figure><img src="../../.gitbook/assets/image (122).png" alt=""><figcaption></figcaption></figure>

#### 7) Once connected to the workstation, the interface will appear as shown below.

<figure><img src="../../.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

#### 8) The one-time setup for this tenant is now complete.

Your new PC will appear under the **“Saved PCs”** tab in your Windows App. Simply double-click it to launch the workstation. You will be prompted to complete two-factor authentication both at the RDP gateway and on the workstation itself. Follow the prompts to successfully connect.
