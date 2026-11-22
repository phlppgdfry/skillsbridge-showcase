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
  Build -. Approval and deployment validation pending .-> Hosted[Proposed Sites hosting]
  Hosted -. Requires durable state and real authentication for production .-> Data[Future persistent service]
```

No public deployment is claimed. Generated Worker build is a packaging artifact, not evidence of production service reliability.
