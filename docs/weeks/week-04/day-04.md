# Semana 04, dia 04 — Recuperação e ranking

**Tempo:** 3 horas · **Módulo:** [RAG e busca semântica](../../modules/m04.md)

## Objetivo do dia

Criar função retrieve(query) e observar casos mal ranqueados.

## Conceitos que preciso dominar

- semantic search
- top-k
- filtros

Leia a seção **Ideia central** do módulo e consulte as referências oficiais listadas lá. Ao estudar, defina cada conceito com palavras próprias e dê um exemplo aplicado ao projeto.

## Roteiro de 3 horas

1. **Revisão do plano (20 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.
2. **Implementação aprofundada (140 min):** Implemente a parte mínima da atividade; faça commits pequenos.
3. **Registro de decisões (20 min):** Verifique os critérios de aceite; descreva erros, decisões e próximos passos.

### Atividade prática

Criar função retrieve(query) e observar casos mal ranqueados.

**Método sugerido:** escreva primeiro a hipótese/critério; implemente a menor versão executável; teste a hipótese; registre o resultado e ajuste a próxima iteração. Se depender de serviço externo, use mocks para validar o contrato antes de ligar a integração real.

## Entregável

**Endpoint ou CLI de retrieval**

Armazene código em `lab/` e documentação no seu fork, preferencialmente em commits pequenos. Use `templates/study-log.md` para registrar o experimento. Nenhuma chave ou dado privado deve aparecer no commit.

## Critério de conclusão

- [ ] Registra top-k para 5 perguntas antes de geração
- [ ] Executei o exercício ou registrei claramente o que bloqueou a implementação.
- [ ] Consigo explicar o conceito sem consultar o modelo.
- [ ] Rodei testes relevantes e guardei evidência não sensível.

## Reflexão de 5 minutos

- O que poderia ser determinístico em vez de decidido pelo LLM?
- Qual risco de qualidade, custo ou segurança surgiu hoje?
- O que precisa mudar na próxima iteração?

**Próximo passo:** [Próximo dia](day-05.md).
