# Semana 09, dia 05 — Entrega: arquitetura AI-first

**Tempo:** 3 horas · **Módulo:** [Arquitetura de sistemas de IA](../../modules/m07.md)

## Objetivo do dia

Publicar documentação de arquitetura consolidada.

## Conceitos que preciso dominar

- ADRs
- runbooks
- SLOs

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Retrospectiva (30 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.
2. **Integração e finalização (90 min):** Implemente a parte mínima da atividade; faça commits pequenos.
3. **Testes (30 min):** Rode casos positivos e negativos; salve as saídas.
4. **Registro e plano da semana seguinte (30 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.

### Atividade prática

Publicar documentação de arquitetura consolidada.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**Architecture package**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Leitor externo explica componentes e decisões sem ajuda
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Semana seguinte](../week-10/index.md).
