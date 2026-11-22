# Product brief

SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations.

## Product lifecycle positioning
This case demonstrates discovery through launch readiness, not an unaddressed TechWolf feature. Public integration and employee-validation capabilities already exist. Phase 2 adds a Decision Lab, guided tour, launch evidence and a narrow genuine ESCO reference; source/HR destination remain fictional.

## Customer problem
Northstar Global Services is a fictional 5,000-person employer with distributed IT teams. Service-management activity contains potentially useful skills evidence, but HR profiles require manual reconciliation. Completing an incident does not establish competency. Incorrect attribution could harm employee trust and workforce decisions.

## Users and opportunity
An HR Product Owner needs trustworthy profile freshness; an Integration Architect needs explainable failure handling; an employee needs control over claims; a governance reviewer needs evidence and a manageable queue. Connect selected incident evidence to an approved skills update, preserving provenance and blocking unsafe writes.

## Objectives and MVP
Demonstrate a single source-to-destination workflow: ingest a fictional incident contract, normalize, match an explicit employee identifier, suggest one rule-based skill, require a reviewer decision, map a destination taxonomy, synchronize idempotently and expose audit/metrics. Eight failure scenarios must be reproducible. Five screens explain discovery, delivery and trade-offs alongside the working system.

Must: human review, identity blocking, version-bound approval, bounded retry and transparent simulation labels. Should: guided scenarios and accessible responsive UI. Could: downloadable case-study PDF. Out of scope: real enterprise credentials, production AI inference, SSO, multi-tenant production storage, legal compliance claims, employee assessment and automated staffing decisions.

## Risks and assumptions
Hypothesis-driven — external validation pending. No interviews have occurred. Review burden, evidence usefulness, acceptable freshness and implementation effort are unknown. A rule score is not a calibrated probability. In-memory session state is sufficient for a local demonstration but cannot establish durability or deployment readiness at enterprise scale.

## Success criteria
All critical safety tests pass; no destination write without current approval and valid identity/taxonomy; duplicate delivery causes no second write; bounded retries respect time eligibility; a visitor can reproduce happy, recovery and rejection paths. Business benefit remains a hypothesis until a consented pilot compares reconciliation time and employee trust with a baseline.
