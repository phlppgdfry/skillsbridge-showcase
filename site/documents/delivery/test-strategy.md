# Test strategy
Use behavior tests at the smallest useful boundary. Unit/domain scenarios cover normalization, identity, suggestion, authorization, revisions, deduplication and retry eligibility. API tests cover request/response schema, isolation, malformed JSON and same-origin mutations. OpenAPI structural validation checks the exported schemas. Browser tests drive actual UI/API state across happy path, outage recovery, rejection and viewer denial; mobile checks verify navigation and document access. Screenshots are artifacts, not assertions of full accessibility compliance.

Static checks: TypeScript strict mode, authored-source oxlint and build. Scaffold component library is retained; unused generated components are excluded from lint, while TypeScript checks the project. This scope is explicit rather than silently changing the starter's library code. CI runs the same checks plus Chromium tests. No remote CI result exists until published.

Meaningful exclusions: real ServiceNow/Workday contract certification, distributed fault tolerance, real authentication, load testing, screen-reader audit and real customer outcomes. These cannot be established with synthetic local fixtures.
