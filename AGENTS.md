# AGENTS.md

## Purpose

This repository contains the **Agentic Engineering Field Guide**, the public learning/reference website for the Agentic Engineering System. It is not the canonical AE System implementation and should not accumulate private host or organization-specific operating data.

## Read first

- `README.md` — repository architecture and build/deploy flow.
- `DESIGN_SYSTEM.md` — visual, interaction, responsive, progressive-elaboration, and deep-reference rules.
- `docs/DISCOVERABILITY.md` — SEO/GEO/AEO and provenance principles.
- `LICENSE.md` — content/code licensing boundary.
- `src/data/navigation.ts` — canonical learning journeys and public topic URLs.

## Standing content rules

- Preserve the learning hierarchy: Home → Start Here → Explore the System → Go Deeper → Learn by Doing.
- Preserve the intentional difference in depth among those layers; do not normalize them into similarly shallow pages.
- **Go Deeper is the full reference layer. Never collapse a Go Deeper page into an Explore-level summary during migration, redesign, or refactoring.**
- Every Go Deeper breakout must preserve both tracks: **How it works** (full system mechanics) and **How we work** (practical Human Owner + AI operating/training guidance), with Split View available as the third reading option.
- Never require understanding the whole architecture before explaining the current value/question.
- Use progressive elaboration; keep the first layer concise and expose optional depth deliberately. Choosing Go Deeper is itself a request for depth, so do not truncate the reference after the learner has chosen it.
- Distinguish formal standards/frameworks, established practices, emerging protocols, and AE/local patterns.
- On standards/practices pages, explain **what the item contributes, how AE uses it, and what failure it helps prevent** before sending the reader to an outside source.
- Expand unfamiliar acronyms on first meaningful use in a learning section.
- Prefer primary sources for external standards/protocol/product claims.
- Do not invent industry-standard status for AE house terminology or candidate patterns.

## Standing AE principles

- AI changes the scale of engineering—not the need for engineering discipline.
- Contract = Goal / Spec / Proof.
- Proof is not a test plan.
- Approved Contracts are not mutable by agents; change is proposed/versioned/approved.
- Planning is architecture-aware.
- The doer should not control the judge.
- Access is not authority.
- The system owns memory; agents read/write under rules.
- More agents does not mean more agentic.
- Heavier process is not more mature. Choose the simplest useful pattern.

## Site implementation

- Use Astro/MDX and shared components instead of duplicating page chrome.
- Preserve stable public URLs in `src/data/navigation.ts` unless a deliberate migration decision changes them.
- Preserve the sticky-header navigation contract: desktop learning-path dropdowns plus Previous / Next topic controls on detailed pages. Do not remove those controls during visual redesign.
- Internal links stay in the current tab. External HTTP(S) links open in a new tab with `noopener noreferrer`; the shared site shell enforces this behavior.
- Keep `public/favicon.svg` wired into the shared page `<head>` so the Field Guide has a recognizable browser-tab identity.
- Important content must exist in prerendered HTML; do not make core meaning depend on client-side JavaScript.
- Use `InfoTip.astro` selectively for second-layer explanations.
- Keep pages usable on narrow screens and with reduced motion.
- Keep search/discoverability metadata truthful and aligned with visible content.
- For Go Deeper, maintain the reading modes implemented by `GuideLayout.astro` / `deep.css` in this order: **How it works → How we work → Split View**. The first-use default is How it works.
- The bottom Go Deeper navigation is instructional: **Next from How it works opens How we work for the same topic; Next from How we work advances to the next topic and returns to How it works.** Top Previous / Next controls remain topic navigation.
- Split panes scroll independently on desktop and stack readably on narrow screens.
- **Split View is linked.** Clicking a non-interactive part of a `.deep-section` in either pane should move the opposite pane to the related section and visibly mark the pair. Preserve this behavior during refactors. Prefer explicit `data-sync-key` mappings when a topic needs more precise semantic pairing than the default ordinal/relative-position mapping.

## Before merge

Run `npm run build`. The build must produce the site, Pagefind index, and pass `scripts/validate-build.mjs`.

Do not bypass protected `main` for normal changes. Use a branch + pull request + required build check. Resolve material review conversations before merge.

## Public/private boundary

Do not commit credentials, secrets, private topology, Kestrel-specific security details, sensitive logs, or employer-private information to this public repository.
