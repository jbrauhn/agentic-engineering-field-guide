import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, posix, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const base = '/agentic-engineering-field-guide';
const start = ['01-elevator','02-ecosystem','03-bridge','04-operating-model','05-discipline','06-contract-example','07-planning-example','08-decomposition','09-continue'];
const explore = ['01-philosophy','02-contract','03-planning','04-knowledge-context','05-execution','06-capabilities','07-governance','08-validation','09-human-owner','10-interactions','11-standards','12-continue'];
const deep = ['01-contract','02-planning','03-knowledge-context','04-execution','05-capabilities','06-governance','07-validation','08-human-owner'];

const expected = [
  'index.html','about.html','start/index.html','explore/index.html','deep/index.html','practice/index.html',
  ...start.map((name) => `start/${name}.html`),
  ...explore.map((name) => `explore/${name}.html`),
  ...deep.map((name) => `deep/${name}.html`),
  'robots.txt','llms.txt','sitemap-index.xml','pagefind/pagefind.js'
];

const errors = [];
for (const path of expected) {
  if (!existsSync(join(root, path))) errors.push(`Missing expected output: ${path}`);
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = existsSync(root) ? walk(root).filter((path) => path.endsWith('.html')) : [];
if (htmlFiles.length !== 35) errors.push(`Expected 35 HTML pages, found ${htmlFiles.length}.`);

function targetForHref(file, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || /^(https?:|mailto:|tel:|javascript:)/.test(clean)) return null;
  if (clean.startsWith('//')) return null;
  let path;
  if (clean.startsWith(base)) path = clean.slice(base.length) || '/';
  else if (clean.startsWith('/')) return null; // another host-root path; project site does not own it
  else path = posix.normalize(posix.join('/', relative(root, dirname(file)).replaceAll('\\','/'), clean));
  if (path.endsWith('/')) path += 'index.html';
  else if (!posix.extname(path)) path += '.html';
  return join(root, path.replace(/^\//, ''));
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(root, file).replaceAll('\\','/');
  if (!html.includes('<meta name="description"')) errors.push(`${name}: missing meta description`);
  if (!html.includes('<link rel="canonical"')) errors.push(`${name}: missing canonical URL`);
  if (!html.includes('application/ld+json')) errors.push(`${name}: missing JSON-LD`);
  if (!html.includes('data-pagefind-body')) errors.push(`${name}: missing Pagefind content region`);
  if (html.includes('assets/site.css') || html.includes('assets/site.js')) errors.push(`${name}: legacy site asset reference remains`);
  for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
    const target = targetForHref(file, match[1]);
    if (target && !existsSync(target)) errors.push(`${name}: broken local link ${match[1]} -> ${relative(root,target)}`);
  }
}

// Go Deeper is intentionally the full reference layer. Protect against future
// migrations accidentally collapsing the pages back into Explore-level summaries.
for (const slug of deep) {
  const path = join(root, `deep/${slug}.html`);
  if (!existsSync(path)) continue;
  const html = readFileSync(path, 'utf8');
  if (!html.includes('deep-columns') || !html.includes('deep-how') || !html.includes('deep-work')) {
    errors.push(`deep/${slug}.html: missing required How it works / How we work deep-reference panes`);
  }
  if (!html.includes('data-deep-mode')) errors.push(`deep/${slug}.html: missing deep reading-mode support`);
  const h3Count = (html.match(/<h3/g) || []).length;
  if (h3Count < 10) errors.push(`deep/${slug}.html: reference depth appears too shallow (${h3Count} h3 sections; expected at least 10)`);
}

const deepLanding = existsSync(join(root,'deep/index.html')) ? readFileSync(join(root,'deep/index.html'),'utf8') : '';
if (!deepLanding.includes('Split View') || !deepLanding.includes('How it works') || !deepLanding.includes('How we work')) {
  errors.push('deep/index.html: missing explanation of Go Deeper reading modes.');
}

const robots = existsSync(join(root,'robots.txt')) ? readFileSync(join(root,'robots.txt'),'utf8') : '';
if (!robots.includes('User-agent: *') || !robots.includes('Allow: /')) errors.push('robots.txt is not broadly crawlable.');
if (!robots.includes(`${base}/sitemap-index.xml`)) errors.push('robots.txt does not reference the project sitemap.');

const llms = existsSync(join(root,'llms.txt')) ? readFileSync(join(root,'llms.txt'),'utf8') : '';
if (!llms.includes('Contract = Goal / Spec / Proof')) errors.push('llms.txt missing core Contract definition.');
if (!llms.includes('CC BY 4.0')) errors.push('llms.txt missing content license.');

if (errors.length) {
  console.error(`\nBuild validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, ${expected.length} required outputs, deep-reference structure, metadata, crawler files, and local links.`);
