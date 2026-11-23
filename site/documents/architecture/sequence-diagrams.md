# Interaction sequences
## Approved update
```mermaid
sequenceDiagram
  actor Admin
  participant UI
  participant API
  participant Engine
  participant HR as HR Simulator
  Admin->>UI: Run scenario
  UI->>API: POST command(run)
  API->>Engine: Validate, ingest, map, suggest
  Engine-->>UI: Pending review + audit
  Admin->>UI: Inspect and approve current revision
  UI->>API: POST command(approve, id, revision)
  API->>Engine: Check role, mapping, revision
  Admin->>UI: Synchronize approved
  API->>Engine: Check current approval
  Engine->>HR: Apply operation key once
  HR-->>Engine: 200
  Engine-->>UI: Write, audit and metrics
```

## Review lifecycle
```mermaid
flowchart TD
  Suggest[Suggestion / evidence revision] --> Pending[Pending human review]
  Pending -->|Authorized / mapped / current| Approved[Approved revision]
  Pending -->|Reject| Rejected[Rejected: no write]
  Approved -->|Current approval + mappings| Sync[Eligible to synchronize]
  Approved -->|Evidence changes| Pending
  Pending -->|Viewer action| Denied[403 + audit / unchanged review]
```

## Failure and recovery
```mermaid
sequenceDiagram
  actor Admin
  participant Engine
  participant HR as Destination Simulator
  Admin->>Engine: Sync approved revision
  Engine->>HR: Upsert with stable operation key
  HR-->>Engine: 503 or 429 / Retry-After
  Engine->>Engine: Retain approval, log attempt, schedule eligibility
  Admin->>Engine: Restore destination
  Admin->>Engine: Advance logical clock
  Admin->>Engine: Retry sync
  Engine->>HR: Same operation key
  HR-->>Engine: 200
  Engine->>Engine: Record one successful write
  Admin->>Engine: Repeat sync
  Engine-->>Admin: No duplicate write
```

Lost acknowledgement after a real remote commit is not modeled. The real adapter would need remote idempotency or reconciliation before retries could make the same guarantee.

## Deployment boundary
```mermaid
flowchart LR
  Browser[Browser / session cookie] --> Local[Local Vinext / Vite server]
  Local --> Runtime[API + in-memory state]
  Source[Repository + CI configuration] --> Build[Worker-compatible build]
  Source --> Export[Reviewed static build / fresh public history]
  Export --> Pages[Public GitHub Pages]
  Pages --> BrowserDemo[Browser engine / per-tab memory]
  Runtime -. Future pilot requires durability and real authentication .-> Data[Future persistent service]
```

The [public GitHub Pages demo](https://phlppgdfry.github.io/skillsbridge-showcase/) is deployed and anonymously verified as a browser-only simulation. It does not execute the Worker/API or use server cookies. The separately tested Worker build remains a local packaging artifact, not evidence of a hosted backend or production service reliability. [Public runtime scope](../showcase/github-pages-demo.md).
