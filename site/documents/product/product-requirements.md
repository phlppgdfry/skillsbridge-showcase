# Product requirements — MVP
## Problem and outcome
Fictional Northstar cannot reliably turn operational evidence into approved skills updates. Enable a governance reviewer to inspect a suggestion and permit only its current, mapped revision to reach a simulated HR destination.

## Functional requirements
| ID | Requirement | Acceptance |
|---|---|---|
| FR1 | Validate and normalize selected incident fields | Reject malformed/unexpected fields; trim evidence; preserve event/version |
| FR2 | Resolve explicit identity | Unknown source ID blocks approval and delivery; admin resolution returns to pending review |
| FR3 | Explain suggestion | Show rule score, evidence, event, revision and synthetic employee |
| FR4 | Require human decision | No automatic approval; rejected items never synchronize |
| FR5 | Enforce authority and freshness | Viewer denied with audit; changed evidence invalidates prior approval |
| FR6 | Map and deliver approved updates | Require employee, taxonomy and matching approved revision |
| FR7 | Deduplicate and recover | Source version and destination operation key unique; retries eligible only after delay, maximum three |
| FR8 | Expose state and reset | Queue, audit, attempts and derived metrics reflect session; reset clears it |

## Nonfunctional requirements and limits
Strong TypeScript typing and Zod request/state validation. Same-origin mutations and HttpOnly session cookie. Keyboard-operable native controls, responsive layout, reduced-motion support, loading/error/empty states. No external credentials or real employee data. Sessions expire after one hour idle; bounded to 100 in memory with 40 source records per demo. These are defensive prototype bounds, not capacity guarantees.

## User journey
Overview → choose scenario → ingest → inspect evidence → approve/reject → synchronize → inspect audit. Recovery adds restore destination and advance logical clock. No timer or animation implies a production service is running.

## Launch criteria
Critical tests, typecheck, authored-source lint and build pass; screenshots checked; docs match behavior. External release additionally needs authorization and a reviewed dependency risk posture. Production use requires persistence, real authentication, tenant isolation and governed partner contracts.

## Phase 2 increment
The six-screen workspace adds Launch readiness; Discovery includes a Decision Lab. A guided three-minute tour requires actual domain actions. An optional fixed ESCO reference endpoint never mutates review or destination state. See delivery/phase-2-acceptance.md and architecture/external-taxonomy-adapter.md for acceptance and failure policy. No real-data launch authorization follows from completing the tour.
