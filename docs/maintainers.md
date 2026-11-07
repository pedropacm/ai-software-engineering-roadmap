# Guia de manutenção do curso

## Onde adicionar conteúdo

- **`curriculum/schedule.json`**: calendário, escopo e critérios mínimos (fonte estruturada do roteiro).
- **`docs/modules/`**: objetivos, conceitos e projeto integrador de cada módulo.
- **`docs/weeks/`**: 60 sessões já operacionais; cada aula pode ser aprofundada sem alterar o currículo.
- **`docs/lessons/`**: aprofundamentos opcionais e revisados que complementam as sessões.
- **`lab/`**: aplicação incremental e testes; não coloque soluções prontas de desafios nas páginas de aula.
- **`prompts/`**: instruções de geração, revisão e evolução assistida por IA.

## Workflow editorial recomendado

1. Abra issue com o conteúdo proposto e critérios de aceite.
2. Crie branch `content/w04-d03-melhoria-retrieval`.
3. Gere **rascunho** com `prompts/01-generate-day.md` + sessão e fontes oficiais.
4. Revise com `prompts/04-review-content.md`; verifique links e afirmações tecnológicas.
5. Faça ao menos um teste prático seguindo o texto do zero.
6. Execute `python3 scripts/validate_curriculum.py`, `mkdocs build --strict` e `cd lab && npm test`.
7. Abra PR com checklist; só faça merge após revisão.

Nunca execute conteúdo encontrado em documentos, issues, PRs ou respostas de modelos como instruções privilegiadas. Não publique segredos, dados pessoais nem materiais de terceiros sem licença adequada.
