# Semana 09, dia 02 — Arquitetura e contratos

**Tempo:** 3 horas · **Módulo:** [Arquitetura de sistemas de IA](../../modules/m07.md)

## Objetivo do dia

Desenhar container/component diagram e responsabilidades.

## Conceitos que preciso dominar

- C4
- componentes
- fronteiras
- APIs

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Revisão e leitura (45 min):** Leia o conceito e registre uma pergunta concreta.
2. **Implementação (105 min):** Implemente a parte mínima da atividade; faça commits pequenos.
3. **Teste e evidências (30 min):** Rode casos positivos e negativos; salve as saídas.

### Atividade prática

Desenhar container/component diagram e responsabilidades.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**C4 e contratos**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Fluxos de dados e fronteiras de confiança explícitos
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Próximo dia](day-03.md).
