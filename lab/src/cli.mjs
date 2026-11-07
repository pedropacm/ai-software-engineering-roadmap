import { complete } from './llm.mjs';

const message = process.argv.slice(2).join(' ') || 'O que é um LLM?';
try {
  const result = await complete({ message });
  process.stdout.write(`${result.text}\n`);
  process.stdout.write(`\nModelo: ${result.model} | modo: ${result.mode} | ${result.latencyMs} ms\n`);
} catch (error) {
  console.error('Falha:', error.message);
  process.exitCode = 1;
}
