export function blocks_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "template",
      label: "Template",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Blocks",
      name: "blocks",
      templates: [
        {
          fields: heroFields(),
          label: "Hero",
          name: "hero",
        },
        {
          fields: home_heroFields(),
          label: "Home Hero",
          name: "home_hero",
          nameOverride: "home-hero",
        },
        {
          fields: text_and_imageFields(),
          label: "Text And Image",
          name: "text_and_image",
          nameOverride: "text-and-image",
        },
        {
          fields: tableFields(),
          label: "Table",
          name: "table",
        },
        {
          fields: two_columnFields(),
          label: "Two Column",
          name: "two_column",
          nameOverride: "two-column",
        },
        {
          fields: title_buttonFields(),
          label: "Title Button",
          name: "title_button",
          nameOverride: "title-button",
        },
        {
          fields: text_areaFields(),
          label: "Text Area",
          name: "text_area",
          nameOverride: "text-area",
        },
        {
          fields: imageFields(),
          label: "Image",
          name: "image",
        },
        {
          fields: iframeFields(),
          label: "Iframe",
          name: "iframe",
        },
        {
          fields: galleryFields(),
          label: "Gallery",
          name: "gallery",
        },
        {
          fields: buttonFields(),
          label: "Button",
          name: "button",
        },
        {
          fields: tagFields(),
          label: "Tag",
          name: "tag",
        },
        {
          fields: videoFields(),
          label: "Video",
          name: "video",
        },
        {
          fields: page_background_imageFields(),
          label: "Page Background Image",
          name: "page_background_image",
          nameOverride: "page-background-image",
        },
      ],
    },
  ];
}
export function buttonFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "string",
          name: "button_type",
          label: "Button Type",
          options: ["Internal", "External"],
          required: true,
        },
      ],
    },
  ];
}
export function columnFields() {
  return [
    {
      type: "boolean",
      name: "show_image",
      label: "Show Image",
    },
    {
      type: "image",
      name: "col_image",
      label: "Col Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Alt",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function draftFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
  ];
}
export function galleryFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "object",
      name: "gallery_field_group",
      label: "Gallery Field Group",
      list: true,
      fields: [
        {
          type: "image",
          name: "gallery_image",
          label: "Gallery Image",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "image_info",
          label: "Image Info",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "boolean",
          name: "logo",
          label: "Logo",
        },
        {
          type: "string",
          name: "logo_name",
          label: "Logo Name",
        },
        {
          type: "string",
          name: "logo_url",
          label: "Logo URL",
        },
      ],
    },
  ];
}
export function heroFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "background_image",
      label: "Background Image",
    },
  ];
}
export function home_heroFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "image",
      name: "home_logo_image",
      label: "Home Logo Image",
    },
    {
      type: "image",
      name: "home_background_image",
      label: "Home Background Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Image Alt",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "text_area",
      label: "Text Area",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "string",
          name: "button_type",
          label: "Button Type",
          options: ["Internal", "External"],
          required: true,
        },
      ],
    },
  ];
}
export function iframeFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      required: true,
    },
    {
      type: "string",
      name: "iframe_height",
      label: "Iframe Height",
      required: true,
    },
  ];
}
export function imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "position",
      label: "Position",
      options: ["Center", "Left", "Right"],
      required: true,
    },
    {
      type: "string",
      name: "image_center_width",
      label: "Center Width",
      options: ["N/A", "25%", "50%", "75%", "Verticle"],
    },
    {
      type: "string",
      name: "alt",
      label: "Alt",
      required: true,
    },
  ];
}
export function main_menuFields() {
  return [
    {
      type: "object",
      name: "main_menu",
      label: "Main menu",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "Url",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["internal", "external"],
        },
      ],
    },
  ];
}
export function page_background_imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "image",
      name: "page_background_image",
      label: "Page Background Image",
    },
  ];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "meta",
      label: "Meta",
      fields: [
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "string",
          name: "keywords",
          label: "keywords",
        },
      ],
    },
  ];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
  ];
}
export function site_configFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["internal", "external"],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "footer",
      label: "Footer",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function sub_1_menuFields() {
  return [
    {
      type: "object",
      name: "sub_1_menu",
      label: "Sub 1 menu",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "Url",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["internal", "external"],
          required: true,
        },
        {
          type: "string",
          name: "text_color",
          label: "Text Color",
          options: [
            "text-cyan-600",
            "text-emerald-600",
            "text-lime-500",
            "text-yellow-500",
            "text-pink-600",
            "text-rose-700",
            "text-amber-500",
          ],
          required: true,
        },
      ],
    },
  ];
}
export function sub_2_menuFields() {
  return [
    {
      type: "object",
      name: "sub_2_menu",
      label: "Sub 2 menu",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "Url",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["internal", "external"],
          required: true,
        },
      ],
    },
  ];
}
export function tableFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "col1",
      label: "Column 1",
      fields: [...columnFields()],
    },
    {
      type: "object",
      name: "col2",
      label: "Column 2",
      fields: [...columnFields()],
    },
    {
      type: "object",
      name: "col3",
      label: "Column 3",
      fields: [...columnFields()],
    },
  ];
}
export function tagFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "tag",
      label: "Tag",
      required: true,
    },
  ];
}
export function text_and_imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "boolean",
      name: "icon",
      label: "Icon",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "text_center",
      label: "Text Center",
    },
    {
      type: "image",
      name: "tai_image",
      label: "TaI Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Alt",
      required: true,
    },
    {
      type: "string",
      name: "background",
      label: "Background",
      options: ["transparent", "primary", "dark", "light"],
    },
    {
      type: "string",
      name: "orientation",
      label: "Orientation",
      options: ["Image Left", "Image Right"],
    },
  ];
}
export function text_areaFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "text_area",
      label: "Text Area",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "boolean",
      name: "text_center",
      label: "Text Center",
    },
  ];
}
export function title_buttonFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "background",
      label: "Background",
      options: ["transparent", "primary", "dark", "light"],
    },
    {
      type: "object",
      name: "button",
      label: "Button",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "string",
          name: "button_type",
          label: "Button Type",
          options: ["Internal", "External"],
          required: true,
        },
      ],
    },
  ];
}
export function two_columnFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "col1",
      label: "Column 1",
      fields: [...columnFields()],
    },
    {
      type: "object",
      name: "col2",
      label: "Column 2",
      fields: [...columnFields()],
    },
  ];
}
export function videoFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      required: true,
    },
    {
      type: "string",
      name: "orientation",
      label: "Orientation",
      options: ["Vertical", "Horizontal"],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
  ];
}
