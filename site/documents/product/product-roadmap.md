# Product roadmap
Dates are intentionally omitted until customer demand and staffing are established.

| Phase | Status | Scope | Exit / investment decision |
|---|---|---|---|
| 1 — MVP | Implemented locally | Ingestion, normalization, identity, suggestions, review, simulated sync, monitoring; basic idempotency, retries and audit pulled forward | Critical local checks pass and workflow can be demonstrated honestly |
| 2 — Reliability & scale | Proposed | Durable outbox, restart recovery, real SSO/tenant isolation, retry jitter/circuit breaker, alerts, data-quality feedback | Fund after a governed pilot validates usefulness and review capacity; load and fault tests required |
| 3 — Future opportunities | Proposed | Additional adapters, taxonomy versioning, configurable policy and analytics | Rank verified demand against maintenance/access cost; do not equate more adapters with value |

This implementation does not establish production-scale reliability. Phase 2 deepens basic safeguards already demonstrated in Phase 1.

## Phase 2 portfolio upgrade (implemented, distinct from production hardening)
Decision Lab, guided tour, launch-readiness surface, ESCO read-only reference/fallback and automated accessibility evidence are implemented. Durable outbox, SSO, tenant boundaries and actual ServiceNow/HR adapters remain proposed. The phrase “Phase 2” in the delivery session does not mean the roadmap's production reliability phase is complete.
