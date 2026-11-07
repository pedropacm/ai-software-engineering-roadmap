# Publicar o curso no seu GitHub

Estes comandos partem da pasta extraída `ai-software-engineering-roadmap/`. Os arquivos foram preparados localmente; **nenhum repositório remoto é criado automaticamente**.

## 1. Preparação

Instale Git e [GitHub CLI](https://cli.github.com/), configure seu usuário Git e autentique:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email-confirmado@example.com"
gh auth login
```

O e-mail acima é **exemplo**; substitua por um endereço válido associado à conta. Evite versionar credenciais.

## 2. Primeiro commit

```bash
cd ai-software-engineering-roadmap
git init -b main
git add .
git commit -m "docs: initialize AI engineering learning roadmap"
```

> Não use `git init` se estiver trabalhando em uma cópia que já tem `.git`.

## 3. Criar e enviar o repositório público

```bash
gh repo create ai-software-engineering-roadmap \
  --public --source=. --remote=origin --push \
  --description "12-week open AI software engineering learning roadmap"
```

O comando cria o remoto associado à conta autenticada, adiciona `origin` e envia o histórico existente. Para publicar em uma organização, use `ORGANIZACAO/ai-software-engineering-roadmap`.

## 4. Configurar GitHub Pages

1. Acesse **Settings → Pages** do repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça push para `main` ou execute manualmente o workflow `Publish documentation` na aba Actions.
4. Depois do deployment, a URL típica será `https://SEU_USUARIO.github.io/ai-software-engineering-roadmap/`.

GitHub Pages é público. Não publique conteúdo sensível mesmo que o repositório seja privado. Confira as permissões e as políticas do seu plano.

## 5. Ativar colaboração

Em **Settings → General → Features**, deixe Issues habilitadas. Em **Issues**, crie labels como `lesson`, `exercise`, `bug`, `docs`, `good first issue`. Opcionalmente crie um Project com colunas `Backlog`, `Draft`, `Review`, `Ready`, `Published`.

As issues podem usar `.github/ISSUE_TEMPLATE/new-lesson.yml`. PRs usam `.github/PULL_REQUEST_TEMPLATE.md`.

## 6. Configurar proteção de branches

Se disponível no seu plano, proteja `main` via **Settings → Rules → Rulesets**: PR obrigatório, checks `Validate course and lab` concluídos e revisão antes do merge. Evite permitir push direto de conteúdo gerado por IA.

## 7. Atualizar e expandir

```bash
git checkout -b content/week-01-lesson-01
# edite docs/weeks/week-01/day-01.md ou adicione docs/lessons/...
python3 scripts/validate_curriculum.py
# com as dependências instaladas: mkdocs build --strict
cd lab && npm test && cd ..
git add .
git commit -m "docs: expand week 1 day 1 lesson"
git push -u origin content/week-01-lesson-01
gh pr create --fill
```

O workflow de CI verifica integridade do calendário, build da documentação e testes do laboratório.
