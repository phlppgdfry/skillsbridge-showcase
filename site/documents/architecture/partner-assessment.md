# Partner integration assessment
Decision owner: Product Owner; technical assessment: Integration Architect; approval for data access: customer system owner and Security/HR governance. These are proposed responsibilities, not actual appointed people.

| Dimension | ServiceNow source | Fictional HR destination | ESCO reference |
|---|---|---|---|
| Business job | Selected incident evidence | Approved skill update | Inspect a related vocabulary concept |
| Access | Authorized developer tenant absent | Local simulator only | Anonymous public read-only endpoint observed |
| Contract | Real Table API context researched; tenant schema unverified | Fictional strict local schema | Fixed Skill URI, English label and class verified |
| Identity | Source user to authoritative employee ID must be reconciled | Synthetic employee IDs | No employee identifier transmitted |
| Versions | Agree release, selected fields and change notice | v1 local contract; source revision bounds approval | Request selectedVersion=v1.2.0; response does not confirm effective version |
| Reliability | Validate pagination, ACL visibility, incremental cursor and limits | Three bounded command-driven attempts; local idempotency | Five-second timeout, 64KB streamed bound, redirect rejection, one request/60s per process |
| Operations | Need support owner, error budget and replay runbook | Observable attempts/audit; no durable recovery | Explicit recorded/cached/live/fallback mode |
| Mapping | Work attribution must be validated | Two fictional taxonomy mappings; unknown blocks | Related reference only; no approved crosswalk or automatic write |
| Decision | Defer external adapter until tenant access and purpose agreed | Retain for reliable offline demonstration | Implement narrow read-only reference boundary |

## ServiceNow access spike before commitment
1. Customer IT creates least-privilege credentials in an authorized non-production instance; secrets stay server-side and outside Git/chat.
2. Select only synthetic permitted records. Confirm actual incident fields, closure states, user references, pagination order and ACL effects with the owner.
3. Document source cursor semantics, deletions, rehires and changed attribution. Compare event revisions to actual provider change markers; do not infer equality.
4. Verify 429/Retry-After, expired credentials, schema changes and duplicate pages. Agree rate budget and a bounded replay policy.
5. Agree acceptance examples and the decision to stop, reduce fields or partner instead. No connector may be called complete from a static mocked payload alone.

## Destination spike
Before any real write, establish field semantics, source-of-truth ownership, upsert keys, concurrent updates, revoked approval and remote correction/retraction. A lost acknowledgement after remote commit needs provider idempotency or reconciliation. The local operation-key guarantee does not prove remote exactly-once delivery.
