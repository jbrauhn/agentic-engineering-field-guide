# Agentic Engineering Field Guide

A progressive guide and reference for Agentic Engineering: how humans, AI agents, architecture, context, tools, governance, verification, and iterative learning work together across the product lifecycle.

## Learning paths

- **Start Here** — get the map.
- **Explore the System** — understand why each component exists and how the parts interact.
- **Go Deeper** — implementation-level reference pages.
- **Learn by Doing** — guided practice; currently under construction.

## Modern site architecture

The Field Guide is being modernized on `modernize/astro-v1` using **Astro 7 + MDX + reusable AE design components**. The target remains a static, prerendered GitHub Pages site: modern frontend architecture without requiring a server runtime.

During migration, existing HTML topic pages remain available. The Astro build creates modern journey landing pages and then copies legacy topic pages beside them so content can be migrated incrementally without a flag day.

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

The generated site is written to `dist/`.

## GitHub Pages

Deployment is defined in `.github/workflows/deploy.yml` and will publish from GitHub Actions after the repository's Pages source is set to **GitHub Actions**.

Expected URL:

`https://jbrauhn.github.io/agentic-engineering-field-guide/`

## Search + AI discoverability

The site treats conventional SEO and emerging **Generative Engine Optimization (GEO) / Answer Engine Optimization (AEO)** as one discoverability problem: publish original, useful, crawlable, semantically clear content that search systems and AI retrieval systems can find, understand, cite, and verify.

The technical baseline includes semantic static HTML, canonical URLs, Open Graph metadata, JSON-LD, `robots.txt`, an XML sitemap, responsive performance, and durable internal links. See [`docs/DISCOVERABILITY.md`](docs/DISCOVERABILITY.md).

## Licensing

Learning/reference content is licensed **CC BY 4.0**. Site code is licensed **Apache-2.0**. See [`LICENSE.md`](LICENSE.md).

## Design

See [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Progressive elaboration remains a standing design-system principle: show the smallest useful explanation first and expose the next layer only when the learner asks for it.
