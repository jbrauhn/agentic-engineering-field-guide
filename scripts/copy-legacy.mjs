import { cp, mkdir, readdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

async function copyLegacySection(section) {
  const source = join(root, section);
  const target = join(dist, section);
  await mkdir(target, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.html') || entry.name === 'index.html') continue;
    await copyFile(join(source, entry.name), join(target, entry.name));
  }
}

for (const section of ['start', 'explore', 'deep', 'practice']) {
  await copyLegacySection(section);
}

await cp(join(root, 'assets'), join(dist, 'assets'), { recursive: true, force: true });
await copyFile(join(root, 'design-system.html'), join(dist, 'design-system.html'));

console.log('Legacy content copied beside Astro routes for incremental migration.');
