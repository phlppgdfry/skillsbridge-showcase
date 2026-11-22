# Prioritization
RICE = Reach × Impact × Confidence / Effort. These are illustrative planning estimates, not research findings.

Reach: potentially affected events per 100 pilot incidents. Impact: ordinal 1–3 improvement to the core outcome. Confidence: subjective evidence confidence. Effort: estimated person-weeks for an experienced small team; not actual logged implementation effort.

| Opportunity | Reach | Impact | Confidence | Effort | Score |
|---|---:|---:|---:|---:|---:|
| Human validation workflow | 100 | 3 | .50 | 3 | 50 |
| Reliability improvements | 100 | 2 | .50 | 3 | 33.3 |
| Real-time synchronization | 40 | 1 | .25 | 4 | 2.5 |

Why low confidence: public documentation supports technical context, not customer demand. Reach assumes all pilot incidents enter review, while only 40 have a time-sensitive use case. Neither estimate has been measured.

Safety constraints override the ranking: basic deduplication, identity blocking and stale-approval protection ship with validation. If validation effort doubles its score falls to 25, below reliability; the smallest usable validation boundary remains necessary while scope is reduced. Re-score after interviews using observed volume, review cost and actual engineering estimates. Do not present these numbers as ROI.
