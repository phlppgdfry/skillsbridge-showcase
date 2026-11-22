# Pilot rollout and stakeholder alignment
This is a proposed plan. No customer agreed it, no pilot is running and no budget is approved.

## Decision rights
| Decision | Accountable | Collaborators | Required evidence |
|---|---|---|---|
| Problem and investment scope | Product Owner | HR owner, Customer Success, employee representatives | Recent workflow observations, alternatives, willingness to pilot |
| Partner contract and architecture | Integration Architect / Engineering lead | Customer IT, Security, Product | Authorized schema/access spike, identity lifecycle and remote write semantics |
| Purpose, review and retention policy | Customer HR governance | Privacy/Security, employee representatives | Agreed use, participation, challenge/correction path and retention decision |
| Release and support handoff | Product Owner + Engineering lead | Customer Success, operator, HR owner | Acceptance results, runbook rehearsal, named on-call/escalation owners |
| Continue / change / stop | Sponsor and Product Owner | Pilot participants and operators | Baseline comparison, usefulness, burden, safety issues and costs |

Product specifies outcomes and safety boundaries; engineering owns the durable implementation and technical estimates. Resolve disagreements by documenting the affected decision, alternatives, owner and time-bounded experiment. Do not arbitrate identity policy with a feature score.

## Staged rollout
1. Discovery: interview HR, architects, employees and reviewers. Observe actual reconciliation and the decisions that consume profiles. Disconfirm the value hypothesis before committing connector work.
2. Contract spike: permitted synthetic records in an authorized tenant; verify identity, taxonomy, versions, access and idempotency/correction semantics. No real HR writes.
3. Shadow pilot: small consented IT group; suggestions reviewed without writes; compare evidence usefulness, decision time and challenge rate. Collect minimal data only after governance approval.
4. Guarded writes: allowlisted population and categories; real authenticated permissions and durable outbox; reconcile every approved update. Pilot sponsor explicitly authorizes the write stage.
5. Expand or stop: compare baseline and actual operational/review costs. Expansion requires useful updates, acceptable trust and a supportable operating model; no portfolio score substitutes for this decision.

## Acceptance and stop criteria
Any wrong-person update, unsupported claim or policy breach pauses writes and triggers reconciliation. Sustained backlog beyond agreed reviewer capacity pauses ingestion. Missing support owner, ambiguous remote correction or failing restart/tenant-boundary tests blocks rollout. Numeric capacity, error budget and benefit thresholds must be negotiated from a measured baseline, not copied from vendor customer stories.

## Communication cadence
Proposed weekly pilot review: what was learned, failed/blocked updates, queue age, employee challenges, workarounds, dependency changes and next decision. Escalation messages identify affected population and safe action without raw employee evidence. End-of-stage note records go/no-go, approver, evidence, residual risks and owner/date for the next checkpoint. None of these messages is sent automatically by the prototype.
