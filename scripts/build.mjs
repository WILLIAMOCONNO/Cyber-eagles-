import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { home } from '../content/home.mjs';
import { pages } from '../content/pages.mjs';

const output = fileURLToPath(new URL('../public/', import.meta.url));
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const primary = [['team.html','Our team'],['engineering.html','Engineering'],['robot.html','Robot'],['programming.html','Code'],['outreach.html','Outreach']];
const archive = [['journey.html','Our journey'],['learning.html','Lessons learned'],['gallery.html','Reference gallery'],['budget.html','Budget'],['acknowledgements.html','Thanks']];
const link = ([href, label], current) => `<a href="${href}"${href === current ? ' aria-current="page"' : ''}>${label}</a>`;
const mark = `<svg class="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 10h13l7 8 12-8-8 18-8 5-4-12L4 10Z" fill="currentColor"/><path d="m16 21 12 7M17 10l-1 11" stroke="var(--paper)" stroke-width="1.7"/></svg>`;
const brand = `<a class="brand" href="index.html" aria-label="Cyber Eagles home">${mark}<span>Cyber Eagles<small>FTC 27662 · Ashburn, VA</small></span></a>`;
function header(current) {
  return `<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap nav">${brand}<button class="menu" type="button" aria-controls="navigation" aria-expanded="false">Menu <span aria-hidden="true">+</span></button><nav class="links" id="navigation" aria-label="Main navigation">${primary.map(item => link(item,current)).join('')}<details class="archive-menu"><summary${archive.some(([href]) => href === current) ? ' class="current"' : ''}>Notebook <span aria-hidden="true">⌄</span></summary><div class="archive-dropdown">${archive.map(item => link(item,current)).join('')}</div></details></nav></div></header>`;
}
function footer(current) {
  return `<footer class="site-footer"><div class="wrap"><div class="footer-top"><div>${brand}<p>A student robotics team.<br>A notebook of what we learned.</p></div><nav class="footer-links" aria-label="Footer navigation">${[...primary,...archive].map(item => link(item,current)).join('')}</nav></div><div class="footer-bottom"><span>© 2026 Cyber Eagles · FTC Team 27662</span><span>Ashburn, Virginia</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div></div></footer>`;
}
function document(page, current, body) {
  const arrow = '<svg class="arrow-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 16 16 4M4 4h12v12"/></svg>';
  return `<!doctype html>
<html lang="en" id="top"><head><meta charset="utf-8">${current === '404.html' ? '<base href="/">' : ''}<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(page.description)}"><meta name="theme-color" content="#f5f3ed"><title>${escape(page.title)}${current === 'index.html' ? '' : ' | Cyber Eagles Robotics'}</title><link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/site.css"><script src="assets/site.js" defer></script><noscript><style>[hidden]{display:block!important}.menu,.tabs,.portfolio-tabs,.filters{display:none!important}</style></noscript></head><body>${header(current)}<main id="main">${body}</main>${footer(current)}</body></html>\n`.replaceAll('↗', arrow);
}
await mkdir(output, { recursive: true });
await writeFile(`${output}/index.html`, document(home, 'index.html', home.body));
for (const [filename, page] of Object.entries(pages)) {
  const hero = `<section class="page-hero"><div class="wrap"><a class="breadcrumb" href="index.html">Cyber Eagles <span aria-hidden="true">/</span></a><p class="eyebrow">${escape(page.kicker)}</p><h1>${page.heading}</h1><p class="page-intro">${escape(page.intro)}</p></div></section>`;
  await writeFile(`${output}/${filename}`, document(page, filename, hero + page.body));
}
const missing = { title: 'Page not found', description: 'Find your way back to the Cyber Eagles team notebook.' };
await writeFile(`${output}/404.html`, document(missing, '404.html', '<section class="page-hero"><div class="wrap"><p class="eyebrow">404 / Page not found</p><h1>That page is missing.</h1><p class="page-intro">The team notebook is still here.</p><a class="button" href="index.html">Back to the homepage <span aria-hidden="true">→</span></a></div></section>'));
console.log(`Built ${Object.keys(pages).length + 2} static pages in public/.`);
