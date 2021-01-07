### Postgres Migration Challenge

# Assumptions made
- We are assuming that the live DB has the necessary CPU and memory capable of having multiple sources read/write from it. We won't create a read-only DB or a third database to normalize the two data sets.

# Input

We have provided two public docker images that each contain one of the data
sets loaded into a postgres 13 database. The pre-migration image represents
an old database that is now unused by any application and the post-migration
image represents the new “live” production database.

The original data set:
docker run -p 5432:5432 guaranteedrate/homework-pre-migration:1607545060-a7085621
username: old
database: old
password: hehehe

The migrated data set:
docker run -p 5433:5432 guaranteedrate/homework-post-migration:1607545060-a7085621
username: new
database: new
password: hahaha

# Output
Your program must output a report that could be used to fix the missing and
incorrect data. Your report should also include those rows that exist in the new
dataset but not in the old dataset.

# Ambiguity
You may make simplifying assumptions along the way so long as you document
the assumptions you made and satisfy all parts of this prompt. If you continue to

the final interview be prepared to discuss those assumptions and potential com-
plicating factors were this a real scenario. If you feel unable to make/document

a reasonable assumption and require additional clarity you may reach out to us.
Technical Clarifications:

- You may write this program in any language of your choice. We won’t
penalize you for language choice so please just use whatever you’re most
comfortable with.
- If you find a record in the original data set and in the migrated data set
that share the same primary key you should assume they refer to the same
entity. No primary keys were corrupted during or since the migration.
- If two records referring to the same entity have different data in any shared
column you should consider that record to have been corrupted by the
migration and include it in your report.
- If you find a record in the original data set that is not in the migrated
data set you should consider it to have been missed during the migration
(no records were intentionally omitted by the migration and records are
never deleted).
- If you find records in the migrated data set that are not in the original
data set you should consider those records to have been newly created
since the migration. There would be no need to repair these records but
your report should still include them.

# Checklist 
- You valued correctness, simplicity, readability, and efficiency over being clever
and sophisticated.
- You’ve written tests to demonstrate with high confidence that your code
does what it should.
- You’ve documented how to use your program such that an experienced
engineer could run it without assistance.
- You’ve documented any assumptions you made beyond what was explicitly
described here.