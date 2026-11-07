# Biblioteca de prompts para manter e ampliar o curso

Esses prompts podem ser usados em qualquer assistente de IA que consiga trabalhar com Markdown e código. Se ele tiver acesso ao repositório, passe os caminhos exatos; caso contrário, cole o conteúdo de `AGENTS.md`, do módulo e da sessão.

## Ordem recomendada para produzir uma aula

1. `00-context-and-rules.md` — regras gerais, mantenha como instrução de projeto.
2. `01-expand-session.md` — gera aprofundamento opcional ou melhoria focada.
3. `02-design-exercise.md` — gera exercício, dicas graduais e testes.
4. `03-technical-review.md` — revisão técnica e didática independente.
5. `04-fact-check.md` — checagem de referências e tecnologias.
6. `05-build-tests.md` — suíte de testes para o laboratório.

Mais modelos: retrospectiva, tutor, expansão do currículo, revisão do capstone e publicação.

## Exemplo real — aprofundar Semana 1, Dia 1

Abra a aula `docs/weeks/week-01/day-01.md` e o módulo `docs/modules/m01.md`. Envie o prompt `01-expand-session.md` com as variáveis preenchidas:

```text
SEMANA=01
DIA=01
MODULO=m01
ARQUIVO_BASE=docs/weeks/week-01/day-01.md
ARQUIVO_SAIDA=docs/lessons/week-01-day-01-foundations.md
PUBLICO=desenvolvedor tradicional, familiarizado com APIs e testes
DURACAO_EXTRA=opcional, não altera as 3 horas da sessão principal
```

Peça ao agente para escrever **somente o arquivo de saída**, revisar e listar fontes. Use `03-technical-review.md` depois. Não integre mudanças sem executar os exemplos e verificar referências.

## Roteiro de commits

```text
content: draft optional W01D01 foundations deep dive
content: review sources and exercises for W01D01
lab: add W01D01 regression tests
```

**Nota:** nenhum prompt faz pesquisa ou edita o GitHub por si só; os recursos dependem da ferramenta de IA e permissões disponíveis. Não aceite links inventados como fontes.
