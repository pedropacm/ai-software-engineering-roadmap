# Segurança

Este material é educacional. O exemplo HTTP inicial só escuta `127.0.0.1` e não deve ser exposto diretamente à internet ou usado em produção sem autenticação, rate limit e hardening.

Nunca envie `.env`, chaves ou documentos confidenciais em Issues/PRs. Use dados fictícios no laboratório. Para divulgar problema de segurança, evite publicar exploit ou credencial real em issue pública; contate o mantenedor pela função de reporte privado de vulnerabilidades do repositório, caso habilitada.

Exercícios de agentes devem começar com ferramentas somente leitura. Qualquer alteração em recursos reais exige permissões mínimas, aprovação humana e log de auditoria.
