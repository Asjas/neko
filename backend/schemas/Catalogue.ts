import { list } from "@keystone-next/keystone";
import { text, relationship } from "@keystone-next/keystone/fields";

export const Catalogue = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    catalogueItem: relationship({
      ref: "Catalogue.catalogueItem",
      many: true,
    }),
  },
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
});
