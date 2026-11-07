import test from 'node:test';
import assert from 'node:assert/strict';
import { complete, validateMessage } from '../src/llm.mjs';

test('mock works without credentials or network', async () => {
  const answer = await complete({ message: 'hello', settings: { AI_MODE: 'mock' } });
  assert.equal(answer.model, 'mock');
  assert.match(answer.text, /mock/);
});

test('empty messages rejected', () => {
  assert.throws(() => validateMessage('   '), /non-empty/);
  assert.throws(() => validateMessage(1), /non-empty/);
});

test('too-long messages rejected', () => {
  assert.throws(() => validateMessage('a'.repeat(8001)), /at most/);
});

test('invalid mode rejected', async () => {
  await assert.rejects(complete({ message: 'hello', settings: { AI_MODE: 'invalid' } }), /AI_MODE/);
});

test('API mode parses an OpenAI-compatible response', async () => {
  const fakeFetch = async (url, options) => {
    assert.equal(url, 'http://localhost:11434/v1/chat/completions');
    assert.equal(JSON.parse(options.body).model, 'example-model');
    return new Response(JSON.stringify({ choices: [{ message: { content: 'Olá' } }], usage: { total_tokens: 12 } }), { status: 200 });
  };
  const answer = await complete({ message: 'Hi', settings: { AI_MODE: 'api', AI_MODEL: 'example-model', AI_BASE_URL: 'http://localhost:11434/v1/', AI_API_KEY: 'fake' }, fetchImpl: fakeFetch });
  assert.equal(answer.text, 'Olá');
  assert.equal(answer.usage.total_tokens, 12);
});

test('API errors surface without raw provider body', async () => {
  await assert.rejects(complete({ message: 'Hi', settings: { AI_MODE: 'api', AI_MODEL: 'example', AI_BASE_URL: 'http://localhost:11434/v1/' }, fetchImpl: async () => new Response('sensitive data', { status: 429 }) }), /HTTP 429/);
});

test('invalid API response shape rejected', async () => {
  await assert.rejects(complete({ message: 'Hi', settings: { AI_MODE: 'api', AI_MODEL: 'example', AI_BASE_URL: 'http://localhost:11434/v1/' }, fetchImpl: async () => new Response('{}', { status: 200 }) }), /Invalid provider response/);
});
