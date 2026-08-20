# AGENTS.md

## Purpose

This repository contains the **Agentic Engineering Field Guide**, the public learning/reference website for the Agentic Engineering System. It is not the canonical AE System implementation and should not accumulate private host or organization-specific operating data.

## Read first

- `README.md` — repository architecture and build/deploy flow.
- `DESIGN_SYSTEM.md` — visual, interaction, responsive, and progressive-elaboration rules.
- `docs/DISCOVERABILITY.md` — SEO/GEO/AEO and provenance principles.
- `LICENSE.md` — content/code licensing boundary.
- `src/data/navigation.ts` — canonical learning journeys and public topic URLs.

## Standing content rules

- Preserve the learning hierarchy: Home → Start Here → Explore the System → Go Deeper → Learn by Doing.
- Never require understanding the whole architecture before explaining the current value/question.
- Use progressive elaboration; keep the first layer concise and expose optional depth deliberately.
- Distinguish formal standards/frameworks, established practices, emerging protocols, and AE/local patterns.
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
- Important content must exist in prerendered HTML; do not make core meaning depend on client-side JavaScript.
- Use `InfoTip.astro` selectively for second-layer explanations.
- Keep pages usable on narrow screens and with reduced motion.
- Keep search/discoverability metadata truthful and aligned with visible content.

## Before merge

Run `npm run build`. The build must produce the site, Pagefind index, and pass `scripts/validate-build.mjs`.

Do not bypass protected `main` for normal changes. Use a branch + pull request + required build check. Resolve material review conversations before merge.

## Public/private boundary

Do not commit credentials, secrets, private topology, Kestrel-specific security details, sensitive logs, or employer-private information to this public repository.
