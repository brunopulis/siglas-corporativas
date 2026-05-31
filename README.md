# Dicionário Informal

**Glossário colaborativo de abreviações e gírias do ambiente corporativo dos EUA.**

Você trabalha com gringos e se sente perdido com siglas como OOO, FYI, ASAP?
Este é o seu lugar. Pesquise, aprenda e contribua com o glossário.

🔗 **[Acessar o site](https://dicionarioinformal.com.br)**

---

## Funcionalidades

- **Busca textual** — filtre verbetes por nome, significado ou categoria
- **Página de detalhe** — veja explicação em português, exemplo de uso e categoria
- **Categorias** — navegue por comunicação, reunião, tecnologia, gírias e geral
- **CMS opcional** — edite o conteúdo via Tina CMS em `/admin`

## Stack

| Camada         | Tecnologia                                                     |
| -------------- | -------------------------------------------------------------- |
| Framework      | [Astro](https://astro.build) 6 — Static Site Generator         |
| CMS            | [Tina CMS](https://tina.io) 3 — opcional, via `/admin`         |
| Linguagem      | TypeScript                                                     |
| Markdown       | `gray-matter` + `marked`                                       |
| Pacotes        | pnpm                                                           |

## Pré-requisitos

- **Node.js** >= 22.12.0
- **pnpm** — instalado globalmente (`npm i -g pnpm`)

## Comandos

| Comando               | Ação                                                |
| --------------------- | --------------------------------------------------- |
| `pnpm dev`            | Dev server Astro em `localhost:4321`                |
| `pnpm build`          | Build estático para `dist/`                         |
| `pnpm preview`        | Preview do build local                              |
| `pnpm tina:dev`       | Tina CMS + Astro (precisa de `.env`)                |
| `pnpm tina:build`     | Build do Tina CMS + Astro                           |
| `pnpm astro`          | CLI do Astro (`astro add`, `astro check`, etc.)     |

> O Tina CMS exige as variáveis `TINA_CLIENT_ID`, `TINA_TOKEN` e `TINA_BRANCH`.
> Copie `.env.example` para `.env` e preencha. Sem elas, apenas `pnpm dev` funciona.

## Como contribuir

### Pelo Tina CMS (recomendado)

Acesse `/admin` no site em desenvolvimento e use o formulário.

### Diretamente no repositório

Adicione um arquivo `.md` em `content/verbetes/` com este frontmatter:

```yaml
---
abreviacao: "ASAP"
significado: "As Soon As Possible"
explicacao: "Usado para **urgência** em e-mails e mensagens."
exemplo: "ASAP, please send the report."
categoria: "comunicacao"
contribuidor: "Seu Nome"   # opcional
---
```

> As categorias disponíveis são: `comunicacao`, `reuniao`, `tecnologia`, `slang`, `geral`.

Após adicionar o arquivo, execute `pnpm build` para gerar a página estática.

## Estrutura do projeto

```
/
├── content/verbetes/      # Dados — arquivos .md (um por verbete)
├── src/
│   ├── components/        # SearchBar.astro, VerbeteCard.astro
│   ├── layouts/           # Base.astro
│   └── pages/             # index.astro, [slug].astro, categorias.astro, contribuir.astro
├── tina/
│   └── config.ts          # Schema do Tina CMS
├── public/                # Favicon e assets estáticos
├── .env.example           # Variáveis de ambiente para Tina CMS
├── astro.config.mjs       # Astro config (output: 'static')
├── tsconfig.json          # Path alias @/* → src/*
└── pnpm-workspace.yaml    # Permissões de build
```

## Licença

[MIT](LICENSE)
