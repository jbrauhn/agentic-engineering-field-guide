# Search and AI Discoverability Strategy

## Working terminology

The industry increasingly uses **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)** for improving visibility in AI-generated search and answer experiences. This project uses **Search + AI Discoverability** as the durable internal umbrella because the underlying systems and labels are still evolving.

The goal is not to chase ranking hacks. The goal is to make authoritative, original Agentic Engineering content easy for humans, search engines, retrieval systems, and user-directed agents to discover, understand, cite, and verify.

## Design principles

1. **People-first, original content.** Publish useful synthesis, explicit definitions, worked examples, diagrams, tradeoffs, failure modes, and primary-source references rather than commodity summaries.
2. **Static-first semantic HTML.** Important content must exist in the server-generated HTML, not only after client-side JavaScript executes.
3. **One durable concept per durable URL.** Pages should have clear titles, headings, summaries, canonicals, and stable internal links.
4. **Progressive elaboration, not content hiding.** The first layer should answer the question directly; deeper layers should add explanation and proof. Critical meaning should remain crawlable text.
5. **Evidence and provenance.** Prefer primary sources for standards, protocols, product behavior, and technical claims. Distinguish standards, established practices, emerging conventions, and house patterns.
6. **Structured metadata that matches visible content.** Use canonical links, Open Graph metadata, JSON-LD, and sitemaps without inventing machine-only claims.
7. **Crawler access by intent.** Keep public learning content crawlable and review crawler policy deliberately as AI search and model-training controls evolve.
8. **Measure rather than assume.** Use Search Console, referral analytics, and observed AI-search citations when available. No optimization can guarantee a top ranking or citation.

## Implemented technical baseline

- Astro static prerendering.
- Unique page title and meta description.
- Canonical URL.
- Open Graph metadata.
- JSON-LD `WebSite` + `WebPage` / `TechArticle` foundation.
- Semantic headings and landmark elements.
- `robots.txt` permitting crawl and advertising the sitemap.
- Generated XML sitemap through `@astrojs/sitemap`.
- Responsive, low-JavaScript design.
- Durable section routes.
- Existing legacy pages preserved while content is migrated to structured Astro/MDX pages.

## Content pattern for AI retrieval and citation

Important pages should progressively converge on this structure:

- **Direct answer / definition** — the smallest useful answer first.
- **Why it matters** — the problem or failure mode.
- **How it works** — mechanics and relationships.
- **Inputs / outputs** — explicit boundaries.
- **Interactions** — nearby system components.
- **Authority / controls** — who can decide and enforce.
- **Human role** — judgment, context, creativity, authority, accountability.
- **Agent support** — what AI can do well.
- **Failure modes / counterexamples** — when the pattern breaks.
- **Implementation options** — alternatives and tradeoffs.
- **Sources / evidence** — primary references where factual claims depend on external standards or products.

This shape is valuable for humans first and also gives retrieval systems coherent, self-contained passages with explicit terminology and relationships.

## GEO/AEO claims we will not adopt without evidence

- There is no guaranteed method to make the site the “top” answer in an AI system.
- `llms.txt` is not treated as a ranking requirement. It may be evaluated later as an interoperability experiment if specific systems demonstrate a useful behavior.
- We will not create thin pages merely to target every wording variation of a question.
- We will not hide content in structured data that is absent from the visible page.
- We will not pursue artificial mentions, backlinks, or citation manipulation.

## Future experiments

- Migrate each legacy HTML topic to MDX with explicit metadata and stable canonical URLs.
- Add per-page breadcrumbs and `BreadcrumbList` structured data.
- Add source metadata and visible “last reviewed” dates where freshness matters.
- Add an internal static search index after the content model stabilizes.
- Evaluate optional AI-facing conventions or protocols only against observed support from major systems.
- Track ChatGPT, Claude, Google AI, and other referral/citation behavior where measurable.
- Establish a lightweight discoverability review in the publication Proof for new or materially changed pages.
