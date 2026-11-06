---
description: >-
  The following instructions are for authorized Lifespan staff attempting to
  access Stronghold workstations without the use of Brown's VPN
---

# Lifespan Staff Access

Hospital personnel inform LifeSpan network personnel they need to access Stronghold at Brown via the tunnel. They must provide their workstation IP address. If no action is required on LifeSpan's part to facilitate access to the tunnel on their end (e.g., firewall rules, tunnel entrance NAT), then LifeSpan's network personnel pass the user's IP address on to Brown's Network Technology Group (NTG).

NTG creates a one-to-one NAT for the LifeSpan user's IP to convert their 10-net address to Brown's use of the 10-net address space.

Once the NAT is assigned and implemented, NTG forwards the NAT IP to ISG for inclusion on the appropriate firewall rule for the specific tenant.

The network object in the firewall will be created using the name of the user associated with the IP address (e.g., WKSN\_LifeSpan\_JDoe) to maintain the association of identity with IP address.

The user should now have access to the workstation.
