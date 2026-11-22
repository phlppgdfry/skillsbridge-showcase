# Known limitations
- No customer interviews, real employee data, enterprise pilot or measured business outcomes.
- Source/destination contracts and Northstar are fictional. No TechWolf affiliation, proprietary access, Workday or ServiceNow certification.
- Deterministic keyword/category rules; scores are not calibrated probabilities, verified competencies or production AI.
- In-memory state: process restart, eviction, idle expiration or a different Worker isolate can lose the session. No durable queue, transactional outbox or restart guarantee.
- Freely selectable simulated roles demonstrate policy, not authentication. No production SSO, tenant isolation or employee self-service portal.
- Retry is command-driven on a logical clock, not an automatic scheduler; max three attempts. No jitter, circuit breaker or real Retry-After parsing.
- Successful destination writes are local operation history. Lost acknowledgments, remote rollback, real destination conflicts and deletion are not simulated.
- Taxonomy supports two predefined mappings; unknown skills block and have no taxonomy-editing UI.
- Same-version conflicting content and old source revisions are domain-tested; ingestion HTTP accepts named fixtures only, not arbitrary external webhooks.
- Browser QA covers Chromium and mobile viewport; no full assistive-technology audit or performance/load certification.
- Repository/CI/public deployment availability is reported separately; configured CI is not a successful hosted CI run.

Do not use this prototype for employment, compensation, staffing or performance decisions. Production requires governed data use, security review, actual contracts and persistence.

## Phase 2 clarification
The source and HR destination remain simulations. One genuine ESCO reference is implemented; its live observation does not verify an enterprise source/destination adapter or semantic equivalence. It is user-triggered and has an explicit recorded fallback. Process-local caching/cooldown is not a distributed quota. Requesting v1.2.0 does not establish a provider-confirmed effective version.

Automated accessibility scans found no detected violations after corrections, but incomplete checks and screen-reader/manual review remain. Browser timings are local dev observations, not production performance claims. Decision Lab estimates do not validate customer demand; launch blockers cannot be cleared by changing weights or completing demo actions.

- Public showcase preparation caps active in-memory sessions at 100 and returns an explicit 503 when full; idle sessions expire. This bounds one isolate, not global rate limiting or denial-of-service resilience. A public origin, hosted behavior, provider limits and actual traffic still require authorized verification.
