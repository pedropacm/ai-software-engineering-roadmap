---
description: Validar currículo, site e testes do laboratório
agent: engineering-lead
---

Verifique o estado do repositório. Solicite autorização para executar os comandos apropriados, sem modificar arquivos deliberadamente:

- python3 scripts/validate_curriculum.py
- mkdocs build --strict (se MkDocs estiver instalado; gera site/ ignorado por Git)
- cd lab && npm test
- git diff --check

Informe saídas observadas, falhas e o que não pôde ser testado. Não publique nada.

Escopo adicional: $ARGUMENTS
