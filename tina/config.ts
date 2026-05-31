import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "verbetes",
        label: "Verbetes",
        path: "content/verbetes",
        format: "md",
        fields: [
          {
            type: "string",
            name: "abreviacao",
            label: "Abreviação",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "significado",
            label: "Significado por extenso",
            required: true,
          },
          {
            type: "rich-text",
            name: "explicacao",
            label: "Explicação em Português",
            required: true,
          },
          {
            type: "string",
            name: "exemplo",
            label: "Exemplo de uso",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "categoria",
            label: "Categoria",
            options: ["comunicacao", "reuniao", "tecnologia", "slang", "geral"],
            required: true,
          },
          {
            type: "string",
            name: "contribuidor",
            label: "Contribuidor (opcional)",
          },
        ],
      },
    ],
  },
});
