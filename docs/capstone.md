# Capstone — AI Engineering Assistant

## Problema

Um time precisa consultar documentação operacional, status de serviços e deployments para investigar um incidente **simulado**. O software apresenta fatos com origem, hipóteses separadas e uma sugestão de resolução sujeita a aprovação.

## Escopo obrigatório

1. Backend com contrato de mensagem documentado.
2. Retrieval sobre documentação fictícia, retornando fontes.
3. Integração de pelo menos 3 ferramentas somente leitura (API, funções ou MCP).
4. Fluxo de investigação com limites de passos/tempo e audit trail.
5. Avaliação reproduzível e modo mock executável sem credencial.

## Fora de escopo inicial

Deploy real, shell irrestrito, acesso a sistemas corporativos, execução automática de ações destrutivas e fine-tuning. Qualquer recurso de escrita posterior exige autenticação, aprovação humana e auditoria.

## História da demonstração

> “Após um deployment, a API de checkout apresentou muitos 500. O que sabemos e que ações seguras podem ser recomendadas?”

Resposta esperada: identifica fontes; consulta tools; aponta hipótese com incerteza; oferece ação simulada; só executa após aprovação explícita.

## Critérios para release v0.1

- Clone e setup conforme README funcionam em máquina limpa.
- `npm test` passa offline no modo mock.
- Sem chave privada versionada; logs sem PII.
- Cenário feliz, falha de tool e rejeição humana demonstrados.
- Arquitetura, ADRs, limitações, custos e roteiro de demo documentados.

Consulte as [Semanas 11–12](weeks/week-11/index.md) e [Avaliação](assessment.md).
