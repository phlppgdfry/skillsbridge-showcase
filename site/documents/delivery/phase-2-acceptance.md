# Phase 2 acceptance and traceability
Implemented increments supplement the original 18-story core backlog; they do not silently mark the proposed outbox/SSO stories complete.

| Story | User outcome | Acceptance / test evidence | Status |
|---|---|---|---|
| SB-19 — Challenge a priority | As a hiring reviewer, inspect how assumptions affect scope | Changing weights recalculates scores; zero weights show no rank score; gated tenant access remains blocked; tests/product.test.ts | Implemented |
| SB-20 — Follow a product decision | As a hiring reviewer, understand the lifecycle in three minutes | Continue disabled until decision input, import, approval, delivery and recovery are actually exercised; exit preserves state; phase2.spec.ts | Implemented |
| SB-21 — Read a real reference safely | As an architect, inspect a public concept without employee data | Fixed URI, validated class/label, timeout/size bounds, cooldown and distinct fixture/live/cache/fallback; esco.test.ts + live observation | Implemented |
| SB-22 — Distinguish demo from launch | As an HR Product Owner, see what still blocks a pilot | Session evidence derives from audit/state; all four external prerequisites stay blocked regardless of demo success; tests/product.test.ts | Implemented |
| SB-23 — Navigate accessibly | As a keyboard/mobile reviewer, inspect evidence and decisions | Focus follows navigation; ranges labeled; tables keyboard-scroll; selected axe scans no detected violations; phase2.spec.ts | Implemented within tested scope |

Dependencies: SB-19 uses public research/explicit estimates; SB-20 relies on the existing core engine; SB-21 requires only anonymous public access and recorded fallback; SB-22 depends on documented pilot ownership; SB-23 retains the design system and tests populated states. Priority: these support portfolio inspection and do not supersede real-data pilot prerequisites.

Release criteria: all relevant local checks pass, docs and screenshots match, actual external observation has provenance, current feature commit pushed and CI status recorded honestly. Public deployment remains outside authorization. Interview/employee validation and full assistive-technology review remain unverified.
