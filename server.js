// Minimaler statischer Webserver (keine Abhängigkeiten) — für Railway/Render/Fly/Docker.
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 3000;
const types = {
  '.html':'text/html; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.md':'text/markdown; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.ico':'image/x-icon',
  '.png':'image/png', '.txt':'text/plain; charset=utf-8'
};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/' || p === '') p = '/index.html';
  const fp = path.join(root, path.normalize(p).replace(/^(\.\.[/\\])+/, ''));
  if (!fp.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404, {'content-type':'text/plain; charset=utf-8'}); return res.end('Not found'); }
    res.writeHead(200, { 'content-type': types[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log('Immobilien-Rechner läuft auf Port ' + port));
