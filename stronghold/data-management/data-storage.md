# Data Storage

|                                       | **OS, Applications** |          **Database**          |                      **Research Data**                      | **Swap, Scratch** |
| ------------------------------------- | :------------------: | :----------------------------: | :---------------------------------------------------------: | :---------------: |
| **Storage Type**                      |    Block^ Storage    |         Block^ Storage         |                         NAS^ Storage                        |   Block storage   |
| **Encryption**                        |       Encrypted      |            Encrypted           |                          Encrypted                          |     Encrypted     |
| **Backups**                           |       Cohesity       |           NAS^ in SH           |                             N/A                             |         NO        |
| **Backups: Encrypt-in-transit**       |       Encrypted      | In SH ecosystem, no encryption |                             N/A                             |        N/A        |
| **Backups: Encrypt data at rest**     |       Encrypted      |            Encrypted           |                             N/A                             |        N/A        |
| **Snapshots**                         |          NO          |          Yes - 1 Week          | Yes - Up to 6 weeks, both at origin and replicated location |         NO        |
| **Replication**                       |          N/A         |               Yes              |                             Yes                             |        N/A        |
| **Replication: Encrypt-in-transit**   |          N/A         |               Yes              |                             Yes                             |        N/A        |
| **Replication: Encrypt data at rest** |          N/A         |    NO; within SH Ecosystem^    |                   NO; within SH Ecosystem^                  |        N/A        |

^ Storage (NAS/Block) in 'SH ecosystem' follows NIST 800-88 Media Sanitization techniques. Stronghold abides by the "clear method" when data is deleted. Additionally, Stronghold abides by the "destroy" method, when an entire disk needs to be replaced.
