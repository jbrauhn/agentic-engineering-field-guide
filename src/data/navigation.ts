export type SectionId = 'start' | 'explore' | 'deep' | 'practice';

export interface GuidePage {
  path: string;
  title: string;
  short: string;
}

export const sectionMeta: Record<SectionId, { label: string; description: string; landing: string }> = {
  start: {
    label: 'Start Here',
    description: 'Get the map, the vocabulary, and one worked example.',
    landing: '/start/'
  },
  explore: {
    label: 'Explore the System',
    description: 'Understand why each component exists and how the parts reinforce one another.',
    landing: '/explore/'
  },
  deep: {
    label: 'Go Deeper',
    description: 'Use the detailed Human + AI reference for mechanics, authority, failure modes, and implementation choices.',
    landing: '/deep/'
  },
  practice: {
    label: 'Learn by Doing',
    description: 'Practice the method in guided, progressively richer delivery loops.',
    landing: '/practice/'
  }
};

export const journeys: Record<'start' | 'explore' | 'deep', GuidePage[]> = {
  start: [
    { path: '/start/01-elevator.html', title: 'The elevator pitch', short: 'Why Agentic Engineering?' },
    { path: '/start/02-ecosystem.html', title: 'The agentic ecosystem', short: 'Model, context, tools, loop, controls' },
    { path: '/start/03-bridge.html', title: 'Where Agentic Engineering fits', short: 'From agents to an engineered lifecycle' },
    { path: '/start/04-operating-model.html', title: 'How the system works', short: 'Loop Context through Validation' },
    { path: '/start/05-discipline.html', title: 'Why this is engineering', short: 'Discipline is leverage' },
    { path: '/start/06-contract-example.html', title: 'Worked Contract', short: 'Goal / Spec / Proof' },
    { path: '/start/07-planning-example.html', title: 'Architecture and ADRs', short: 'Plan against the real system' },
    { path: '/start/08-decomposition.html', title: 'Planning Depth & Method', short: 'Decompose only as far as needed' },
    { path: '/start/09-continue.html', title: 'Choose your next path', short: 'Explore, deepen, or practice' }
  ],
  explore: [
    { path: '/explore/01-philosophy.html', title: 'The philosophy underneath the system', short: 'Why engineer the lifecycle?' },
    { path: '/explore/02-contract.html', title: 'Loop Context & Contract', short: 'Anchor intent before action' },
    { path: '/explore/03-planning.html', title: 'Planning', short: 'Understand the system before tasks' },
    { path: '/explore/04-knowledge-context.html', title: 'Knowledge & Context', short: 'System-owned memory' },
    { path: '/explore/05-execution.html', title: 'Execution', short: 'Bounded adaptive work' },
    { path: '/explore/06-capabilities.html', title: 'Capability Interfaces', short: 'Open interfaces, tool choice' },
    { path: '/explore/07-governance.html', title: 'Governed Access & Zero Trust', short: 'Access is not authority' },
    { path: '/explore/08-validation.html', title: 'Verification & Validation', short: 'Do not let the doer define success' },
    { path: '/explore/09-human-owner.html', title: 'Human Owner & KSAs', short: 'Keep human value where it matters' },
    { path: '/explore/10-interactions.html', title: 'How the parts reinforce one another', short: 'The system is stronger than a checklist' },
    { path: '/explore/11-standards.html', title: 'Standards, Patterns & Practices', short: 'What the system builds on' },
    { path: '/explore/12-continue.html', title: 'Choose your next path', short: 'Review, deepen, or practice' }
  ],
  deep: [
    { path: '/deep/01-contract.html', title: 'Contract', short: 'Goal / Spec / Proof mechanics' },
    { path: '/deep/02-planning.html', title: 'Planning & Plan Review', short: 'Architecture-aware execution design' },
    { path: '/deep/03-knowledge-context.html', title: 'Knowledge & Context', short: 'System-owned memory and fresh context' },
    { path: '/deep/04-execution.html', title: 'Execution Loop & Pattern Library', short: 'Bounded adaptive work' },
    { path: '/deep/05-capabilities.html', title: 'Capability Interfaces', short: 'Connect to real systems' },
    { path: '/deep/06-governance.html', title: 'Governed Access & Zero Trust', short: 'Access, authority, enforcement' },
    { path: '/deep/07-validation.html', title: 'Verification & Observability', short: 'Evidence against Proof' },
    { path: '/deep/08-human-owner.html', title: 'Human Owner & KSAs', short: 'Human–AI collaboration' }
  ]
};

export function sitePath(path: string, base = import.meta.env.BASE_URL): string {
  const cleanBase = base.replace(/\/$/, '');
  return `${cleanBase}${path}`;
}

export function relativeSitePath(pathname: string, base = import.meta.env.BASE_URL): string {
  const cleanBase = base.replace(/\/$/, '');
  const withoutBase = pathname.startsWith(cleanBase) ? pathname.slice(cleanBase.length) : pathname;
  return withoutBase || '/';
}
