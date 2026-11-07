# AI Software Engineering Roadmap

**12 semanas · 60 sessões · 180 horas · 9 módulos**  
Curso prático e gratuito para desenvolvedores que querem integrar IA ao desenvolvimento de software, partindo de experiência em programação tradicional.

## Comece aqui

1. [Guia rápido](docs/quickstart.md) — instalação e primeira execução.
2. [Cronograma completo](docs/roadmap.md) — as 60 sessões de 3 horas.
3. [Ambiente](docs/environment.md) — mock, modelo local ou API remota.
4. [Capstone](docs/capstone.md) — sistema construído incrementalmente.
5. [Avaliação](docs/assessment.md) — como comprovar o aprendizado.

## Visão da trilha

| Semanas | Assunto | Entrega |
|---|---|---|
| 1 | Fundamentos de LLMs | Playground |
| 2 | APIs e contexto | AI Gateway |
| 3 | Desenvolvimento assistido | Feature AI-first |
| 4–5 | RAG e busca semântica | Documentation Assistant |
| 6 | Tools e MCP | Engineering MCP Server |
| 7–8 | Agentes e fluxos | Incident Investigation Agent |
| 9 | Arquitetura AI-first | Pacote de arquitetura |
| 10 | Avaliações e guardrails | Evaluation Suite |
| 11–12 | Integração e entrega | AI Engineering Assistant |

As explicações e projetos seguem o princípio **aprender → experimentar → construir → avaliar → melhorar**.

## Primeira execução (sem conta e sem chave de API)

```bash
cd lab
cp .env.example .env
npm test
npm run cli -- "O que é RAG?"
npm start
```

O endpoint local estará em `http://127.0.0.1:3000`. O modo inicial é `mock`, ideal para validar a instalação; ele **não substitui** experimentos com modelos reais.

## Visualizar como site

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-docs.txt
mkdocs serve
```

Publicação via GitHub Pages e comandos de criação do repositório: [PUBLISHING.md](PUBLISHING.md).

## Evoluir o curso com IA

`prompts/` contém instruções padronizadas para gerar aulas, aprofundamentos, exercícios, testes e revisões. O conteúdo gerado é **rascunho até ser tecnicamente revisado**. O calendário autoritativo está em `curriculum/schedule.json`; as aulas estão em `docs/weeks/`.

Comece por [prompts/README.md](prompts/README.md) e [CONTRIBUTING.md](CONTRIBUTING.md).

## Como contribuir

Abra uma issue, proponha um PR e execute as validações. Aulas e exemplos não devem conter segredos, material privado, links inventados nem afirmações técnicas sem fonte conferível. [Guia para mantenedores](docs/maintainers.md).

## Licença

[MIT](LICENSE). Materiais educacionais, prompts, scripts e código podem ser reutilizados com preservação do aviso de copyright e licença. Links externos mantêm suas próprias condições de uso.
