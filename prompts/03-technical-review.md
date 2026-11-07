# Prompt — revisão técnica e pedagógica adversarial

Atue como revisor independente. Leia `{ARQUIVO}` e o módulo/sessão correspondentes. **Não edite ainda.**

Avalie em uma tabela: severidade (bloqueador/alto/médio/baixo), evidência (trecho/linha), problema, correção concreta e teste necessário.

Critérios:
- Correção técnica e consistência com documentação oficial vigente.
- Se conceitos foram introduzidos na ordem correta.
- Se o exercício realmente cabe na sessão (3h).
- Reprodutibilidade em modo mock, testes e tratamento de erros.
- Segurança: segredos, prompt injection, tool authorization, dados privados, RCE.
- Acessibilidade do texto e independência de um único fornecedor.
- Fontes atribuídas corretamente; links inventados; afirmações não verificadas.
- Respeito ao objetivo e critério originais em `curriculum/schedule.json`.

Saída em duas partes: (1) relatório de problemas priorizados, (2) checklist de aceite. Só proponha patch depois da revisão humana.
