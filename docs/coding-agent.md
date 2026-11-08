# Manual de codificação assistida por agentes

Este complemento estabelece um time de agentes com acesso ao Open WebUI para desenvolver este currículo e o laboratório de IA de maneira incremental e revisável.

## Primeiro uso

1. Obtenha uma API key no Open WebUI.
2. Não coloque a chave nos arquivos rastreados por Git. Exporte `OPENWEBUI_API_KEY` na sessão do terminal em que o OpenCode será iniciado.
3. Confira o ID do modelo via GET `http://192.168.3.2:3000/api/models` com `Authorization: Bearer ...`.
4. Verifique que esse modelo suporta **tool calling**. Chat simples não é teste suficiente.
5. Abra `opencode --standalone` na raiz do repositório; escolha `engineering-lead`.
6. Execute `/plan-task` com uma tarefa pequena, revise o plano e depois `/implement-task`.
7. Execute `/review-changes` e `/validate`.
8. O humano revisa o diff, faz commit, abre PR e publica após passar no CI.

## Exemplos

```text
/plan-task Adicionar uma rotina que registre latência de inferência no CLI sem alterar contratos.
/implement-task Implementar a coleta de latência aprovada no último plano, com testes.
/review-changes lab/src/llm.mjs e testes correspondentes
/write-lesson Semana 01, Dia 01, arquivo docs/lessons/week-01-day-01-foundations.md
/validate Alterações da semana 1
```

## Problemas recorrentes

- Modelos ausentes: revise `/api/models` e as permissões do usuário.
- HTTP 401/403: revise a chave e os recursos permitidos.
- Erro 404: `baseURL` do OpenCode deve ser `...:3000/api`, sem `/v1`.
- Retorno textual em vez de `tool_calls`: confirme suporte do modelo e configuração de passagem de tools; não force `capabilities.tools=true` como se isso adicionasse suporte real.
- Contexto estourando: reduza o escopo, use arquivos bem delimitados e só eleve `limit.context` se o Ollama também estiver configurado e testado para esse contexto.
- Mudanças inesperadas: interrompa, confira `git diff` e reverta manualmente se necessário.
- Servidor compartilhado com credenciais antigas: inicie `opencode --standalone` ou atualize o ambiente do servidor compartilhado.

## Workflow editorial

`Issue → branch → plano → implementação/aula → revisão independente → testes → PR → publicação`

O currículo em `curriculum/schedule.json` permanece autoritativo. Não antecipar soluções das semanas futuras.

## Limites

Este pacote valida estrutura e formatos localmente, mas a comunicação com seu servidor Open WebUI e a invocação real de modelos/agentes devem ser testadas na sua rede.
