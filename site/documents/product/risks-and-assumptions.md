# Risks and assumptions
All customer needs remain hypotheses pending external validation.

| Risk | Likelihood / impact | Owner | Mitigation / trigger |
|---|---|---|---|
| Activity mistaken for competency | High / high | PM + governance | Evidence labels, mandatory review; stop if decisions overreach evidence |
| Wrong employee attribution | Medium / high | Architect | Exact IDs; block missing mappings; verify rehire lifecycle in pilot |
| Reviewer overload | High / medium | HR owner | Measure decision time and queue age; reduce input scope before automation |
| Partner schema/access unavailable | High / high | Architect | Fictional contracts now; access spike before connector commitment |
| Changed evidence after approval | Medium / high | Engineer | Revision-bound approval and invalidation; tests protect boundary |
| Ephemeral session loses work | Certain on restart / high for real use | Engineer | Local-only demonstration; durable outbox is a production prerequisite |
| Demo role confused with SSO | Medium / high | PM | Explicit teaching-control label; no real data or access claims |
| Security advisories in scaffold | Verified / high | Engineer | Audit dependencies; assess upgrades; release status recorded in validation |
| Pilot lacks lawful purpose or employee support | Unknown / high | Customer governance | Privacy/security/employee consultation before collection; no compliance claim |
| Attractive demo masks absent demand | High / high | PM | Recruiter evidence separated from product-market validation |

Retention assumption: one-hour idle server sessions; reset clears session state; process restart clears everything. No production retention or erasure policy is implemented. Evidence use is limited to explaining synthetic skill suggestions. No compensation, hiring or performance decisions are supported.
