# Contribuindo com o Dicionário Informal

## Como contribuir

### Opção 1 — Tina CMS (recomendado para não-programadores)

1. Acesse `/admin` no site ou clique em "Contribuir" no menu
2. Preencha o formulário com a abreviatura, significado, explicação e exemplo
3. Sua submissão cria automaticamente um Pull Request no GitHub
4. Após revisão, o verbete entra no ar

### Opção 2 — Pull Request direto no GitHub

1. Faça fork do repositório;
2. Crie uma branch para sua contribuição;
3. Crie ou edite um arquivo em `content/verbetes/`;
4. Siga o formato de frontmatter abaixo;
5. Envie um Pull Request para a branch `main`.

## Formato do verbete

Cada verbete é um arquivo Markdown em `content/verbetes/` com frontmatter YAML:

```markdown
---
abreviacao: "ASAP"
significado: "As Soon As Possible"
explicacao: "**ASAP** significa **As Soon As Possible** (O Mais Rápido Possível). É a abreviação corporativa mais universal para indicar urgência."
exemplo: "Could you review this document ASAP? We need to send it by noon."
categoria: "comunicacao"
contribuidor: "Seu Nome (opcional)"
---
```

### Campos obrigatórios

| Campo | Descrição |
|---|---|
| `abreviacao` | A sigla/abreviatura (ex: OOO, FYI) |
| `significado` | O significado por extenso em inglês |
| `explicacao` | Explicação em português (pode usar Markdown) |
| `exemplo` | Exemplo de uso em uma frase em inglês |
| `categoria` | Uma das categorias listadas abaixo |

### Categorias disponíveis

- `comunicacao` — abreviações usadas em e-mails e chats
- `reuniao` — prazos, agendas e reuniões
- `tecnologia` — ferramentas, TI e desenvolvimento
- `slang` — gírias da internet e informais
- `geral` — outros

### Regras

- A abreviatura deve ser usada no ambiente corporativo dos EUA
- Escreva a explicação em português claro e objetivo
- Inclua um exemplo realista de uso em inglês
- Escolha a categoria mais adequada
- Seja respeitoso — este é um projeto colaborativo e aberto

## Desenvolvimento local

```bash
pnpm install
pnpm run dev        # servidor de desenvolvimento
pnpm run build      # build estático
pnpm run tina:dev   # Tina CMS + Astro
```

## Licença

Ao contribuir, você concorda que seu conteúdo será publicado sob a mesma licença do projeto.
