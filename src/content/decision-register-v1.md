## Purpose

This register captures **all consequential decisions, working rules, candidate product directions, and explicit experiments** developed so far.

Not every item is an Architecture Decision Record (ADR). This register uses the broader term **Decision Record (DR)** so method, product, terminology, governance, UX, learning, and experimental decisions are preserved without forcing them into architecture-only language.

### Status meanings

- **Adopted** — current system/design decision unless later superseded.
- **Candidate** / **Candidate Product Direction** — favored direction that still needs implementation validation.
- **Open Experiment** — intentionally unresolved; evidence should decide.
- **Provisional** — useful current term/model that should be validated through use.

---

## Foundation

### DR-001 — Agentic Engineering (AE) is the broad engineering discipline
**Status:** Adopted

**Decision:** Use AE as the umbrella for designing reliable human-agent systems and workflows under constraints, verification, governance, and lifecycle discipline.

**Implications:** Avoid reducing the work to prompt engineering, coding agents, or one vendor/tool.

### DR-002 — Agent-Delegated Engineering (ADE) is a narrower house term
**Status:** Adopted

**Decision:** Use ADE for the human-agent relationship in which humans retain responsibility for intent, judgment, constraints, verification, and outcomes while delegating substantial execution.

**Implications:** Do not present ADE as an industry-standard term. Key phrase: “Delegation is not abdication.”

### DR-003 — Established engineering practice remains foundational
**Status:** Adopted

**Decision:** Agentic Engineering builds on decades of product development, software engineering, architecture, testing, security, risk management, and iterative delivery.

**Implications:** AI changes the scale of engineering—not the need for engineering discipline. Agent speed can multiply good work and defects alike.

### DR-004 — Heavier process is not more mature
**Status:** Adopted

**Decision:** Bias toward the lightest credible process and simplest useful pattern. Add planning depth, review, orchestration, and controls only when work shape or evidence justifies them.

**Implications:** Process weight is an experimental variable, not a maturity badge.

### DR-005 — Agentic Engineering should be technology- and vendor-agnostic
**Status:** Adopted

**Decision:** The method should survive model, tool, source-control, CI/CD, runtime, observability, and platform changes.

**Implications:** Organizations choose implementation products during installation/integration.

## Contract

### DR-010 — Contract = Goal / Spec / Proof
**Status:** Adopted

**Decision:** Goal defines outcome; Spec defines what must be true; Proof defines the required evidence of success.

**Implications:** Planning remains separate so implementation can change without changing intent.

### DR-011 — Loop Context precedes the Contract
**Status:** Adopted

**Decision:** Capture at least Lifecycle Context and Plan Category before Goal / Spec / Proof.

**Implications:** Planning behavior changes based on where the product is in its lifecycle and what kind of work the loop represents.

### DR-012 — Approved Contracts are immutable to agents
**Status:** Adopted

**Decision:** Agents may read Contracts and propose changes, but cannot directly mutate an approved Contract.

**Implications:** Any accepted change creates a new version and triggers downstream impact review.

### DR-013 — Contract changes occur only through versioned proposals
**Status:** Adopted

**Decision:** A change proposal includes trigger/evidence, rationale, exact diff, alternatives, downstream impact, consequence if deferred, priority recommendation, and provenance.

**Implications:** Any change requires Human Owner approval.

### DR-014 — Welcome new information; control mutation
**Status:** Adopted

**Decision:** Agents should surface discoveries that suggest the Contract is incomplete, wrong, risky, or no longer optimal—even late in execution.

**Implications:** Change should be easy to propose and impossible to hide.

### DR-015 — Non-goals are explicit scope boundaries
**Status:** Adopted

**Decision:** Use non-goals where a reasonable person might assume adjacent scope is included.

**Implications:** Non-goal limits scope; constraint limits acceptable behavior.

### DR-016 — Proof is not the entire test plan
**Status:** Adopted

**Decision:** Proof states what evidence must exist to demonstrate success.

**Implications:** Planning derives the concrete verification/test strategy and test/eval work from Proof.

## Planning

### DR-020 — Planning is architecture-aware
**Status:** Adopted

**Decision:** Every Plan references the canonical architecture and identifies the affected system elements and relationships.

**Implications:** Avoid architecture-blind decomposition.

### DR-021 — C4 is the canonical visual architecture model
**Status:** Adopted

**Decision:** Use C4 views as the shared architectural reference; Context + Container are the default baseline, Component views when internal structure matters.

**Implications:** Do not require all four C4 levels for every Plan.

### DR-022 — Significant architecture decisions become Architecture Decision Records (ADRs)
**Status:** Adopted

**Decision:** ADRs capture context, alternatives, rationale, tradeoffs, and consequences and reference the exact affected architecture elements.

**Implications:** Do not manufacture ADRs for non-architectural product reprioritization.

### DR-023 — Planning creates executable work boundaries
**Status:** Adopted

**Decision:** Planning creates L2 execution increments and L3 executable tasks, maps dependencies/parallelism, chooses execution topology/context strategy, and creates the verification strategy.

**Implications:** Execution agents should not receive an unbounded instruction such as “build the product.”

### DR-024 — Contract sits above the planning-depth hierarchy
**Status:** Adopted

**Decision:** The Contract defines the target. Planning artifacts are derived from it.

**Implications:** Do not equate L2 with the Contract.

### DR-025 — L1 is a durable product/system baseline
**Status:** Adopted

**Decision:** For greenfield work, early loops establish enough product capability and canonical architecture baseline to proceed. For an existing product, an initial architecture/codebase review may reconstruct or validate L1.

**Implications:** Most normal loops reference L1 rather than recreate it.

### DR-026 — Most ongoing loops create L2 and L3 artifacts
**Status:** Adopted

**Decision:** Feature, defect, sustainment, security, and dependency-upgrade loops usually create a bounded L2 execution increment and L3 executable tasks against the existing L1 baseline.

**Implications:** Architecture-impacting L1 changes use the ADR process; ordinary capability/product changes follow product governance.

### DR-027 — L4 is the agent micro-plan
**Status:** Adopted

**Decision:** Local implementation sequencing is selected by the execution agent while performing an L3 task.

**Implications:** Usually ephemeral unless it reveals a durable decision, risk, lesson, or needed Plan/Contract change.

### DR-028 — Planning Depth is a mandatory planning field
**Status:** Adopted

**Decision:** Planning Depth describes how far work is decomposed before execution.

**Implications:** UI may present it as a selector/dropdown with progressive-elaboration help.

### DR-029 — Planning Method is a mandatory planning field
**Status:** Adopted

**Decision:** Planning Method describes how work is sliced and ordered.

**Implications:** Current candidate methods include lightweight/agent-led, explicit task plan, vertical slices, dependency-first, rolling-wave, spec-of-specs/sub-plan, orchestrator-worker, and evidence/test-first.

### DR-030 — Planning methods are intentionally experimental
**Status:** Open Experiment

**Decision:** Teams should test methods against work type, complexity/risk, quality, elapsed time, AI/tool cost, human effort, retries, rework, and downstream defects.

**Implications:** System memory should improve future Planning Method recommendations.

### DR-031 — Choose the simplest useful planning/orchestration pattern
**Status:** Adopted

**Decision:** Default to the lightest method that can credibly satisfy the Contract and produce required evidence.

**Implications:** Increase complexity only when task shape or observed results warrant it.

### DR-032 — Planning owns the verification/test strategy
**Status:** Adopted

**Decision:** Planning maps each Proof requirement to tests, evals, reviews, environments, fixtures, instrumentation, reviewers, and evidence collection.

**Implications:** L3 tasks include implementation and verification work.

### DR-033 — Plans are dual-format
**Status:** Adopted

**Decision:** Maintain a human-readable visual Plan (architecture-aware IG) and a machine-readable companion containing traceability, tasks, dependencies, context strategy, Proof hooks, authority, and review state.

**Implications:** Human decisions should reference the exact affected diagram portions.

### DR-034 — Plan Review is independent
**Status:** Adopted

**Decision:** Planner self-reviews first; then use a fresh capable reviewer, with model diversity/external review where risk justifies it.

**Implications:** Material Plan changes should be re-reviewed.

### DR-035 — Maker → Checker is an execution review topology, not Validation
**Status:** Adopted

**Decision:** Maker creates; checker independently reviews during execution. Validation remains the lifecycle gate against Contract Proof.

**Implications:** Do not collapse execution review and acceptance into one step.

## Knowledge & Context

### DR-040 — The system owns memory; agents do not
**Status:** Adopted

**Decision:** Durable knowledge, workflow state, architecture/code graph, handoffs, and experiment results live outside any one agent/session.

**Implications:** Agents read and write under explicit rules.

### DR-041 — Fresh context and progressive elaboration beat endless conversation
**Status:** Adopted

**Decision:** Give each worker the smallest trustworthy context needed for the current decision, then retrieve/elaborate only when required.

**Implications:** Avoid context landfill and one-conversation dependency.

### DR-042 — Structured handoff packs are first-class continuation artifacts
**Status:** Adopted

**Decision:** Handoffs carry task, decisions, what changed, evidence, verification state, blockers, source pointers, next action, and stop/escalation condition.

**Implications:** Compaction is not a handoff.

### DR-043 — Compaction is lossy reference, not canonical state
**Status:** Adopted

**Decision:** Use compaction to preserve a historical summary/fallback, not as the authoritative current continuation packet.

**Implications:** Authoritative state should be durable and structured.

### DR-044 — Use concise agent.md-style standing operational instructions
**Status:** Candidate

**Decision:** agent.md can define role, workflow expectations, tool behavior, quality, and escalation while pointing into deeper sources of truth.

**Implications:** It cannot override Contract, authority, or Proof.

### DR-045 — Use soul.md for local agent personality/interaction behavior
**Status:** Candidate

**Decision:** soul.md is a house convention to shape voice, personality, and interaction style for system personas.

**Implications:** It cannot override Contract, authority, Proof, or enforcement.

### DR-046 — Use an agent-accessible LLM Wiki / structured knowledge base
**Status:** Candidate

**Decision:** Store canonical architecture, standards, decisions, lessons, references, product knowledge, and source pointers outside active agent context.

**Implications:** Exact implementation remains open.

### DR-047 — Memory stack is intentionally composable
**Status:** Open Experiment

**Decision:** Candidate mechanisms include instruction files, LLM Wiki, workflow state, architecture graph, session memory, compaction, structured handoffs, just-in-time retrieval, and fresh-agent relays.

**Implications:** Measure which combinations improve continuity, quality, cost, and speed.

### DR-048 — Context is an economic resource
**Status:** Adopted

**Decision:** Context bloat reduces available room for reasoning/tool results and can materially increase cost, especially for budget/local models.

**Implications:** Use a 'glass of water' mental model: prefill only enough to make the agent highly capable on its specific task.

### DR-049 — Model placement is task- and phase-specific
**Status:** Open Experiment

**Decision:** Do not send every task to the strongest frontier model by default.

**Implications:** Record task type, context strategy, model used, cost, quality, retries, and rework to improve routing decisions.

## Execution

### DR-050 — Execution is bounded adaptive work
**Status:** Adopted

**Decision:** Agents may diagnose, retry, choose local implementation steps, and adapt within Plan boundaries.

**Implications:** Plan changes route back to Planning; Contract changes route to a proposal/Human Owner.

### DR-051 — More agents ≠ more agentic
**Status:** Adopted

**Decision:** Use single-agent loops, fresh-agent relay, parallel workers, maker-checker, or coordinated multi-agent only when task shape warrants it.

**Implications:** Multi-agent is a Planning choice, not a maturity target.

### DR-052 — Fresh-agent relay is a supported but non-mandatory pattern
**Status:** Adopted

**Decision:** Use structured handoff + fresh context when long horizons or phase boundaries make it beneficial.

**Implications:** Do not force a fresh agent every loop.

### DR-053 — Whether Execution Loop needs its own reusable skill remains open
**Status:** Open Experiment

**Decision:** Current working position: Contract + reviewed Plan + runtime rails may be sufficient.

**Implications:** Validate through live use.

## Capability Interfaces

### DR-060 — Use open interfaces and organizational tool choice
**Status:** Adopted

**Decision:** The AE architecture defines needed capabilities without dictating one vendor or one connection mechanism.

**Implications:** Direct product access, APIs, MCP, enterprise brokers, or custom adapters can all be valid.

### DR-061 — Adapters are optional implementation choices, not mandatory architecture
**Status:** Adopted

**Decision:** Use adapters where they improve portability, policy enforcement, or normalization.

**Implications:** Direct governed access to GitHub or another product is acceptable when it fits the organization.

### DR-062 — The AE system should plug into many ecosystems
**Status:** Adopted

**Decision:** Installation includes selecting/configuring model providers, source control, CI/CD, runtime, identity, observability, issue/work tracking, and business-system integrations.

**Implications:** Method semantics should remain portable.

## Governance

### DR-070 — Access is not authority
**Status:** Adopted

**Decision:** Distinguish Identity, Access Path, Entitlement, Operational Authority (OA), and Decision Authority (DA).

**Implications:** A technical path to a resource does not imply permission to use it.

### DR-071 — OA and DA are separate
**Status:** Adopted

**Decision:** Operational Authority governs what the actor may do in the current runtime/task; Decision Authority governs who may approve consequential decisions.

**Implications:** Human Owner/control layers typically hold more DA than execution workers.

### DR-072 — Policy decision and enforcement are separate
**Status:** Adopted

**Decision:** Policy/control logic decides what should be allowed; Policy Enforcement Points enforce the decision at/near protected resources.

**Implications:** Use distributed enforcement rather than assuming a single central gate is sufficient.

### DR-073 — Authority is scoped during setup/planning and re-evaluated at action time
**Status:** Adopted

**Decision:** Standing rules and reserved decisions are established early; Planning determines required capabilities/OA; execution requests are evaluated with actual actor/task/resource context.

**Implications:** Actions may be allowed, constrained, blocked, or routed for approval.

### DR-074 — Unauthorized Contract mutation fails closed
**Status:** Adopted

**Decision:** Agents cannot bypass versioned Contract change control.

**Implications:** Mutation attempts should generate audit evidence.

## Verification

### DR-080 — The doer should not control the judge
**Status:** Adopted

**Decision:** Execution produces work/evidence; independent Validation determines whether Contract Proof is satisfied.

**Implications:** Use as much verifier independence as risk warrants.

### DR-081 — Verification and Validation are distinct
**Status:** Adopted

**Decision:** Verification produces tests/checks/reviews/evidence; Validation is the lifecycle gate that judges the evidence against Proof.

**Implications:** Do not equate passing the executor's tests with successful outcome acceptance.

### DR-082 — Observability makes evidence available
**Status:** Adopted

**Decision:** Logs, metrics, traces, system state, test results, and artifacts support diagnosis and Validation.

**Implications:** Observability is not equivalent to Proof by itself.

### DR-083 — Validation can route work backward
**Status:** Adopted

**Decision:** Possible outcomes include accept, execution defect/retry, Plan defect/replan, Contract-change proposal, or uncertain evidence/escalation.

**Implications:** Failure is information, not just a binary stop.

## Human Owner

### DR-090 — Humans retain responsibility for intent and outcomes
**Status:** Adopted

**Decision:** Humans own intent, contextual knowledge, logic, ingenuity, creativity, taste, judgment, important decisions, authority, and accountability.

**Implications:** AI should reduce mechanical work, not human agency.

### DR-091 — Human–AI collaboration is a thinking partnership
**Status:** Adopted

**Decision:** AI is both executor and thinking partner; it should challenge, explain, compare, ideate, and help humans learn.

**Implications:** The interaction should feel closer to colleagues at a whiteboard than humans filling out forms for automation.

### DR-092 — AI must communicate in human-native ways
**Status:** Adopted

**Decision:** Use conversation, diagrams, IG-style visual explanations, architecture views, alternatives, consequences, and evidence so the Human Owner decides from understanding.

**Implications:** The human should judge surfaced impact rather than discover hidden coupling unaided.

### DR-093 — Learning side quests are allowed and expected
**Status:** Adopted

**Decision:** Human or AI may pause delivery to understand a technology, architecture pattern, product idea, risk, or unfamiliar concept.

**Implications:** Useful outcomes must be captured back into durable artifacts/memory so learning is not lost.

### DR-094 — Human competencies are explicit
**Status:** Adopted

**Decision:** Maintain the 12 KSA model across framing, clarification, planning, context, tool/model selection, orchestration, verification, review/debugging, guardrails, and knowledge capture.

**Implications:** Agents should strengthen these skills without replacing human agency.

## Metrics & Learning

### DR-100 — Validated Increment is the provisional unit of outcome measurement
**Status:** Provisional

**Decision:** A bounded deliverable passes Contract Proof and is accepted.

**Implications:** May be feature, component, release, or full small application; validate terminology through live use.

### DR-101 — Measure process effectiveness rather than assuming it
**Status:** Adopted

**Decision:** Track elapsed time, phase time, Plan revisions, attempts, Validation failures, human hours, AI/tool cost, model mix, user/mission quality, engineering quality, and escaped rework/defects.

**Implications:** Metrics are diagnostic, not premature targets.

### DR-102 — Compare governed AE against lighter baselines
**Status:** Open Experiment

**Decision:** Use matched work where practical to test whether Contract/Plan/Proof controls justify their overhead.

**Implications:** Do not assume heavy wins.

### DR-103 — High-capability model placement should be tested
**Status:** Open Experiment

**Decision:** Establish a baseline using practical budget/mid-tier models, then test whether high-capability models earlier in Planning reduce rework, elapsed time, and total cost enough to justify unit cost.

**Implications:** Placement may matter more than 'best model everywhere'.

### DR-104 — ASD-STE100-style technical explanation is experimental
**Status:** Open Experiment

**Decision:** Compare constrained vs unconstrained explanations for clarity, nuance, and reasoning.

**Implications:** Do not make it a system requirement until evidence supports it.

### DR-105 — The system should learn from completed work
**Status:** Adopted

**Decision:** Store experiment/result history so future Planning Depth, Method, context strategy, execution topology, and model-routing recommendations improve.

**Implications:** Iterative learning is part of the system design.

## Learning Experience

### DR-110 — Use progressive elaboration as the information architecture
**Status:** Adopted

**Decision:** Give the smallest mental model that answers the current question; reveal the next layer only when the answer naturally creates the next question.

**Implications:** Never make someone understand the whole architecture before they can understand the value.

### DR-111 — Learning paths = Start Here / Explore / Go Deeper / Learn by Doing
**Status:** Adopted

**Decision:** Start Here gives the map; Explore explains why each component exists and how they interact; Go Deeper contains detailed reference mechanics; Learn by Doing will be guided practice in the configured environment.

**Implications:** Each completed journey returns to the site home.

### DR-112 — Start Here is target-audience-facing
**Status:** Adopted

**Decision:** Do not mix prototype notes or author-facing commentary into the learner presentation.

**Implications:** Temporary review notes may exist outside the presentation journey.

### DR-113 — Explore uses What / Why / Failure / Philosophy / Interactions
**Status:** Adopted

**Decision:** Explore is the philosophy layer, not simply a compressed version of the breakouts.

**Implications:** Go Deeper handles schemas, mechanics, implementation options, authority, and failure modes.

### DR-114 — Circled-i tooltips are a progressive-elaboration component
**Status:** Adopted

**Decision:** Use them where a concise first layer benefits from optional second-layer detail such as terminology, planning choices, memory patterns, governance, or standards.

**Implications:** Do not turn every acronym/sentence into a tooltip.

### DR-115 — First use of acronyms should be expanded per learning section
**Status:** Adopted

**Decision:** Use standard writing convention: e.g., Architecture Decision Record (ADR), Policy Enforcement Point (PEP), knowledge/skills/abilities (KSAs), etc.

**Implications:** Do not assume readers know our shorthand.

### DR-116 — The site shares one visual design system
**Status:** Adopted

**Decision:** Use the navy base, semantic accent palette, shared cards/pills/callouts, consistent shell/navigation, and subtle translucent-orange active section.

**Implications:** Independently generated IGs should still be composable into one site.

### DR-117 — Keyboard navigation is a first-class site feature
**Status:** Adopted

**Decision:** Left/right arrows and PageUp/PageDown navigate the current journey; H returns home; next/previous controls remain fixed in the top bar.

**Implications:** Dropdowns close on outside click/Escape and opening another dropdown closes the previous one.

## Standards & Practices

### DR-120 — Separate formal standards from practices, protocols, and house conventions
**Status:** Adopted

**Decision:** Supporting material should label whether an item is a formal standard, established engineering practice, emerging protocol, product convention, or local experiment.

**Implications:** Avoid falsely canonizing house patterns.

### DR-121 — Supporting standards/practices page is part of Explore
**Status:** Adopted

**Decision:** Cover Agile mindset, SOLID principles, architecture discipline, C4, ADRs, Zero Trust, AI risk, observability, MCP/A2A, simple-first agent design, memory/context patterns, and continuity mechanisms.

**Implications:** Each item explains what it contributes, how AE enables it, and links to an authoritative source.

## Agent Portal

### DR-130 — Design the portal around the AE operating loop
**Status:** Candidate Product Direction

**Decision:** The portal should make Loop Context → Contract → Planning → Review → Execution → Validation → outcome/iteration visible and navigable.

**Implications:** The user should never infer current lifecycle position from a chat transcript.

### DR-131 — Artifacts are first-class visual objects with state
**Status:** Candidate Product Direction

**Decision:** Show completion, in-progress, changed/impact-review, blocked/authority-needed, proposed/awaiting-decision, and superseded states.

**Implications:** Examples include Contract parts, ADRs, C4 views, Planning Depth/Method, tasks, tests/evidence, handoffs, validation and experiment records.

### DR-132 — Portal interaction should resemble a shared whiteboard
**Status:** Candidate Product Direction

**Decision:** Support voice conversation, IG-style visual presentation, interactive/selectable architecture and artifact elements, and human/AI highlighting of the exact object under discussion.

**Implications:** The human and AI should be able to reason against the same visible system.

### DR-133 — Multiple AI personas share governed state
**Status:** Candidate Product Direction

**Decision:** Possible personas include Contract facilitator, planner/architect, independent reviewer, coder, checker, validator, knowledge curator, tutor, and security/risk advisor.

**Implications:** Persona changes must not fragment project memory.

### DR-134 — Learning and operating interfaces should reinforce one another
**Status:** Candidate Product Direction

**Decision:** The same progressive-elaboration content should support onboarding, contextual help, and eventually Learn by Doing inside the real portal workflow.

**Implications:** The method should become easier to use because the UI carries the rigor.

### DR-135 — Planning selectors should become interactive portal controls
**Status:** Candidate Product Direction

**Decision:** Planning Depth and Planning Method are mandatory underlying fields even if shown as dropdowns/cards with information tooltips.

**Implications:** Future recommendations should incorporate team/system experiment history.

---

## Register governance

1. New consequential decisions receive a new DR ID.
2. Do not silently rewrite a prior record when the decision changes.
3. Mark the old record **Superseded** and point to the new DR.
4. Architecture-significant DRs may also become formal ADRs in the architecture repository.
5. Open Experiments should name the hypothesis, metrics, comparable work type/risk, and observed result when executed.
6. Portal/system memory should eventually be able to surface the relevant DR/ADR automatically when a Plan touches the affected concept.
