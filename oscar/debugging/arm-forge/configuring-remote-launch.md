# Configuring Remote Launch

## Configuring Remote Launch from the client

You will need to configure remote launch for Oscar

1. Open the client on your machine
2. Click 'Remote Launch' -> Configure
3. Enter the following details in each field:
   * **Host Name**: `username@ssh.ccv.brown.edu`
   * **Remote Installation Directory**: Add the path to the forge executable here. You can obtain this by loading the `linaro-forge` module on Oscar and running the command `which forge`
   * Check the **Proxy through login node** checkbox
4. Click the **Test Remote Launch** button
5. You should enter the password used for Oscar when prompted.

If successful you should see the message `Remote Launch test completed successfully`

![Remote launch settings for Oscar. The fields are filled as per instructions in step 3](<../../.gitbook/assets/Screen Shot 2019-08-05 at 2.41.01 PM.png>)

{% hint style="info" %}
If you have a mismatch between your client version on the version of Forge on Oscar you will see an error message. To fix this make sure you are using compatible client and remote versions
{% endhint %}

![Popup box warning to ensure the compatibility between client and remote versions](<../../.gitbook/assets/Screen Shot 2019-08-05 at 2.45.28 PM.png>)

{% hint style="info" %}
Once you are connected you will see a Licence checked out and "Connected to username@ssh.ccv.brown.edu' on the client.
{% endhint %}

![Arm Forge Launch Screen](<../../.gitbook/assets/Screen Shot 2019-08-05 at 2.48.46 PM.png>)
