import { list } from "@keystone-next/keystone";
import { text, relationship } from "@keystone-next/keystone/fields";

export const CatalogueItem = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    catalogue: relationship({
      ref: "Catalogue.catalogueItem",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
});
