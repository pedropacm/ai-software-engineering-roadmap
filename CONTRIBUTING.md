# Como contribuir

Contribuições são bem-vindas em português brasileiro. O objetivo é manter o curso utilizável por pessoas que clonam o repositório pela primeira vez.

## Tipos de mudança

- Corrigir erro técnico ou link desatualizado.
- Ampliar uma sessão sem exceder o tempo previsto.
- Incluir exercício, solução de referência **separada da aula**, dataset sintético ou teste.
- Propor uma trilha opcional sem substituir os 9 módulos principais.

## Critério de qualidade de material novo

Explique **por quê**, não só **como**. Indique pré-requisitos, objetivo, teoria essencial, atividade executável, entregável, aceite, limitação, fontes e tempo. Se houver código, inclua comando e teste que funcionem em máquina limpa ou mock.

## Processo

1. Abra issue com o template.
2. Crie branch curta e uma alteração focada.
3. Execute `python3 scripts/validate_curriculum.py`, `mkdocs build --strict` e `cd lab && npm test`.
4. Envie PR explicando o que mudou, fontes verificadas, como testou e impacto no currículo.

Não inclua textos, imagens ou códigos licenciados sem permissão. Material produzido por IA não dispensa revisão factual, técnica e de licença.
