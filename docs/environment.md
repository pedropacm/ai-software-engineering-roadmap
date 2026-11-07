# Ambiente de desenvolvimento

## Caminho mínimo (qualquer pessoa)

- Git + terminal; Node.js LTS com `npm`; Python 3.11+ **apenas** para `mkdocs serve`.
- Inicie com `lab/.env` contendo `AI_MODE=mock`.
- Execute `cd lab && npm test && npm run cli`.

## Caminho com modelo local

Instale um serviço de inferência que exponha `/v1/chat/completions`. Exemplo com Ollama:

```bash
ollama pull qwen3:8b
ollama serve
```

O servidor pode já estar ativo, caso em que `ollama serve` é desnecessário. No arquivo `lab/.env`:

```dotenv
AI_MODE=api
AI_BASE_URL=http://localhost:11434/v1/
AI_MODEL=qwen3:8b
AI_API_KEY=ollama
```

A API local do Ollama ignora a chave fictícia acima. **Não presuma que um servidor remoto também ignore a chave.** Se usar provedor remoto, configure URL, chave e modelo oferecidos pelo provedor e evite compartilhar seu `.env`.

## Dados e infraestrutura para semanas 4–5

Recomendação: PostgreSQL com extensão `pgvector` para armazenar embeddings. Uma alternativa de prototipação em memória permite explorar chunking e ranking antes de configurar banco. Não há banco obrigatório na primeira semana; cada sessão indica quando acrescentar a dependência.

## Alternativa de stack

Java/Spring Boot, Python e outras linguagens podem substituir Node.js no capstone, desde que os contratos de API, cenários de teste e critérios de aceite permaneçam equivalentes. A solução Node incluída é apenas uma base executável.

## Site local

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-docs.txt
mkdocs serve
```

Abra a URL exibida no terminal. `mkdocs build --strict` é usado para validar o site.
