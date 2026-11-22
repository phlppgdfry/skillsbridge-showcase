# Metrics framework
All displayed figures are derived from the current synthetic session, never enterprise outcomes. Empty denominators display “—”. Logical time measures scenario scheduling, not wall-clock performance.

| Layer | Metric / formula | Interpretation |
|---|---|---|
| Adoption | Active integrations; setup completion; reviewers using workflow | Pilot measures proposed only; two configured simulators are not active customers |
| Quality | Attempt success = HTTP 200 attempts / all attempts | One 503 then one 200 gives 50%, despite eventual delivery |
| Quality | Duplicate prevention = count of repeated same-version deliveries suppressed | Count, not a percentage with an invented denominator |
| Quality | Mapping failure = currently unmapped suggestions / current suggestions | Resolution changes this snapshot; audit retains original failure |
| Quality | Recovery = recovered current revisions / current revisions with a failed attempt | A changed revision starts a new cohort; historical attempts remain in attempt-success metrics. Failed/exhausted current work remains in denominator |
| Quality | Processing latency | Not benchmarked; logical retry timestamps exposed; production latency unmeasured |
| Skills | Acceptance = approved current suggestions / (approved + rejected current suggestions) | Pending excluded; invalidated approvals return to pending |
| Skills | Rejection = rejected / completed current decisions | Not an AI accuracy measure |
| Skills | Evidence coverage = nonempty evidence / suggestions | Presence is not usefulness |
| Skills | Review-required = 100% when any suggestions exist | Design policy, not an adoption result |
| Business | Manual effort saved; approved-profile freshness; potential skills visibility | Hypotheses pending a consented baseline/pilot comparison |

## Reproducible examples
Reset → happy → approve → sync: 1 event, 1 write, 1 successful attempt, 100% acceptance. Reset → duplicate: 2 deliveries, 1 unique event, 1 duplicate prevented. Reset → outage → approve → sync → restore → +10s → sync: 2 attempts, 50% attempt success, 100% recovery, 1 write. Reset → weak evidence → reject → sync: 100% rejection, 0 attempts, 0 writes.

## Pilot measurement
HR owns reconciliation baseline and freshness; governance owns review time/queue age and employee challenge outcomes; engineering owns loss/duplicate/error measures; PM owns synthesis. Use a two-week baseline and four-week small-team pilot as a proposed design. Sample incident complexity and record hidden review work. Investigate any unsafe attribution immediately; pause if policy violations occur. A proposed 20% reduction in reconciliation time is a decision threshold to negotiate, not a claimed result. Do not optimize acceptance at the expense of correct rejection.
