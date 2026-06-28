// Minimaler statischer Webserver (keine Abhängigkeiten) — für Railway/Render/Fly/Docker.
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 3000;
const types = {
  '.html':'text/html; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.md':'text/markdown; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.ico':'image/x-icon',
  '.png':'image/png', '.txt':'text/plain; charset=utf-8'
};
const securityHeaders = {
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'content-security-policy': "default-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"
};
http.createServer((req, res) => {
  let p;
  try {
    p = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    res.writeHead(400, { ...securityHeaders, 'content-type':'text/plain; charset=utf-8' });
    return res.end('Bad request');
  }
  if (p === '/' || p === '') p = '/index.html';
  const fp = path.join(root, path.normalize(p).replace(/^(\.\.[/\\])+/, ''));
  if (!fp.startsWith(root)) {
    res.writeHead(403, { ...securityHeaders, 'content-type':'text/plain; charset=utf-8' });
    return res.end('Forbidden');
  }
  fs.readFile(fp, (err, data) => {
    if (err) {
      res.writeHead(404, { ...securityHeaders, 'content-type':'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    const ext = path.extname(fp).toLowerCase();
    const cache = ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable';
    res.writeHead(200, { ...securityHeaders, 'content-type': types[ext] || 'application/octet-stream', 'cache-control': cache });
    res.end(data);
  });
}).listen(port, () => console.log('Immobilien-Rechner läuft auf Port ' + port));
