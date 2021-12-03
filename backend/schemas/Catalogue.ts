import { list } from "@keystone-6/core";
import { text, relationship, image } from "@keystone-6/core/fields";

export const Catalogue = list({
  fields: {
    name: text({ label: "Catalogue Name", validation: { isRequired: true } }),
    image: image({ label: "Catalogue Image" }),
    catalogueItem: relationship({
      ref: "CatalogueItem.catalogue",
      many: true,
    }),
  },
});
