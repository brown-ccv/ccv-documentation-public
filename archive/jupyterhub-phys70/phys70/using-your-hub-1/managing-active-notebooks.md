# Managing Active Notebooks

## Shutting Down Notebooks

You can perform standard actions on your notebook files by right clicking on any individual file or directory. This will provide a list of applicable actions via a drop down menu. Options include cut/copy/paste, rename, download, duplicate, delete, and shutdown kernel (stopping the specific notebook processes).

Notebook kernels actively running have a small green circle icon to the left of the filename indicating their status (as seen in the example provided).

Additionally, you can manually manage actively running notebook kernels and terminals by selecting the ![](<../.gitbook/assets/image (4) (1).png>) **Running Terminals and Kernels** sidebar option. This will provide a detailed list of all active notebooks with the ability to halt their processes by using the **Shutdown** button

![](<../.gitbook/assets/image (14) (1).png>)

{% hint style="info" %}
Shutting down a notebook kernel does note delete any of its content or data, but simply halts all running code until it has been restarted.
{% endhint %}

## Restarting Notebook Kernel

Periodically a given notebook may begin to misbehave. This can be due to a poorly constructed segment of code, resource overflows, or other similar events. A common solution to these types of problems is to restart the notebook kernel, which will release any memory and variable states of the notebook and reload them. This can be done by selecting **Kernel > Restart Kernel**.

{% hint style="info" %}
If you are experiencing poor performance or erratic behavior with a given notebook, it is typically a good first step to shutdown unused notebooks and restart the targeted notebook's kernel.
{% endhint %}
