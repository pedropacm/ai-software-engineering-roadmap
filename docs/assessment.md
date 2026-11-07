# Avaliação e evidências

Cada sessão é considerada concluída quando **atividade, entregável e critério de aceite** estão documentados. Sugestão de avaliação semanal:

| Dimensão | Peso | Evidência |
|---|---:|---|
| Funcionalidade | 35% | Demonstração repetível |
| Testes e robustez | 25% | Testes automatizados + falhas simuladas |
| Engenharia e segurança | 20% | Contratos, validações e limites |
| Explicação técnica | 15% | README, ADR e decisões justificadas |
| Aprendizagem/reflexão | 5% | Registro de hipóteses e erros |

Não use só um LLM julgando outro. Prefira testes determinísticos para formatos, permissões e contratos, e avaliações humanas com critérios explícitos para qualidade textual.

## Retrospectiva toda sexta

- O que foi implementado e comprovado?
- Qual hipótese não se confirmou?
- Quais falhas ainda são reproduzíveis?
- O que será refatorado na semana seguinte?
- Consigo explicar as decisões sem repetir palavras da documentação?

## Exigências do capstone

A demonstração precisa distinguir modo mock e integração real; incluir um caso de sucesso, um erro controlado, evidências/documentos, trilha de ferramentas e ação sensível bloqueada até aprovação humana.
