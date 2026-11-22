# Integration blueprint
## End-to-end flow
```mermaid
flowchart LR
  A[Selected incident / version] --> B[Validate and deduplicate]
  B --> C[Trim evidence fields]
  C --> D[Exact employee mapping]
  D --> E[Rule-based skill suggestion]
  E --> F[Human review current revision]
  F --> G[Skills data layer: approved suggestion]
  G --> H[Destination taxonomy mapping]
  H --> I[Idempotent simulated HR write]
  I --> J[Audit and metrics]
```

The local skills layer is the typed suggestion collection, not a separate service. Source identity maps sn-1042 → EMP-1042 and sn-1043 → EMP-1043. An unresolved identity is blocked; the admin can explicitly demonstrate resolution to EMP-1043. Network troubleshooting maps to HR-NET-01; Incident management to HR-INC-02. Unknown taxonomy remains blocked with no invented mapping.

## Synchronization semantics
Source deduplication uses event ID + monotonically increasing version. Same-version changed content is rejected; old revisions are ignored with an audit error. Destination key is employee:taxonomySkill:event:revision. Repeated sync skips successful items. Writes are an immutable operation history; a new evidence revision can create a new approved upsert to the same conceptual employee/skill. Real destination merge semantics are not implemented.

503 uses exponential delays 1s then 2s, maximum three attempts. 429 uses max(exponential delay, 5s Retry-After). Operator advances the logical clock and explicitly retries. There is no wall-clock scheduler or durable queue. Unmapped, rejected, pending, stale or exhausted records cannot write.

## Security and governance
Only synthetic records. Same-origin POST, HttpOnly SameSite cookie and session-scoped state prevent accidental cross-session mutation. Runtime responses are schema validated. Demo role selection is intentionally open and is not authentication. Audit is in memory and not tamper resistant. Production requires SSO, scoped permissions, tenant isolation, encrypted durable storage, secret management, access reviews, retention/deletion policy and privacy review. No legal compliance is asserted.

## External vocabulary reference
A user-triggered ESCO read is outside the evidence-to-write authority chain. GET /api/taxonomy defaults to a recorded reference; live mode validates a fixed concept with a five-second timeout, bounded body and manual redirect rejection. Failure is labeled fallback and does not change review or sync state. Effective provider version remains unconfirmed. See external-taxonomy-adapter.md.
