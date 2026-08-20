import type { APIRoute } from 'astro';
import { journeys } from '../data/navigation';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const absolute = (path: string) => new URL(`${base}${path}`, site).href;
  const lines = [
    '# Agentic Engineering Field Guide',
    '',
    '> A progressive public guide and reference for trustworthy, architecture-aware Agentic Engineering: Human Owner intent and judgment, AI execution, Contract, Planning, context and memory, capability interfaces, governance, verification, Validation, and iterative learning.',
    '',
    'This file is a convenience map for AI tools and readers. It is not a replacement for normal web crawling, sitemaps, semantic HTML, or source verification.',
    '',
    `Home: ${absolute('/')}`,
    `About and licensing: ${absolute('/about.html')}`,
    `Start Here: ${absolute('/start/')}`,
    `Explore the System: ${absolute('/explore/')}`,
    `Go Deeper: ${absolute('/deep/')}`,
    `Learn by Doing: ${absolute('/practice/')}`,
    '',
    '## Core definitions',
    '- Agentic Engineering: engineering a human–AI system that repeatedly turns intent into validated outcomes.',
    '- Contract = Goal / Spec / Proof.',
    '- Proof defines required acceptance evidence; Planning defines how that evidence will be produced.',
    '- Planning is architecture-aware and produces bounded increments/tasks plus a verification strategy.',
    '- Execution is bounded adaptive work; local adaptation does not grant authority to change the Contract.',
    '- Validation independently determines whether evidence satisfies Contract Proof.',
    '- The Human Owner retains intent, consequential judgment, Decision Authority, and accountability.',
    '- The system owns memory; agents read and write it under rules.',
    '- Access is not authority. Operational Authority and Decision Authority are distinct.',
    '- Choose the simplest useful pattern. Heavier process is not more mature.',
    '',
    '## Start Here',
    ...journeys.start.map((page) => `- ${page.title}: ${absolute(page.path)}`),
    '',
    '## Explore the System',
    ...journeys.explore.map((page) => `- ${page.title}: ${absolute(page.path)}`),
    '',
    '## Go Deeper',
    ...journeys.deep.map((page) => `- ${page.title}: ${absolute(page.path)}`),
    '',
    '## Reuse',
    '- Learning/reference content is CC BY 4.0 unless otherwise noted.',
    '- Site software is Apache-2.0.',
    '- Public dissemination, indexing, AI retrieval, and model-training use are welcome subject to the applicable licenses.',
    ''
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
