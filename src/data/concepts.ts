export type ConceptId =
  | 'human-owner'
  | 'loop-context'
  | 'contract'
  | 'planning'
  | 'knowledge-context'
  | 'execution'
  | 'capabilities'
  | 'governance'
  | 'validation';

export interface ConceptDestination {
  label: string;
  explore: string;
  deep: string;
}

export const conceptDestinations: Record<ConceptId, ConceptDestination> = {
  'human-owner': {
    label: 'Human Owner & KSAs',
    explore: '/explore/09-human-owner.html',
    deep: '/deep/08-human-owner.html'
  },
  'loop-context': {
    label: 'Loop Context',
    explore: '/explore/02-contract.html',
    deep: '/deep/01-contract.html'
  },
  contract: {
    label: 'Contract',
    explore: '/explore/02-contract.html',
    deep: '/deep/01-contract.html'
  },
  planning: {
    label: 'Planning',
    explore: '/explore/03-planning.html',
    deep: '/deep/02-planning.html'
  },
  'knowledge-context': {
    label: 'Knowledge & Context',
    explore: '/explore/04-knowledge-context.html',
    deep: '/deep/03-knowledge-context.html'
  },
  execution: {
    label: 'Execution',
    explore: '/explore/05-execution.html',
    deep: '/deep/04-execution.html'
  },
  capabilities: {
    label: 'Capability Interfaces',
    explore: '/explore/06-capabilities.html',
    deep: '/deep/05-capabilities.html'
  },
  governance: {
    label: 'Governed Access & Zero Trust',
    explore: '/explore/07-governance.html',
    deep: '/deep/06-governance.html'
  },
  validation: {
    label: 'Verification & Validation',
    explore: '/explore/08-validation.html',
    deep: '/deep/07-validation.html'
  }
};
