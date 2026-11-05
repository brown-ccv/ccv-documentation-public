# Data Protection

To ensure the resilience and availability of the files22 file system, we utilize a dual-layered protection strategy: **snapshots and replication**.

_**Snapshots**_ are point-in-time "images" of your data that enable near-instant recovery of files accidentally deleted or overwritten. _**Replication**_, on the other hand, is the automated process of syncing your data to a physically separate disaster recovery site. While snapshots safeguard against daily user errors and local file corruption, replication provides a critical fail-safe against major hardware failures or site-wide outages, ensuring your data remains secure and accessible even in a disaster scenario.

{% hint style="info" %}
Depending on service requirements and purpose, not all paths are 'Replicated'.
{% endhint %}
