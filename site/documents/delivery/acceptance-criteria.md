# Acceptance and working agreements
Story-specific criteria are in user-stories.md; critical acceptance tests are executable in tests/engine.test.ts and tests/api.test.ts. Browser flows are in tests/e2e/demo.spec.ts.

## Definition of Ready
A story has a named persona, observable outcome, boundaries, dependencies, acceptance criteria, failure behavior and a test approach. If a partner contract is unavailable, mark it as fictional rather than accepting an invented schema.

## Definition of Done
Implemented behavior matches the contract; critical tests and typecheck pass; authored source lint and build pass; error/empty/loading states are accounted for; docs reflect limitations; no synthetic result presented as production evidence. External release additionally requires dependency review, deployment validation and authorization.

## Regression invariants
No write for pending/rejected/stale/unmapped evidence. Unauthorized review changes only audit. Duplicate source delivery does not create another suggestion. Repeated successful sync does not duplicate writes. Retry is bounded and time-eligible. Reset clears the current session only. Empty metric denominators remain unavailable.
