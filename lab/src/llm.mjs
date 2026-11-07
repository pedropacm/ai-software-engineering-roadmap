// Base AI provider: small on purpose; students grow it throughout the course.
const MAX_PROMPT_LENGTH = 8000;

export function validateMessage(message) {
  if (typeof message !== 'string' || message.trim().length === 0) {
    throw new TypeError('message must be a non-empty string');
  }
  if (message.length > MAX_PROMPT_LENGTH) {
    throw new RangeError(`message must have at most ${MAX_PROMPT_LENGTH} characters`);
  }
  return message.trim();
}

export async function complete({ message, settings = process.env, fetchImpl = fetch }) {
  const text = validateMessage(message);
  const mode = settings.AI_MODE || 'mock';

  if (mode === 'mock') {
    return {
      text: '[mock] A chamada foi recebida. Configure AI_MODE=api para comparar modelos reais.',
      model: 'mock',
      mode,
      latencyMs: 0,
      usage: null,
    };
  }
  if (mode !== 'api') throw new Error('AI_MODE must be mock or api');

  const model = settings.AI_MODEL;
  const rawUrl = settings.AI_BASE_URL;
  if (!model || !rawUrl) throw new Error('AI_MODEL and AI_BASE_URL are required in api mode');
  const base = new URL(rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('Only HTTP(S) provider URLs allowed');
  const target = new URL('chat/completions', base).toString();
  const timeout = Number(settings.AI_TIMEOUT_MS || 15000);
  if (!Number.isInteger(timeout) || timeout < 100 || timeout > 120000) {
    throw new RangeError('AI_TIMEOUT_MS must be 100..120000');
  }

  const start = performance.now();
  const response = await fetchImpl(target, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${settings.AI_API_KEY || 'ollama'}`,
    },
    body: JSON.stringify({ model, messages: [{ role: 'user', content: text }], temperature: 0.2 }),
    signal: AbortSignal.timeout(timeout),
  });
  if (!response.ok) throw new Error(`LLM HTTP ${response.status}`);
  let json;
  try { json = await response.json(); }
  catch { throw new Error('Invalid JSON from provider'); }
  const content = json?.choices?.[0]?.message?.content;
  if (typeof content !== 'string') throw new Error('Invalid provider response format');

  return {
    text: content,
    model,
    mode,
    latencyMs: Math.round(performance.now() - start),
    usage: json.usage || null,
  };
}
