# Semana 02, dia 03 — JSON Schema e validação

**Tempo:** 3 horas · **Módulo:** [APIs de LLM e engenharia de contexto](../../modules/m02.md)

## Objetivo do dia

Impor saída estruturada; construir fallback diante de JSON inválido.

## Conceitos que preciso dominar

- structured output
- schema
- parse
- validação

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Revisão curta (30 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.
2. **Construção incremental (120 min):** Implemente a parte mínima da atividade; faça commits pequenos.
3. **Testes e anotações (30 min):** Rode casos positivos e negativos; salve as saídas.

### Atividade prática

Impor saída estruturada; construir fallback diante de JSON inválido.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**Validador de resposta estruturada**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Testes cobrem resposta válida e ao menos 2 inválidas
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Próximo dia](day-04.md).
