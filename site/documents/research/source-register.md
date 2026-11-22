# Source register

Accessed 2026-11-04. Public documentation establishes context, not customer validation. No proprietary tenant schemas were accessed. All prototype payloads are fictional.

| Source | Verified public fact | Limitation | Product implication |
|---|---|---|---|
| [TechWolf integrations](https://www.techwolf.ai/product/integrations) | Describes enriching existing HR systems, including Workday, with inferred skills | Vendor positioning; no independent performance validation performed | Demonstrate enrichment without replacing the HR record; do not allege a TechWolf feature gap |
| [TechWolf FAQ](https://www.techwolf.ai/frequently-asked-questions) | Describes connections across HR, work and learning systems | Marketing overview rather than a contract | Scope one work system and one fictional HR destination |
| [ServiceNow official Table API](https://github.com/ServiceNow/servicenowdocs/blob/australia/markdown/api-reference/rest-apis/c_TableAPI.md) | Table API retrieves records with filtering, selected fields and pagination | ACLs and tenant configuration affect access; not a SkillsBridge adapter | Minimize fields; prototype contract is explicitly different |
| [ServiceNow rate limits](https://github.com/ServiceNow/servicenowdocs/blob/australia/markdown/api-reference/rest-api-explorer/inbound-REST-API-rate-limiting.md) | Denied requests use HTTP 429 with Retry-After | Configured limits vary; destination simulator is fictional | Treat Retry-After as a minimum retry delay |
| [Workday integrations](https://www.workday.com/en-us/products/platform-product-extensions/integrations.html) | Public overview describes event-driven integrations and batch processing | Does not establish a writable worker-skill schema or tenant access | Use a fictional destination upsert, never claim Workday certification |
| [SAP OData integration](https://userapps.support.sap.com/sap/support/knowledge/E/2251702) | SAP describes OData APIs for external integrations | Module permissions and schema not explored in a tenant | Additional adapter remains a discovery opportunity |
| [Idempotent Receiver](https://www.enterpriseintegrationpatterns.com/patterns/messaging/IdempotentReceiver.html) | A receiver can safely handle repeated messages | Pattern alone does not establish exactly-once delivery | Deduplicate source versions and destination operation keys |
| [European Commission principles](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) | Purpose limitation and data minimization are core principles | No legal assessment performed; inaccessible first URL replaced with indexed official overview | Synthetic IDs, selected evidence, no raw ticket dumps; no compliance claim |

## Method and uncertainties
ServiceNow reference fetched through Context7 (official ServiceNow repository); other sources checked through web search/open. Next.js route handler and Vitest documentation fetched through Context7 for implementation. Scaffold uses Vinext's Next-compatible App Router, not a production Next.js installation. Workday concepts were researched only at the public overview level; specific operations are deliberately not implemented. Research statements are bounded paraphrases. Product choices, thresholds, scenario data, RICE estimates and persona needs are design assumptions, not observed customer findings.

## Phase 2 refresh — 2026-11-04
| Source | Verified public statement | Limits / implication |
|---|---|---|
| [TechWolf ServiceNow integration](https://www.techwolf.ai/integrations/servicenow) | Publicly describes a ServiceNow integration | Overview does not reveal tenant contracts; this is an established capability, not an alleged product gap |
| [TechWolf Workday integration](https://www.techwolf.ai/integrations/workday) | Describes inference and integration into Workday Skills Cloud | Vendor assertion, no independent certification check here; never transfer the claim to SkillsBridge |
| [Worker Skill Assistant marketplace](https://marketplace.workday.com/en-US/apps/553365/techwolf-worker-skill-assistant/overview) | Describes employee review and validation of suggestions within Workday | Human validation already exists; portfolio differentiates through lifecycle reasoning, not feature novelty |
| [Workday customer story](https://www.techwolf.ai/customer-stories/workday) | Describes taxonomy governance, stakeholder workshops and integration | Vendor-published customer evidence, not independently audited and not SkillsBridge outcomes; no copied ROI targets |
| [TechWolf Product Manager role](https://careers.techwolf.ai/o/product-manager-2) | Strategy, roadmap, requirements, partner/customer engagement and engineering collaboration | Current general PM vacancy asks 4+ years; not a verified current Associate vacancy. User's target role remains a portfolio target, not a claim of qualification |
| [ESCO service overview](https://esco.ec.europa.eu/en/use-esco/use-esco-services-api/esco-web-service-api) | Concepts identified by URI; supports version selection via selectedVersion | Overview's version list differs from footer. Request v1.2.0 explicitly, record request version; do not claim provider confirmed effective version |
| [ESCO REST guide](https://ec.europa.eu/esco/api/doc/esco-api-doc.pdf) | Linked-data REST concepts and responses | Guide dated 2021; inspect actual responses and validate the narrow contract |

Context7 searches for “ESCO API” and “ESCO” returned unrelated libraries. No valid library ID was selected; official Commission documentation and real read-only calls were used instead. The ESCO concept `http://data.europa.eu/esco/skill/744442ac-c157-4350-8be0-ce454df4f5c5` was retrieved successfully on 2026-11-04. Its English label is “perform ICT troubleshooting”. It is a related vocabulary reference, not proof of equivalence to Northstar's “Network troubleshooting”, an approved destination mapping or an employee competency.

## Final validation recheck — 4 November 2026
The official TechWolf integrations page was read again: it explicitly describes Workday write-back and ServiceNow-derived skills. This reinforces the existing product-lifecycle positioning; it does not establish SkillsBridge customer demand, TechWolf internals or permission to use proprietary systems. [Official integration context](https://www.techwolf.ai/product/integrations). No vendor accuracy claim is adopted as a result for this prototype.
