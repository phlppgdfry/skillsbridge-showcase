# Operational ownership and support runbook
Proposed real-pilot runbook; simulator actions exercise only the labeled local behavior.

| Trigger | First safe action | Responsible collaboration | Resume condition |
|---|---|---|---|
| Wrong identity / employee challenge | Hold affected updates; verify source identity and prior writes | HR governance + architect | Correct attribution, reviewed correction and employee response |
| 429 / temporary outage | Retain approved work; respect eligibility; inspect retry budget | Integration operator + partner support | Provider stable and idempotency/reconciliation verified |
| Retry budget exhausted | Stop blind replay; inspect cause and affected operations | Operator + engineering | Cause resolved; explicit safe replay/reconciliation plan |
| Unsupported taxonomy | Block update; no guessed mapping | Skills governance + HR owner | Approved versioned crosswalk and renewed review |
| Changed evidence after approval | Invalidate pending authorization; inspect any prior writes | Reviewer + governance | Current revision approved; correction/retraction agreed for earlier writes |
| Credential / authorization failure | Stop the connector; no privilege escalation workaround | Security + customer IT | Least-privilege access restored and audited |
| Provider schema/version change | Quarantine invalid payloads and compare supported contract | Architect + engineering + Product | Compatibility test, migration/rollout plan and owners agreed |
| ESCO reference failure | Show recorded fallback; continue synthetic demo | Demo operator | Successful explicit live check or use clearly labeled recorded reference |

Acknowledge incidents using severity based on employee harm and affected scope, not just HTTP status. Agree actual response times and on-call responsibilities before pilot launch. Track detection, containment, reconciliation and prevention actions. The prototype has no real pager, ticket integration or tamper-resistant audit store.

Observe attempt success separately from eventual recovery; monitor queue age, mapping failures, denial events, schema errors and correction workload. Do not optimize suggestion acceptance as a proxy for accuracy. Preserve correlation ID, source/revision and operation key; restrict sensitive evidence to authorized support staff.
