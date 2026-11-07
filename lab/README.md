# Laboratório incremental

Este diretório contém o **início** do capstone, não a implementação completa dos nove módulos. Uma pessoa estudante deve evoluir o mesmo sistema semanalmente; materiais posteriores ainda são atividades propostas.

## Executar sem chaves ou serviços externos

```bash
cp .env.example .env
npm test
npm run cli -- "Por que um LLM é probabilístico?"
npm start
```

Em outra janela:

```bash
curl http://127.0.0.1:3000/health
curl -X POST http://127.0.0.1:3000/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"Explique o que é um agente"}'
```

## Ligar um LLM real opcionalmente

Altere `.env`: `AI_MODE=api`, `AI_BASE_URL`, `AI_MODEL` e `AI_API_KEY`. O endpoint esperado é `POST {AI_BASE_URL}/chat/completions`, com payload simples de chat e formato compatível com `choices[0].message.content`.

O código atual **não** implementa autenticação do HTTP, retry, structured outputs nem RAG. Esses recursos são os objetivos das próximas sessões. A API escuta apenas em `127.0.0.1`, para uso local; não exponha na rede sem controles adequados.

## Mapa de evolução

| Módulos | Implementação esperada |
|---|---|
| 1 | comparar prompts, modelos, latência e resultados |
| 2 | providers, validação, structured outputs, retry, custos |
| 3 | integração assistida por IA com review e testes |
| 4 | ingestion, embeddings, pgvector, retrieval, citações |
| 5 | tool runner, contratos e servidor MCP |
| 6 | agente de investigação, estado, grafo e HITL |
| 7 | ADRs, arquitetura, custo e segurança |
| 8 | golden dataset, avaliações, tracing e guardrails |
| 9 | UI mínima, integração, documentação e demo |

Tudo que não estiver no código ainda deve ser descrito como **planejado**, nunca como já implementado.
