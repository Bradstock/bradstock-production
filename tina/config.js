import { defineConfig } from "tinacms";
import { blocks_pageFields } from "./templates";
import { buttonFields } from "./templates";
import { columnFields } from "./templates";
import { draftFields } from "./templates";
import { galleryFields } from "./templates";
import { heroFields } from "./templates";
import { home_heroFields } from "./templates";
import { iframeFields } from "./templates";
import { imageFields } from "./templates";
import { main_menuFields } from "./templates";
import { page_background_imageFields } from "./templates";
import { pageFields } from "./templates";
import { postFields } from "./templates";
import { site_configFields } from "./templates";
import { sub_1_menuFields } from "./templates";
import { sub_2_menuFields } from "./templates";
import { tableFields } from "./templates";
import { tagFields } from "./templates";
import { text_and_imageFields } from "./templates";
import { text_areaFields } from "./templates";
import { title_buttonFields } from "./templates";
import { two_columnFields } from "./templates";
import { videoFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f97b75a4-6ef9-4736-9848-aefc47e17151", // Get this from tina.io
  token: "e5a117d0385e6c9077924aebb10f40e9a96ca5e9", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "src/pages",
        match: {
          include: "*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...pageFields(),
            ],
            label: "page",
            name: "page",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...blocks_pageFields(),
            ],
            label: "blocks-page",
            name: "blocks_page",
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "src/pages/posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "json",
        label: "Nav Menu",
        name: "nav_menu",
        path: "src/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "main_menu",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Sub Menu 1",
        name: "sub_menu_1",
        path: "src/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "sub_1_menu",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Sub Menu 2",
        name: "sub_menu_2",
        path: "src/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "sub_2_menu",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Site Config",
        name: "site_config",
        // "."
        path: "",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
