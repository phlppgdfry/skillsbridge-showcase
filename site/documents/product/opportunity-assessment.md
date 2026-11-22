# Opportunity assessment
Hypothesis-based assessment; ratings require customer validation.

| Opportunity | Customer value | Complexity | Risk | Scalability | Strategic alignment |
|---|---|---|---|---|---|
| A. Reliability hardening | Avoid lost/duplicate updates | Medium–high (durability/operations) | Lowers operational risk | Enables greater volume | Essential foundation |
| B. Human suggestion validation | Establish trust in uncertain claims | Medium | Reviewer burden; inconsistent decisions | Queue capacity constrains growth | Directly addresses safe enrichment |
| C. Real-time synchronization | Potentially fresher profiles | High | More coupling and failure modes | Higher cost and operational load | Weak until freshness need is verified |

## Recommendation
Focus the MVP on B with minimum safeguards from A. A alone proves delivery of potentially untrustworthy data; C optimizes latency before usefulness. B creates a testable value proposition: reviewers can inspect evidence and control updates. Exact identity, idempotency and version-bound approvals are prerequisites rather than optional score competitors.

Consider a manual assisted pilot as a cheaper alternative before building real connectors. Stop or pivot if evidence cannot support meaningful decisions or review workload exceeds value. See prioritization for explicit score assumptions.
