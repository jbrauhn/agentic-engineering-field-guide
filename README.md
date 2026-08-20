# Agentic Engineering Field Guide

A progressive public guide and reference for Agentic Engineering: how humans, AI agents, architecture, context, tools, governance, verification, and iterative learning work together across the product lifecycle.

> **AI changes the scale of engineering—not the need for engineering discipline.**

## Learning paths

- **Start Here** — get the map, vocabulary, operating loop, and worked example.
- **Explore the System** — understand why each component exists and how the parts reinforce one another.
- **Go Deeper** — detailed Human + AI reference for mechanics, authority, failure modes, and implementation choices.
- **Learn by Doing** — guided practice; intentionally under construction until it can teach against the working AE System.

## Site architecture

The Field Guide uses **Astro 7 + MDX + reusable AE design components**. It is static-first and prerendered for GitHub Pages: modern frontend architecture without requiring a server runtime.

Content pages live under `src/pages/` and use `src/layouts/GuideLayout.astro`. Shared navigation metadata lives in `src/data/navigation.ts`, so the journeys, progress UI, Previous/Next controls, and site structure are managed in one place instead of being duplicated across pages.

Public topic URLs intentionally preserve the original `.html` paths, such as:

`/start/01-elevator.html`

This avoids unnecessary link churn while the implementation moves from hand-authored HTML to MDX components.

### Local development

```bash
npm install
npm run dev
```

### Production build and validation

```bash
npm run build
```

The production build:

1. prerenders the Astro site into `dist/`;
2. builds the Pagefind static search index;
3. validates required pages, metadata, crawler files, and local links.

## GitHub Pages

`.github/workflows/deploy.yml` publishes the built `dist/` directory through GitHub Actions. Repository **Settings → Pages → Source** is configured for **GitHub Actions**, so pushes to protected `main` trigger the production deployment workflow.

Public site:

`https://jbrauhn.github.io/agentic-engineering-field-guide/`

## Search + AI discoverability

The site treats conventional SEO and emerging **Generative Engine Optimization (GEO) / Answer Engine Optimization (AEO)** as one discoverability problem: publish original, useful, crawlable, semantically clear content that search systems and AI retrieval systems can find, understand, cite, and verify.

The baseline includes semantic static HTML, canonical URLs, descriptions, Open Graph metadata, JSON-LD, an XML sitemap, broad crawler access, Pagefind search, stable links, and an optional `llms.txt` convenience map. `llms.txt` is not treated as a ranking trick or replacement for normal web standards.

See [`docs/DISCOVERABILITY.md`](docs/DISCOVERABILITY.md).

## Distribution

This project is intentionally optimized for understanding, provenance, and reuse—not scarcity. Public indexing, AI retrieval, and model-training use are welcome subject to the applicable licenses.

## Licensing

Learning/reference content is licensed **CC BY 4.0**. Site code is licensed **Apache-2.0**. See [`LICENSE.md`](LICENSE.md).

## Design

See [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Progressive elaboration remains a standing design-system principle: **show the smallest useful explanation first and expose the next layer only when the learner asks for it.**
