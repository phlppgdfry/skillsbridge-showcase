# Product decision log
All decisions belong to an independent, AI-assisted portfolio case. Inputs are public research and explicit assumptions.

## ADR-01 — Human review first

**Problem:** Operational activity can be mistaken for expertise.

**Alternatives:** Automatic approval above a score; employee-only confirmation; mandatory reviewer decision.

**Decision:** Mandatory human review for all suggestions.

**Rationale:** Useful learning about trust before automation.

**Benefits:** Visible agency and attributable decisions.

**Trade-offs:** Higher queue cost and potential reviewer inconsistency.

**Risks:** Rubber stamping or queue overload.

**Reconsider when:** Pilot shows high agreement, calibrated evidence and an agreed risk policy.

## ADR-02 — Exact identity mapping

**Problem:** Wrong attribution is more harmful than incomplete coverage.

**Alternatives:** Fuzzy names/email; verified ID table; block all records.

**Decision:** Verified source IDs only; unresolved records block.

**Rationale:** An explicit exception is safer than a confident guess.

**Benefits:** Clear safety boundary and actionable operator work.

**Trade-offs:** Reduced coverage; manual resolution.

**Risks:** Stale mappings or rehire ambiguity.

**Reconsider when:** A real identity authority and lifecycle policies are verified.

## ADR-03 — Batch before real time

**Problem:** Acceptable profile freshness is unknown.

**Alternatives:** Streaming; scheduled daily batch; explicit manual synchronization.

**Decision:** Explicit synchronization for the prototype.

**Rationale:** Makes the approval/delivery boundary observable without a scheduler.

**Benefits:** Simple, repeatable demonstration.

**Trade-offs:** No unattended production freshness guarantee.

**Risks:** Users mistake demo timing for operational latency.

**Reconsider when:** A validated time-sensitive decision justifies event-driven delivery.

## ADR-04 — Deterministic suggestions

**Problem:** No customer evidence justifies model complexity.

**Alternatives:** Paid LLM; taxonomy rules; static pre-approved examples.

**Decision:** Transparent category/keyword heuristic with mandatory review.

**Rationale:** Reproducibility and explainability fit the learning goal.

**Benefits:** No paid API, credentials or unstable outputs.

**Trade-offs:** Low semantic coverage; uncalibrated scores.

**Risks:** Visitor confuses score with accuracy.

**Reconsider when:** A governed labeled sample supports a model evaluation with utility gains.

## ADR-05 — Safety in MVP

**Problem:** Unsafe writes invalidate the core proposition.

**Alternatives:** Defer all reliability; build distributed infrastructure; implement local safeguards.

**Decision:** Local idempotency, bounded retry, role checks and stale approval protection now.

**Rationale:** A minimal safety boundary is part of value, not optional hardening.

**Benefits:** Eight reproducible failure cases.

**Trade-offs:** No durability, remote exactly-once or scale guarantee.

**Risks:** Prototype safeguards overgeneralized to production.

**Reconsider when:** A pilot requires durable storage, SSO and partner-aware retry semantics.

## ADR-06 — Ephemeral local sessions

**Problem:** Need a focused prototype without enterprise infrastructure.

**Alternatives:** Browser-only state; local server sessions; persistent database.

**Decision:** Bounded server sessions for the API prototype; publication originally pending authorization.

**Update — 23 November 2026:** The owner authorized a separate public GitHub Pages showcase. It reuses the engine with per-tab browser memory and recorded taxonomy fallback, while the Worker/API prototype remains separate. The development repository/history remain private; a fresh-history artifact repository publishes only reviewed files. This changes the demonstration transport, not pilot security or durability requirements. [Distribution scope](../showcase/github-pages-demo.md).

**Rationale:** Exercise real API transitions with session isolation and minimal setup.

**Benefits:** Repeatable local demonstration and clear reset.

**Trade-offs:** Restart loses state; unsuitable for multi-isolate production.

**Risks:** Accidental reliance on persistence.

**Reconsider when:** Public pilot or real user work requires persistent storage.

## ADR-07 — Demonstrate the lifecycle, not a vendor feature gap
**Problem:** Existing copy could be read as proposing missing TechWolf integration/validation functionality.
**Alternatives:** Compete on connector breadth; claim validation novelty; center the PM lifecycle.
**Decision:** Show Discovery → Assessment → Prioritization → Design → Delivery → Validation → Launch Readiness.
**Rationale and benefit:** Public references already describe integrations and employee validation; product ownership is the defensible portfolio contribution.
**Trade-off and risk:** Less “novel feature” positioning; customer demand remains unvalidated.
**Reconsider when:** Real discovery identifies a distinct underserved workflow, without assuming an incumbent lacks it.
**Evidence:** [Public context](../research/source-register.md), [positioning](phase-2-positioning.md), [adversarial review](../review/phase-2-audit.md).

## ADR-08 — Use sensitivity analysis with gates
**Problem:** A static RICE table hides uncertainty and prerequisites.
**Alternatives:** More precise-looking scores; a hypothetical ROI simulator; explicit weighted sensitivity.
**Decision:** Interactive ratings and normalized weights, with access gates overriding ranking.
**Benefit:** Hiring reviewers can challenge reasoning and inspect assumptions.
**Trade-off and risk:** Weights remain subjective; do not confuse rank changes with customer validation.
**Reconsider when:** User tests show scores distract from missing evidence; simplify to qualitative comparison.
**Evidence:** lib/product/opportunities.ts, tests/product.test.ts; [scope assessment](../review/phase-2-audit.md).

## ADR-09 — One real public reference, reliable offline core
**Problem:** Enterprise credentials are unavailable, but purely fictional contracts limit external-integration evidence.
**Alternatives:** Invent a ServiceNow connector; depend on an uncontrolled live service; one fixed ESCO reference with fallback.
**Decision:** Read-only fixed URI, validation, timeout, size bound, cooldown and explicit response modes. Preserve synthetic core workflows.
**Benefit:** Genuine contract boundary with no employee data or paid API.
**Trade-off and risk:** A taxonomy reference does not prove an enterprise connector, semantic equivalence or business demand.
**Reconsider when:** An authorized tenant and validated workflow justify a contract spike.
**Evidence:** [Adapter contract](../architecture/external-taxonomy-adapter.md), research/esco-observation.json, tests/esco.test.ts.

## ADR-10 — Make enterprise launch blockers explicit
**Problem:** Passing software checks can be mistaken for pilot readiness.
**Alternatives:** A single readiness percentage; freely checked “ready” boxes; evidence-derived demo status plus immutable pilot blockers.
**Decision:** Current-session observations cannot clear durability, identity, customer-governance or support prerequisites.
**Benefit:** Demonstrates a PM go/no-go decision and accountable collaboration.
**Trade-off and risk:** A blocked status is less promotional; owner rehearsal and real customer evidence still matter.
**Reconsider when:** Named stakeholders produce verified pilot exit evidence; update the release assessment with provenance.
**Evidence:** [Rollout/RACI](../delivery/pilot-rollout.md), [support](../delivery/support-runbook.md), tests/product.test.ts and phase-2 browser journey.
