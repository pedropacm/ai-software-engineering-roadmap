# Semana 07, dia 01 — Agent loop e quando evitá-lo

**Tempo:** 3 horas · **Módulo:** [Agentes e workflows com estado](../../modules/m06.md)

## Objetivo do dia

Definir problema de incidente e comparar fluxo fixo versus agente.

## Conceitos que preciso dominar

- ReAct
- determinismo
- limites

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Teoria orientada (60 min):** Leia o conceito e registre uma pergunta concreta.
2. **Experimento com exemplo (45 min):** Execute uma variação verificável da atividade e registre o resultado.
3. **Aplicação ao projeto (75 min):** Implemente a parte mínima da atividade; faça commits pequenos.

### Atividade prática

Definir problema de incidente e comparar fluxo fixo versus agente.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**Decision record sobre agents**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Consegue justificar por que agent é necessário ou não
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Próximo dia](day-02.md).
