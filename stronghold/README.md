# Highly Secure Computing (Stronghold)

Stronghold is a secure computing and storage environment that enables Brown researchers to analyze sensitive data while complying with regulatory or contractual requirements. It has been established by Brown University to be compatible with Federal and Rhode Island Law standards for data privacy and protection.

Each Principal Investigator (PI) is given a dedicated environment for their project to support their researchers, graduate students, and collaborators. Click the link below to request a new Stronghold Environment.

## [Request a Stronghold Environment](https://brown.atlassian.net/servicedesk/customer/portal/22/group/62/create/256)

## Key Features

* **Environments** - Linux or Windows compute environments available
* **Software** - Workstations come preinstalled with our [**Windows Standard Software**](software/windows-standard-software.md) or [**Linux Standard Software**](software/linux-standard-software/) packages
* [**Automated GitHub Sync** ](git/automatic-git-sync.md)- Changes made to remote git repositories are automatically pulled to local repositories in Stronghold after initial configuration
* **Remote Access** - Access system on campus through Brown Wireless or off campus through the Brown VPN
* [**Secure Transfers**](data-management/data-transfers/) - Transfer data in and out of Stronghold between whitelisted agencies or personal computers for permitted users though a secure, virus scanned transfer server via SFTP
* [**Data Downloads**](data-management/direct-downloads/) - Download data directly through your browser from whitelisted agencies via HTTPS and SFTP
* [**Box.com**](/broken/pages/-LsbgQ_IPhpaalt_y3sM) - Transfer data between workstation and Box.com via FTPS
* **Slurm** - Schedule and manage jobs running in Linux environments
* **Storage** - Store data in encrypted or unencrypted storage arrays
* **Databases** - Manage data with MySQL or Oracle databases
* **REDCap** - Secure database and survey builder and manager webapp for risk level 3 data residing in Stronghold
* **Automated Reports -** Receive automated reports as the PI of the environment on:
  * Security groups and members of these groups
  * Last logins of users accessing the environment
  * Date and time of transfers in and out of the environment
* **Dual Firewall -** Provides added layer of security for traffic coming in and out of your system

## Security

#### Overview

The security system includes, at a minimum, secure user authentication protocols including two-factor authentication and access measures as well as multiple layers of firewall protection, multiple methods to prevent and detect unauthorized access, operating system security patches at least monthly and remote access via virtual private network (VPN) protocol. In addition, Brown will provide an environment that segregates user data and access by security priority via secure virtual protocols and isolates the environment and user sessions from having any ability to download or copy data outside of the computing environment. In the event of a failed disk, the Information Security Group (ISG) provides a service to crush and dispose of the storage device, which meets NSA evaluation standards.

#### Physical Access

The Stronghold server system has been established by Brown University to be compatible with Federal and Rhode Island Law standards for data privacy and protection. The hardware resides in the central datacenter located in a dedicated, private facility equipped with fire suppression systems. It is protected by a card access system maintained by the Brown Department of Public Safety and is under constant surveillance by security cameras. Within the data center, an additional layer of protection is provided via a locked enclosure for the Stronghold hardware with additional combination and key access. Physical access to the data center is granted to approved Brown Computing and Information Services (CIS) staff and escorted hardware vendors only. Redundant power feeds, a 600kW generator and redundant uninterruptible power supplies (UPS) guarantee constant power and cooling. Brown has established and will maintain a security infrastructure covering its Stronghold system and other devices, including wired and wireless networks connecting its computers.

#### Remote Access

Access to the systems and data will be limited to authorized users and system administrators, who need root level access to maintain the system. User access is restricted to the Principal Investigator (PI), approved research staff and co-investigators. All administrative access is logged to individual accounts that are not shared. Policies and procedures are in place to remove access to users when they leave Brown or are no longer affiliated with the PI’s research. Administrative passwords are changed on a regular basis and whenever an administrative user leaves the University. Access to all files will be logged and audited; all file movement inbound and outbound of Stronghold is monitored and logged by the PI and senior research staff. An impartial security group also monitors the Stronghold environment for general unusual behavior. In addition, Stronghold's automated monitoring software sends a real-time email alert to the PI, senior Computing and Information Services personnel and ISG following any file access in the import or export areas of Stronghold, and for any access to files containing sensitive personal identifiers. Researchers handling sensitive information are required to complete appropriate training for the data they are working with.

#### Firewalls

Stronghold is accessible only from within the Brown campus network and by Virtual Private Network connections (using two-factor authentication) from outside the campus network. All network connections to Stronghold pass through at least two firewalls: a dedicated firewall on the Brown campus network and a host-based firewall in the Stronghold environment.
