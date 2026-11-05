# Replication

Campus file storage service is considered a P2 service. Files22 and Oscar storage are replicated to a secondary (aka DR) site for disaster recovery purposes. Replication is performed at a share or export level. Depending on the RPO and RTO requirements of the data paths, replication is done between 30 minutes and once daily. Data at the DR site is always available in a read-only state.
