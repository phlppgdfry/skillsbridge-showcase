# Problem discovery
**Hypothesis-driven — external validation pending.** No customer interviews have occurred.

## Current workflow and pain
In fictional Northstar, an IT engineer resolves an incident; a manager may notice a skill; the employee updates an HR profile; HR manually reconciles terminology. Evidence becomes detached from the claim. Employees may be omitted or misattributed. HR lacks freshness and engineering lacks visibility into failed updates. These are plausible problems to investigate, not observed findings.

Operational efficiency alone is insufficient: inaccurate claims may influence career opportunities. The product opportunity is a controlled evidence-to-update path, with an explicit review cost.

## Discovery hypotheses and disconfirmation
| Hypothesis | Test | Disconfirming signal |
|---|---|---|
| Selected incident evidence is useful | 20 consented synthetic walkthroughs, then a governed sample pilot | Reviewers require unavailable context for most decisions |
| Explainable evidence increases trust | Compare evidence shown/hidden; ask employees to explain attribution | Confidence remains low or employees challenge source relevance |
| Safe retries reduce reconciliation | Inject failures; compare recovery with a manual baseline | Recovery increases duplicates or operator workload |
| Review load is manageable | Measure time per decision and queue age over two weeks | Review exceeds agreed capacity or queue grows continuously |
| Daily updates are fresh enough | Ask which decisions need new skills data and when | A validated workflow needs sub-hour freshness |
| Implementation is tractable | Architect reviews identity/taxonomy coverage and access | Access restrictions or mapping costs dominate expected value |

## Interview script (30 minutes)
Start with purpose, consent and an invitation to disagree. Ask about actual recent work before showing the proposal.

**HR stakeholder:** Walk through the last profile update. Who initiated it? What decision used it? What made it trustworthy? What happens when a claim is wrong? How much reconciliation time was spent? Would you sacrifice coverage for fewer errors? What would make this workflow unnecessary?

**Integration Architect:** Show the lifecycle of an incident and employee ID. Which fields can leave the source? How are leavers and rehires represented? What API/version/volume constraints apply? What is the destination upsert behavior? How do you detect lost acknowledgments? Which failures require manual intervention? What would block a pilot?

**Product Manager:** What customer segment has this problem most acutely? What existing workaround competes with us? What would you stop funding? How do you value trust versus freshness? Which evidence would reverse the MVP decision? Who buys, approves and operates it?

Close by asking for counterexamples, a walkthrough of the current alternative and permission for follow-up. Record quotes only with consent. Separate observations, interpretations and decisions. No results should be added until interviews actually occur.
