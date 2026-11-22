# User stories

Stories SB-01–16 implemented locally; SB-17–18 proposed. Criteria describe observable behavior, not inferred business benefit.

## SB-01 — Receive selected incident evidence
As a HR Product Owner, I want to receive selected incident evidence, so I can make useful work visible.

- Acceptance: Run happy fixture; strict schema accepted; one event and pending suggestion.
- Dependencies: None.
- Priority: P0. Status: Implemented locally.
- Test considerations: Ingestion/fixture test.

## SB-02 — Normalize selected fields
As a Integration Architect, I want to normalize selected fields, so I can avoid source formatting leaking into rules.

- Acceptance: Whitespace trimmed for evidence; event ID/version preserved; unexpected fields rejected.
- Dependencies: SB-01.
- Priority: P0. Status: Implemented locally.
- Test considerations: Normalization and contract tests.

## SB-03 — Match an explicit employee id
As a Integration Architect, I want to match an explicit employee ID, so I can avoid wrong attribution.

- Acceptance: Known source maps EMP-1042; unknown remains null; no approval/write for unknown.
- Dependencies: SB-01.
- Priority: P0. Status: Implemented locally.
- Test considerations: Missing identity test.

## SB-04 — Resolve a blocked identity explicitly
As a Integration Administrator, I want to resolve a blocked identity explicitly, so I can restore safe processing.

- Acceptance: Admin maps synthetic target EMP-1043; review pending; viewer denied.
- Dependencies: SB-03.
- Priority: P1. Status: Implemented locally.
- Test considerations: Resolution/authorization tests.

## SB-05 — Inspect skill evidence and provenance
As a Governance Reviewer, I want to inspect skill evidence and provenance, so I can make a reasoned decision.

- Acceptance: Show event, revision, evidence and rule score; high/low score both pending.
- Dependencies: SB-02,03.
- Priority: P0. Status: Implemented locally.
- Test considerations: Domain and browser happy path.

## SB-06 — Approve the revision i inspected
As a Governance Reviewer, I want to approve the revision I inspected, so I can control which evidence authorizes updates.

- Acceptance: Mapped pending revision may approve; approvedRevision equals revision; replay of old revision fails.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Approval/stale tests.

## SB-07 — Reject weak evidence
As a Governance Reviewer, I want to reject weak evidence, so I can keep unreliable claims out of HR.

- Acceptance: Reject current pending item; rejected item never writes; decision audited.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Rejection and browser tests.

## SB-08 — Enforce review permissions
As a HR Product Owner, I want to enforce review permissions, so I can prevent unauthorized claims.

- Acceptance: Viewer approval/rejection returns 403; state unchanged except denial audit.
- Dependencies: SB-06.
- Priority: P0. Status: Implemented locally.
- Test considerations: Policy/API/browser denial tests.

## SB-09 — Invalidate approval after evidence changes
As a Governance Reviewer, I want to invalidate approval after evidence changes, so I can avoid outdated authorization.

- Acceptance: New source revision resets review; sync blocked; old reviewer revision returns conflict.
- Dependencies: SB-06.
- Priority: P0. Status: Implemented locally.
- Test considerations: Stale approval test.

## SB-10 — Synchronize approved mapped skills
As a HR Operations, I want to synchronize approved mapped skills, so I can keep the HR record consistent.

- Acceptance: Pending/rejected/unmapped/stale do not write; approved valid item creates one operation.
- Dependencies: SB-06,14.
- Priority: P0. Status: Implemented locally.
- Test considerations: Happy path/API integration.

## SB-11 — Suppress duplicates
As a Integration Architect, I want to suppress duplicates, so I can avoid repeat updates.

- Acceptance: Two identical deliveries yield one event/suggestion; repeated sync yields one write.
- Dependencies: SB-01,10.
- Priority: P0. Status: Implemented locally.
- Test considerations: Duplicate/idempotency test.

## SB-12 — Respect partner rate limits
As a Integration Administrator, I want to respect partner rate limits, so I can recover without overwhelming the destination.

- Acceptance: 429 schedules max(backoff,5s); no early attempt; at most three attempts.
- Dependencies: SB-10.
- Priority: P0. Status: Implemented locally.
- Test considerations: Boundary-time retry test.

## SB-13 — Recover from an outage
As a Integration Administrator, I want to recover from an outage, so I can retain approved work.

- Acceptance: 503 retains approval; restore + eligible clock + sync writes once; failure history retained.
- Dependencies: SB-10,12.
- Priority: P0. Status: Implemented locally.
- Test considerations: Domain and browser recovery.

## SB-14 — Block unsupported taxonomy
As a Skills Governance Reviewer, I want to block unsupported taxonomy, so I can avoid inaccurate destination semantics.

- Acceptance: Unknown category yields unmapped skill; approval/sync blocked with issue.
- Dependencies: SB-05.
- Priority: P0. Status: Implemented locally.
- Test considerations: Taxonomy test.

## SB-15 — Inspect audit and metrics
As a HR Product Owner, I want to inspect audit and metrics, so I can evaluate quality honestly.

- Acceptance: Ordered audit; empty denominator unavailable; 503 then 200 shows 50% attempt success.
- Dependencies: SB-01,10.
- Priority: P1. Status: Implemented locally.
- Test considerations: Audit/metric tests.

## SB-16 — Reset my demo session
As a Presenter, I want to reset my demo session, so I can repeat the demonstration.

- Acceptance: Admin reset clears events, suggestions, writes, attempts, audit and metrics; other sessions unchanged.
- Dependencies: SB-01.
- Priority: P1. Status: Implemented locally.
- Test considerations: Reset and API session isolation.

## SB-17 — Persist an outbox through restarts
As a Integration Administrator, I want to persist an outbox through restarts, so I can avoid losing approved work.

- Acceptance: Proposed: pending operations survive restart; atomic approval/outbox transition; remote idempotency reconciles lost acknowledgments.
- Dependencies: Verified partner contracts.
- Priority: P0 before production. Status: Proposed.
- Test considerations: Proposed restart/fault tests.

## SB-18 — Authenticate and scope enterprise roles
As a Security Owner, I want to authenticate and scope enterprise roles, so I can protect real employee data.

- Acceptance: Proposed: SSO identity maps server permissions; tenant boundary tested; user cannot self-select privileged role.
- Dependencies: Pilot governance/access.
- Priority: P0 before production. Status: Proposed.
- Test considerations: Proposed auth/tenant penetration tests.
