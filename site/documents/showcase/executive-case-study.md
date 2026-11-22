# SkillsBridge — Designing a Reliable Enterprise Skills Integration

## Page 1 — Executive Summary

### The customer challenge
Northstar Global Services is a fictional 5,000-person employer with distributed IT teams. Its operational systems record work, while formal HR profiles depend on manual updates. A resolved network incident may contain evidence of troubleshooting. It does not establish the employee's proficiency, independent contribution or verified expertise.

### The product opportunity
Create a trustworthy path from selected operational evidence to a human-approved HR update. The case demonstrates the integration product lifecycle: discovery, assessment, prioritization, design, delivery, validation and launch readiness. Public TechWolf material already describes integrations, skills inference and employee validation; this case explores related integration challenges without claiming to reproduce its platform or identify a feature gap.

### The focused solution
SkillsBridge imports a fictional ServiceNow-like incident, normalizes selected evidence, maps an explicit employee ID and creates a deterministic skill suggestion. A human reviewer approves or rejects its current revision. Only approved, mapped evidence can synchronize to a fictional Workday-like destination. An audit trail explains every transition.

The core includes one simulated source and destination and eight failure scenarios. Phase 2 adds an interactive Decision Lab, launch center, a three-minute guided tour and one genuine read-only ESCO reference. Real enterprise source/destination connectors, production AI, durable processing and SSO are outside this increment.

### Expected value and validation status
Less reconciliation effort and fresher approved profiles are hypotheses. No interviews, enterprise deployments or measured business outcomes are claimed. Current evidence establishes local workflow behavior and the reasoning behind its scope. External discovery is the next investment decision.

SkillsBridge is an independent enterprise product management and integration case study built using synthetic data and simulated enterprise integrations.

## Page 2 — Product Discovery

### Understand the current alternative
The assumed workflow moves from incident closure to manager observation, employee self-report and manual HR reconciliation. Evidence can become detached from its claim, terminology may differ and attribution may be uncertain. These are plausible discovery hypotheses, not fabricated customer observations.

Four hypothetical personas frame the work: the HR Product Owner wants useful profile freshness; the Integration Architect wants safe contracts and recovery; the employee wants fair attribution and agency; the governance reviewer wants sufficient context without an unmanageable queue. Their needs may conflict. Faster updates are not valuable if employees distrust them.

### Compare opportunities
Three opportunities were assessed: reliability hardening, human suggestion validation and real-time synchronization. Illustrative RICE scores are 33.3, 50 and 2.5 respectively. They assume a 100-event pilot population and estimated effort, with low confidence because no customer research has occurred. Scores organize judgment; they do not establish ROI. Phase 2 adds a separate sensitivity model for portfolio upgrades, with access prerequisites overriding rank.

The MVP centers on validation with essential delivery safeguards. Reliability alone could transport untrustworthy claims more efficiently. Real-time delivery optimizes a freshness requirement that has not been established.

### Validate or invalidate the proposition
Interview stakeholders about a recent profile update, the decision it supported and the actual reconciliation effort. Ask architects about identity lifecycle, permissions and destination merge semantics. Ask employees what would make a claim unfair. Observe review time and rejection reasons in synthetic walkthroughs before a governed pilot.

The riskiest assumption is that available evidence is useful enough to justify review cost. If reviewers consistently need unavailable context, narrow the input or reconsider the opportunity rather than tuning an arbitrary score.

## Page 3 — Product Strategy

### Vision and principles
Make evidence-backed skills data useful inside existing enterprise workflows while preserving employee agency and operational accountability. Principles are evidence before claims, human control, safe synchronization, minimized data, transparent operations and measurable customer value.

### Product decisions with trade-offs
Mandatory review was selected over score-based automatic approval. It exposes uncertainty and creates a measurable learning loop, but increases queue cost. Exact identity mapping was selected over fuzzy names or email similarity. It sacrifices apparent coverage to prevent wrong attribution. Explicit batch synchronization was selected over streaming because acceptable freshness is unknown.

A deterministic category/keyword rule replaces an unnecessary language-model dependency. Its .86 and .34 scores are heuristics, not probabilities or accuracy claims. High scores still require review. A real model should be considered only after a governed sample supports evaluation of usefulness and failure costs.

### What belongs in the MVP
Source deduplication, role-based policy checks, bounded retries and stale-approval protection were pulled forward from a later reliability phase. An unsafe write would undermine the core proposition, making these prerequisites rather than optional polish.

The prototype uses ephemeral server-side sessions to keep the implementation proportionate. This creates a clear limitation: approved work does not survive restart. Durable inbox/outbox processing and enterprise authentication are prerequisites for a real pilot, not hidden work implied by the demo.

### Investment gates
Reduce source breadth before removing safety. Reconsider review policy only with observed disagreement and workload data. Expand connectors only after a verified customer decision, feasible access and an operational owner justify lifecycle cost. The launch center makes four unresolved pilot prerequisites explicit; session success cannot clear them.

## Page 4 — Integration Blueprint

### One inspectable chain of trust
Selected source event → validation and deduplication → normalization → explicit identity mapping → evidence-backed suggestion → current human approval → taxonomy mapping → idempotent destination operation → audit and metrics.

The application combines UI, typed API, domain engine and simulators in one deployable codebase. This makes its boundaries understandable without microservices or proprietary credentials. Source and HR contracts are fictional; the ESCO contract is observed. Request/state schemas are validated. The OpenAPI specification is generated from executable schemas and structurally checked.

### Approval and identity boundaries
Every suggestion preserves source ID, revision, evidence and synthetic employee. Unmapped identities or skills block approval and delivery. A changed source revision returns the suggestion to pending and clears prior approval. An old reviewer revision cannot authorize the new evidence. Viewer actions are denied and audited.

The role selector is a teaching control, not SSO. Same-origin mutations and session cookies isolate demonstrations, but do not establish production authorization or tenant security.

### Reliability behavior and limits
Duplicate source versions produce no second suggestion. Successful destination operations have stable keys. A 503 schedules exponential backoff; a 429 applies a five-second Retry-After minimum. No attempt runs before logical eligibility, and three attempts exhaust the budget. Recovery is explicit and reproducible.

A fixed ESCO API concept can be read without employee data, with validated responses and recorded fallback. It is a related vocabulary reference, not an approved HR mapping. There is no automatic scheduler, persistent queue or remote lost-acknowledgment reconciliation. Earlier synchronized history is retained when evidence changes; remote retraction is not modeled. Real adapters need durable transitions, partner-supported idempotency and a correction policy.

## Page 5 — Product Delivery

### From requirements to evidence
The core backlog contains 18 stories across ingestion, identity, trust, delivery, reliability and pilot hardening. Sixteen are implemented locally; durable outbox and enterprise SSO remain proposed. Each story has persona, outcome, business value, acceptance criteria, dependencies, priority and test considerations. Definition of Ready and Done prevent fictional contracts or unverified claims from becoming implicit promises.

The six screens support a recruiter journey: understand the problem, inspect discovery, run the integration, review exceptions and explore delivery trade-offs. The control center uses actual server state and audit events. It does not decorate the interface with fake live activity or progress delays.

### Quality validation
The domain, API, contract, product, adapter and publication checks and Chromium journeys passed in recorded validation runs. Current named test outcomes are distributed in the public evidence guide; counts are version-specific. Eight selected automated WCAG scans found no detected violations; incomplete checks still need manual review. It covers normalization, identity, review, rejection, synchronization, duplicates, time-bound retries, recovery, denied actions, stale approval, audit, metrics and reset. Browser checks exercise the real UI/API path, mobile layout and documentation access. Strict TypeScript, authored-source lint and build validation pass in the recorded local run.

Phase 2 corrected low-contrast text, accessible names and keyboard table scrolling. A real Worker call exposed a redirect-mode difference that mocks missed; after correction, the adapter returned live ESCO data. Dependency upgrades removed critical, high and moderate advisories; two low findings remain in retained scaffold tooling. No claim of full accessibility conformance, provider certification or production fault tolerance follows from these checks.

The private GitHub repository contains phase commits and a CI workflow; baseline and audit CI succeeded. Current feature CI is tracked separately. Public deployment and real enterprise access remain unverified. A pilot/RACI plan and support runbook define the next decisions.

## Page 6 — Results & Reflection

### Actual synthetic execution results
Happy path: one unique event, one approved suggestion, one successful attempt and one destination write. Duplicate scenario: two deliveries, one unique event and one duplicate suppressed. Outage scenario: one failed and one successful attempt, one destination write, 50% attempt success and 100% recovery for that one affected suggestion. Weak-evidence scenario: one rejected suggestion, zero attempts and zero writes.

These values are calculated from executed transitions and saved in simulation-results.json. Repeating successful synchronization creates no extra write. Empty denominators remain unavailable. None of these results establishes enterprise adoption, model accuracy or savings.

### What this case demonstrates
The strongest evidence is the connection between a product decision and a verified behavior: uncertainty leads to review; attribution risk leads to blocking; evidence changes lead to invalidation; outages lead to bounded, visible recovery. Documentation and tests make those trade-offs inspectable.

### What remains to learn
Customer demand, evidence usefulness, employee trust, review capacity and acceptable freshness remain unknown. Production operation additionally requires actual partner contracts, durable storage, authenticated tenant-scoped access, support ownership and governed data use. The project does not establish prior employment experience or independently validate the creator's interview performance.

### Final credibility review
An explicit publication allowlist protects private materials. Final red-team tests corrected streamed request limits and recovery metrics across evidence revisions. Evidence links distinguish published documents from private source snapshots. External reviews, client delivery and candidate mastery remain unverified; a prepared assessment is not a pass.

### Recommended next steps
Seek genuine reviews and discovery. Agree a small authorized pilot with a baseline. Fund durability and SSO before real data; expand adapters only after validated need.

The product lesson is to validate the decision that makes data worth moving, then distinguish a successful demonstration from an authorized enterprise launch.
