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

| Camada    | Tecnologia                                             |
| --------- | ------------------------------------------------------ |
| Framework | [Astro](https://astro.build) 6 — Static Site Generator |
| CMS       | [Tina CMS](https://tina.io) 3 — opcional, via `/admin` |
| Linguagem | TypeScript                                             |
| Markdown  | `gray-matter` + `marked`                               |
| Pacotes   | pnpm                                                   |

## Pré-requisitos

- **Node.js** >= 22.12.0
- **pnpm** — instalado globalmente (`npm i -g pnpm`)

## Comandos

| Comando           | Ação                                            |
| ----------------- | ----------------------------------------------- |
| `pnpm dev`        | Dev server Astro em `localhost:4321`            |
| `pnpm build`      | Build estático para `dist/`                     |
| `pnpm preview`    | Preview do build local                          |
| `pnpm tina:dev`   | Tina CMS + Astro (precisa de `.env`)            |
| `pnpm tina:build` | Build do Tina CMS + Astro                       |
| `pnpm astro`      | CLI do Astro (`astro add`, `astro check`, etc.) |

## Como contribuir

Contribuições são bem-vindas! Veja o [`CONTRIBUTING.md`](CONTRIBUTING.md) para instruções detalhadas.

**Forma de contribuir:**

1. **Pull Request** — faça um fork, edite os arquivos em `content/verbetes/` e envie um PR

## Estrutura do projeto

```bash
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
