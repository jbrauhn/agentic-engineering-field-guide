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
- **Go Deeper** — the full detailed Human + AI engineering reference.
- **Learn by Doing** — guided practice tied to the real AE System.

Standing rule: **Never make someone understand the whole architecture before they can understand the value.**

The learning layers are intentionally different depths. Do not normalize them into equally sized pages. In particular, **Go Deeper must not be reduced to Explore-level summaries during redesign, migration, or refactoring.**

## Navigation

- Sticky global header, not a permanent scrolling table of contents.
- Each desktop learning-path label has a compact dropdown exposing the pages within that path; selecting the label itself opens the path landing page.
- Detailed journey pages keep compact **Previous / Next topic controls in the top bar** so navigation remains available without scrolling to the page bottom.
- Compact mobile navigation exposes the same learning-path/topic structure.
- Collapsible **Journey map** remains available inside detailed pages as a second navigation surface.
- Bottom Previous / Next cards communicate the reading sequence and may differ from the top topic controls in Go Deeper.
- Left/right arrows or PageUp/PageDown navigate topics, matching the top Previous / Next controls.
- `H` returns Home.
- `/` opens search.
- `Esc` closes open desktop navigation dropdowns.
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

## Deep-reference invariant

Every Go Deeper breakout is the implementation/training reference for its subject. It should preserve the substance of the detailed breakout, not merely restate the Explore page with more words.

The page has two complementary tracks:

1. **How it works** — Purpose → How it works → Inputs/outputs → Interactions → Access/authority/enforcement → Human knowledge, skills, and abilities (KSAs) → Agent support → Failure modes → Implementation options.
2. **How we work** — practical Human Owner + AI operating guidance: dialogue/decision patterns, sequencing, review, escalation, evidence, checklists, and training/practice.

Deep-reference reading modes appear in this order:

1. **How it works** — full-width mechanics reference and the normal starting point for a topic.
2. **How we work** — full-width operating/training reference.
3. **Split View** — independently scrolling How it works / How we work panes on desktop; stacked on narrow screens.

The bottom navigation follows the instructional sequence. At the end of **How it works**, **Next** opens **How we work for the same topic**. At the end of **How we work**, **Next** advances to the next topic and returns to How it works. Split View is an alternate reference mode, not the first step in the teaching sequence.

The selected mode may persist when useful, but the first-use default is **How it works**. Deep pages should be allowed to be long. Progressive elaboration happens by choosing the Go Deeper journey and then choosing the reading mode; it does **not** require truncating the reference itself.

## Standing principles

> **Heavier process is not more mature.**

> **Choose the simplest useful pattern.**

> **Change should be easy to propose and impossible to hide.**

The interface should make rigor, evidence, and consequential decisions visible without making every task feel heavyweight.
