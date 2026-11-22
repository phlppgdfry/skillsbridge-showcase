# Failure scenarios
| ID | Injection | Expected behavior / verification |
|---|---|---|
| A | Duplicate delivery | One event and suggestion; duplicate audit; at most one write |
| B | 429 | Retry-After 5s minimum; no early attempt; max three attempts then failed |
| C | Missing identity | Block review approval/sync; explicit admin resolution; renew review |
| D | Low-confidence evidence | Score .34; pending review; rejection permits no write |
| E | 503 unavailable | Retain approved work; backoff 1s/2s; restore + advance + sync delivers once |
| F | Unknown taxonomy | Flag mapping; block approval and destination update; no guessing |
| G | Viewer approval | 403, review state unchanged, denial audit with viewer actor |
| H | Evidence revision after approval | Invalidate approval; reject old review revision; re-review before sync |

Reproduce from the control-center scenario selector or governance Inject Failure. Each scenario is covered in tests/engine.test.ts. Browser tests exercise happy, outage recovery, rejection and unauthorized review. Tests do not establish real provider compatibility or durability across restarts.
