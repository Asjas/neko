import { list } from "@keystone-next/keystone";
import { text, relationship, image } from "@keystone-next/keystone/fields";

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
