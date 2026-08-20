# Agentic Engineering Field Guide — Design System

## Intent

A technical whiteboard and engineering reference: serious, calm, progressively disclosed, modern, accessible, and coherent across independently authored pages.

The design should make rigorous engineering feel understandable rather than bureaucratic.

## Palette

- Background `#07111d`
- Surface `#0f1c2c`
- Text `#eef5ff`
- Muted `#b8c5d8`
- Blue `#64bfff` — information
- Teal `#58d4c2` — execution / active work
- Green `#59d68d` — validation / success
- Gold `#ffd166` — Contract / decisions / human cues
- Orange `#ffad5f` — attention / selected section / experiments
- Purple `#b89aff` — planning / architecture / detailed reference
- Red `#ff8585` — blocked / failure / high risk

## Progressive elaboration

**Show the smallest useful explanation first. Expose the next layer only when the learner asks for it.**

Circled `i` disclosures are a design-system feature, not a Planning-only treatment. Use them selectively for terminology, planning choices, architecture/ADR concepts, Contract Proof versus testing, memory/context mechanisms, governance/OA/DA/PEP, and standards/protocol nuance.

Do not turn every acronym or sentence into a tooltip.

## Information architecture

- **Home** — choose the journey and understand the top-level value.
- **Start Here** — the map, shared vocabulary, and worked example.
- **Explore the System** — philosophy, failure prevented, core principles, and interactions.
- **Go Deeper** — detailed Human + AI reference.
- **Learn by Doing** — guided practice tied to the real AE System.

Standing rule: **Never make someone understand the whole architecture before they can understand the value.**

## Navigation

- Sticky global header, not a permanent scrolling table of contents.
- Desktop primary navigation and compact mobile menu.
- Collapsible **Journey map** on detailed pages.
- Stable Previous / Next controls.
- Left/right arrows or PageUp/PageDown navigate the journey.
- `H` returns Home.
- `/` opens search.
- Skip-to-content link for keyboard users.

## Content model

Detailed learning pages are MDX documents rendered through a shared `GuideLayout`. Page content owns meaning; shared components own navigation, styling, metadata, progress, and interaction.

The canonical journey structure lives in `src/data/navigation.ts`. Adding or moving a page should not require editing repeated navigation markup across the site.

## Search and discoverability

Search is static and client-side through Pagefind. Important content remains present in prerendered HTML so the site is useful without client-side JavaScript and remains crawlable by conventional search and AI retrieval systems.

Every meaningful page should have:

- a direct human-readable title and description;
- semantic heading structure;
- canonical URL;
- structured metadata/JSON-LD;
- useful internal relationships;
- page content in the Pagefind region;
- stable public URL where practical.

## Responsive behavior

Design mobile-first in the sense that every concept must remain understandable on a narrow viewport. Dense diagrams/flows may scroll horizontally rather than become unreadably compressed. Split View collapses into a single reading flow on small screens.

Honor `prefers-reduced-motion`.

## Deep-reference pattern

Where useful, preserve the side-by-side model:

1. **How it works** — purpose, mechanics, inputs/outputs, interactions, authority/enforcement, failure modes, implementation options.
2. **How we work** — Human Owner actions, AI support, review/decision points, training/practice.

This becomes one column on narrow screens.

## Standing principles

> **Heavier process is not more mature.**

> **Choose the simplest useful pattern.**

> **Change should be easy to propose and impossible to hide.**

The interface should make rigor, evidence, and consequential decisions visible without making every task feel heavyweight.
