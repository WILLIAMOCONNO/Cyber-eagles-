import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.png':'image/png', '.ttf':'font/ttf', '.ico':'image/x-icon' };
const port = Number(process.env.PORT || 8000);
const server = createServer(async (request, response) => {
  if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405, { Allow:'GET, HEAD' }); response.end(); return; }
  try {
    const path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let target = resolve(root, '.' + path);
    if (target !== resolve(root) && !target.startsWith(resolve(root) + sep)) { response.writeHead(403); response.end('Forbidden'); return; }
    if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
    const data = await readFile(target);
    response.writeHead(200, { 'Content-Type':types[extname(target)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff', 'Cache-Control':'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch (error) {
    const status = error instanceof URIError ? 400 : 404;
    response.writeHead(status, { 'Content-Type':'text/html; charset=utf-8' });
    response.end(request.method === 'HEAD' ? undefined : await readFile(resolve(root,'404.html')));
  }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Serving public/ on port ${port}. Press Ctrl+C to stop.`));
