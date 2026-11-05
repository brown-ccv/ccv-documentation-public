# Cutover Process

## Prerequisites

1. All the folders should be in sync within 1 week of delta time.
2. PI/Admins will choose a strategy to do a cutover **all at once** or **individual folders**
   *   **All-at once**

       _**Pros**_: Less coordination of folder users, greater assurance that all data is present and in sync, less opportunity for data to be written/updated to the incorrect location, easy to manage.

       _**Cons**_: On research folders with a large number of files (>4M), the cutover window can span multiple days.
   *   **Individual top-level folders**

       _**Pros**_: cutover window is restricted to a single top-level folder.

       _**Cons**_: Needs a lot of coordination and management as multiple top-level folders will be moved at variable times, work that is dependent on multiple folders can be affected.
3. All parties should be notified about the change in advance.

{% hint style="danger" %}
**IMPORTANT NOTE: In both approaches, both locations (source and destination) will be writable. It’s up to admins and users to make necessary changes to avoid data loss. Please keep reading for more details.**
{% endhint %}

## **Cutover**

The following steps will be done on the day of the cutover process:

1. PI/Admin will provide the storage team with a date to cutover a folder(s)
2. **All-at-Once**:
   1. Make a note of Security group membership.
   2. Admin will remove id’s user’s from the respective security groups - At the top level only.
   3. The storage team will start the final sync.
   4. Once the sync is completed, the storage team will inform admins to validate the number of files, size etc.
   5. Once verified by admins and the storage team, admins will update drive mapping to the research storage
   6. Admin will re-add the id’s to the respective security groups.
3. **Individual top-level folders**:
   1. Admin will NOT remove id’s user’s from the respective security groups - users continue having data access during cutover. However, they are instructed NOT to write/modify files (treat it as read-only).
   2. The storage team will start the final sync of the identified folder(s).
   3. Once the sync is completed, the storage team will inform admins to validate the number of files, size etc.
   4. Admin will update drive mapping to the research storage: _**admin will disable drive mapping GPO, and work with individual users to manually map the drive**_. Once all users are on the new location, enable the new GPO mapping a drive to LRS
4. Use StarFish to cross-check file counts.
5. Once the data is verified at the new location (LRS), data will be purged at the old location (files).

## Things to do - For RESEARCHERS

1. DO NOT write any new files on the day of the cut-over.
2. Update all scripts to point to the new location.
3. Only start writing to the new location after the confirmation from your IT team.
4. Spend some time on the validation process - Ask yourself “How can I check if my scripts are working?”
