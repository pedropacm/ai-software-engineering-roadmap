# Scripts de manutenção

- `python3 scripts/validate_curriculum.py`: valida 9 módulos, 12 semanas, 60 sessões e campos/arquivos obrigatórios. Não requer dependências externas.
- `python3 scripts/new_lesson.py --week 1 --day 1 --slug fundamentos`: cria um aprofundamento opcional e atualiza a navegação MkDocs. Não sobrescreve arquivo existente.
- `python3 scripts/create_week_issues.py`: mostra o conteúdo das 12 issues semanais **sem publicar**. Adicione `--execute` para criar no remoto autenticado com GitHub CLI (efeito externo explícito).

Antes de executar mudanças, verifique o `git diff`. Todas as atualizações devem passar por PR e testes.
