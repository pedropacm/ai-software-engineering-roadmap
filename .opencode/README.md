# Agentes OpenCode para este repositório

- `opencode.jsonc`: provider Open WebUI, modelo inicial e permissões.
- `agents/engineering-lead.md`: agente principal.
- `agents/code-implementer.md`: implementação restrita a `lab/` e `scripts/`.
- `agents/code-reviewer.md`: revisão somente leitura.
- `agents/course-author.md`: aprofundamentos restritos a `docs/lessons/`.
- `commands/`: ações do tipo `/plan-task`, `/implement-task`, `/write-lesson`, `/review-changes`, `/validate`.

## Segurança

A chave NÃO fica no repositório: exporte `OPENWEBUI_API_KEY` no processo que executará OpenCode. O arquivo `lab/.env` é para o laboratório e não configura o OpenCode automaticamente.

`permissions` reduzem risco, mas **não substituem** isolamento do sistema operacional, revisão de comandos ou aprovação humana. `shell` solicita aprovação por padrão.

## Ambiente

```bash
cd ai-software-engineering-roadmap
export OPENWEBUI_API_KEY='sk-substitua-por-sua-chave'
opencode --standalone
```

Antes de usar os agentes para editar arquivos, teste um pedido de `tool_calls` diretamente contra `/api/chat/completions` e confirme que o modelo retorna tool calls em vez de apenas texto. Confira os IDs reais em `/api/models`; ajuste o nome no `opencode.jsonc` se forem diferentes.

Referência de orientação completa: `docs/coding-agent.md`.
