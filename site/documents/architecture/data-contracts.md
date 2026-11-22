# Data contracts
These are fictional SkillsBridge contracts, not authentic ServiceNow or Workday schemas. Executable definitions: lib/engine/contracts.ts. HTTP specification: api-specification.yaml.

## Source event
`{ id, version, sourceUser, title, resolution, category }`. ID/user strings ≤80 characters; title ≤200; resolution ≤500; version positive integer; category network/incident/unknown. Strict validation rejects unexpected fields. Retain selected fields only. Evidence text is trimmed for suggestion generation; the selected source payload preserves provenance.

## Suggestion
`{ id, eventId, revision, employee, skill, confidence, evidence, review, approvedRevision, sync, issue, attempts, nextRetry, recovered }`.
Review states pending/approved/rejected. Sync states pending/blocked/synced/failed. Revision equals source version. Approval must equal current revision. A pending sync state does not mean it is approved or eligible.

The category maps to a single suggested skill. Resolution containing both case-sensitive “Diagnosed” and “tested” produces .86; otherwise .34. This deliberately simple heuristic is not calibrated probability, an AI model or validated competency. A reviewer may still reject high scores or accept contextualized low scores. Both require an explicit decision.

## Destination operation
`{ key, employee, skill, revision, at }` records a fictional upsert. `at` and retry timestamps are milliseconds on a simulated clock starting at zero. No proficiency score is written.

## Audit and API errors
Audit entries contain sequence, logical time, type, subject, detail and simulated actor. Denials append an audit record without changing review state. Errors are `{ error: { code, message } }` with 400 validation, 403 policy/origin, 404 missing, 409 conflict, 413 oversized, 429 demo limit or 503 capacity. No stack traces returned.
