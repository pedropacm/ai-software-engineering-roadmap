# Semana 10, dia 03 — Logs, traces e custo

**Tempo:** 3 horas · **Módulo:** [Avaliação, observabilidade e segurança](../../modules/m08.md)

## Objetivo do dia

Instrumentar request → retrieval → tools → response.

## Conceitos que preciso dominar

- trace id
- latency
- token count
- redaction

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Revisão curta (30 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.
2. **Construção incremental (120 min):** Implemente a parte mínima da atividade; faça commits pequenos.
3. **Testes e anotações (30 min):** Rode casos positivos e negativos; salve as saídas.

### Atividade prática

Instrumentar request → retrieval → tools → response.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**Traces estruturados**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Trace é reconstruível sem registrar informação sensível
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Próximo dia](day-04.md).
