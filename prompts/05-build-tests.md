# Prompt — gerar testes reproduzíveis

Analise `lab/` e a sessão `{ARQUIVO_SESSAO}`. Gere testes focados nos critérios de aceite, sem modificar o contrato público para satisfazer testes artificiais.

Cobertura mínima:
1. Caminho feliz e payload válido.
2. Entrada vazia, inválida ou grande demais.
3. Resposta malformada do provedor.
4. Timeouts e indisponibilidade quando aplicáveis.
5. Limites de ferramentas e ausência de efeitos colaterais proibidos.
6. Sem exigência de chaves reais no CI: use fake fetch, stub ou modo mock.

Antes do patch, explique o plano, dependências novas (se houver) e limitações. Depois mostre comandos executados e resultados reais. Não diga que testes passaram se não os executou.
