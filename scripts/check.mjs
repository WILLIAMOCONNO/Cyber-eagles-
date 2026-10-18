import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const files = (await readdir(root)).filter(file => file.endsWith('.html'));
const documents = new Map(await Promise.all(files.map(async file => [file, await readFile(resolve(root,file),'utf8')])));
const errors = [];
let links = 0;
for (const [file, html] of documents) {
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${file}: expected one h1`);
  if (!html.includes('<title>') || !html.includes('name="description"')) errors.push(`${file}: missing page metadata`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${file}: duplicate element ids`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;','&');
    if (/^(?:https?:|mailto:|tel:|data:)/.test(value)) continue;
    links++;
    const url = new URL(value, `https://local.invalid/${file}`);
    const target = resolve(root, '.' + url.pathname);
    try {
      await access(target);
      if (url.hash) {
        const content = await readFile(target,'utf8');
        const fragment = decodeURIComponent(url.hash.slice(1));
        if (!content.includes(`id="${fragment}"`)) errors.push(`${file}: missing fragment ${value}`);
      }
    } catch { errors.push(`${file}: missing local resource ${value}`); }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Checked ${files.length} pages and ${links} local links/assets; no missing files, fragments, metadata, or duplicate ids.`);
