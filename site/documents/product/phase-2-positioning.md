# SkillsBridge: integration lifecycle, not a feature-gap claim

## Positioning
SkillsBridge demonstrates how to take a fictional enterprise integration from discovery to a launch decision: Discovery → Opportunity Assessment → Prioritization → Integration Design → Delivery → Validation → Launch Readiness.

It is not a proposed missing feature for TechWolf. Official sources already describe operational-data inference, Workday writeback, ServiceNow integration and employee validation. The useful portfolio question is how an Associate PM would investigate requirements, make trade-offs, collaborate with engineering and decide whether an implementation is ready for a governed pilot.

## Facts versus assumptions
Verified public context: existing TechWolf integrations and validation capabilities; responsibilities in a current general Product Manager posting; ESCO linked-data concepts. Verified prototype behavior: tests and inspected source in validation records. The current posting asks for 4+ years; it does not verify that the earlier Associate vacancy is open.

Unvalidated: Northstar's need, evidence usefulness, reviewer capacity, acceptable freshness, buyer willingness, costs and business impact. Customer stories are vendor-published context, not SkillsBridge outcomes or causal proof.

## Product Decision Lab
The lab compares phase-2 investments, while the original RICE table remains the historical MVP decision. They answer different questions and should not be combined as if they were one research model.

Ratings (1–5) estimate recruiter relevance, product judgment, learning/business value, effort and technical risk. Normalized weighted score = Σ(weight × rating) / (5 × total weight) × 100; effort/risk invert using 6 − rating. A zero-weight model produces no score. Access prerequisites override ranking: an unapproved ServiceNow tenant is blocked regardless of its score. Scores express preferences, not customer evidence, ROI or implementation approval.

Evidence: lib/product/opportunities.ts; tests/product.test.ts; review/phase-2-audit.md. Change weights in the interface, inspect the selected decision, the assumption and the condition for reconsideration. The strongest next learning investment remains external discovery, not maximizing the lab score.

## Focused scope
Build the decision workbench, guided tour, launch center and one ESCO reference adapter. Retain the working source/destination simulators. Defer a business-impact calculator without baseline data and a real ServiceNow connector without an authorized tenant. Upgrade accessibility and validation as quality prerequisites, not extra product features.
