# Guia rápido de estudo

## Pré-requisitos

- Saber programar, usar Git, APIs HTTP, terminal e testes automatizados.
- Instalar Git, Node.js LTS (22+ recomendado), npm e Python 3.11+ (somente para visualizar o site de documentação).
- O curso começa com **modo mock**; acesso a um LLM real não é obrigatório para abrir o repositório.

## Primeiros comandos

```bash
git clone https://github.com/SEU_USUARIO/ai-software-engineering-roadmap.git
cd ai-software-engineering-roadmap
cd lab
cp .env.example .env
npm test
npm run cli -- "Explique por que um LLM é probabilístico"
npm start
```

Em outro terminal: `curl -s http://127.0.0.1:3000/health`. Para o POST de teste:

```bash
curl -s -X POST http://127.0.0.1:3000/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"Explique a diferença entre RAG e fine-tuning"}'
```

No Windows, copie `.env.example` para `.env` pelo Explorer/PowerShell e execute os mesmos comandos Node. Não versione `.env`.

## Como seguir cada sessão

1. Leia os conceitos e os links da sessão.
2. Trabalhe na atividade com o timebox indicado.
3. Salve o artefato no laboratório ou em `notes/` **local**.
4. Rode testes; registre o resultado e faça um commit no seu fork.
5. Marque seu progresso no arquivo local `progress.md` (copie de `templates/progress.md`).

## Sem serviços pagos

O laboratório contém modo `AI_MODE=mock` para validar o setup, contratos e testes. Modo mock **não comprova a qualidade de um modelo real**. Os exercícios de comparação e RAG exigem que você conecte um LLM ou embeddings compatíveis quando chegar a esses dias.

## Personalização

Use fork para registrar suas soluções. O repositório original guarda a trilha e exemplos de referência; seu fork pode guardar experimentos, logs sanitizados e testes. Nunca publique dados reais de clientes, chaves ou documentos privados.

Próximo: [Semana 1](weeks/week-01/index.md).
