import { createServer } from 'node:http';
import { complete } from './llm.mjs';

const MAX_BODY_BYTES = 16384;
const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('Invalid PORT'); process.exit(1);
}

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(data));
}

const server = createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    return send(res, 200, { status: 'ok', mode: process.env.AI_MODE || 'mock' });
  }
  if (req.url !== '/chat') return send(res, 404, { error: 'not_found' });
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    return send(res, 415, { error: 'application/json required' });
  }
  let size = 0;
  const chunks = [];
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) return send(res, 413, { error: 'request_too_large' });
      chunks.push(chunk);
    }
    const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const output = await complete({ message: input?.message });
    return send(res, 200, output);
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError || error instanceof RangeError) {
      return send(res, 400, { error: 'bad_request', detail: error.message });
    }
    // Do not reveal provider errors, secrets or prompt content to clients.
    console.error('Chat request failed:', error?.name || 'Error');
    return send(res, 502, { error: 'provider_unavailable' });
  }
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Learning lab listening on http://127.0.0.1:${port} (local only)`);
});
