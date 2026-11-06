---
description: >-
  The section below describes how user groups are implemented in Stronghold.
  Note that the term "tenant" is used throughout; this refers a group, lab, or
  center's Stronghold instance.
---

# User Groups

Stronghold employs Active Directory security groups to control access to the system and to the data. These groups allow for specific access and control over data. While we can create custom security groups for finer control over data, below are the typical groups provided at the outset of the environment. It is up to the discretion of the PIs to place users into specific groups and the PIs must assign data permissions to those groups.

`sh_<tenant>_all` ← Membership in this group is required for access to the system. All individuals who need to access the system should be members of this group. Membership in this group does not mean access to the data is granted. It means the user has access to the system. For example, members of the `sh_datasci` group can access the `datasci` tenant's workstation(s) in Stronghold.

`sh_<tenant>_admins` ← Members of this group have access to all data on this tenant and are members of all other security groups on the tenant. Members of this group can also create new folders/directories. Typically, only the PI is a member of this group by default.

`sh_<tenant>_staff` ← Members of this group are typically permanent/vital members of the research team. Typically, PIs allow this group to access the majority/all data files.

`sh_<tenant>_users` ← Members of this group are usually students/interns. Typically, PIs allow this group to access some of the data files (as needed).

`sh_<tenant>_import_w` ← This group is used to transfer data into Stronghold. Members of this group can execute step 1 of the 2 step process for importing data. Members of this group can write to the transfer server from outside of Stronghold.

`sh_<tenant>_import_r` ← This group is used to transfer data into Stronghold. Members of this group can execute step 2 of the 2 step process for importing data. Members of this group can read from the transfer server from inside of Stronghold, and pull the data down to Stronghold.

`sh_<tenant>_export_w` ← This group is used to transfer data out of Stronghold. Members of this group can execute step 1 of the 2 step process for exporting data. Members of this group can write to the transfer server from inside of Stronghold.

`sh_<tenant>_export_r` ← This group is used to transfer data out of Stronghold. Members of this group can execute step 2 of the 2 step process for exporting data. Members of this group can read from the transfer server from outside of Stronghold, and pull the data out of Stronghold.

A PI can request to create a new security group and add users to the new group.
