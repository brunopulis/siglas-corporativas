# Dicionário Informal — Repo Guide

## Setup & dev

- Package manager: **pnpm** (not npm).
- Node >= 22.12.0 (see `engines` in `package.json`).
- `pnpm dev` — Astro dev server at `localhost:4321`.
- `pnpm tina:dev` — Tina CMS admin + Astro together (needs `.env` with `TINA_CLIENT_ID` / `TINA_TOKEN` / `TINA_BRANCH`; copy `.env.example`).
- `pnpm build` — static build to `dist/`.
- No test, lint, or typecheck commands exist. No CI workflows.

## Content

All entries live as **markdown files** in `content/verbetes/` with YAML frontmatter:

```yaml
---
abreviacao: "ASAP"           # required, title
significado: "As Soon As Possible"
explicacao: "..."            # required, rich-text (Markdown)
exemplo: "..."               # required, plain text
categoria: "comunicacao"     # required, one of: comunicacao, reuniao, tecnologia, slang, geral
contribuidor: "Nome"         # optional
---
```

Just add/edit `.md` files here — no database. Rebuild (`pnpm build`) to regenerate static pages.

## Architecture

- **Astro 6** with `output: 'static'` (SSG). All routes generated at build time.
- Pages: `/` (search grid), `/[slug]` (detail — uses `getStaticPaths`), `/categorias`, `/contribuir`.
- Content read at build time via `fs.readdirSync` from `content/verbetes/` — no Astro content collections.
- Path alias `@/*` → `src/*` (configured in `tsconfig.json`).
- Client-side search in `SearchBar.astro` filters by `data-search` attribute.
- The `slugify` function is duplicated in `index.astro` and `[slug].astro`.

## Generated & ignored

- `.astro/` — Astro generated types (gitignored).
- `tina/__generated__/` and `public/admin/` — Tina CMS generated (gitignored).
