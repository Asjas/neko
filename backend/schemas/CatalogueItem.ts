import { list } from "@keystone-next/keystone";
import { text, image, relationship } from "@keystone-next/keystone/fields";

export const CatalogueItem = list({
  fields: {
    name: text({ label: "Catalogue Item Name", validation: { isRequired: true } }),
    image: image({ label: "Catalogue Item Image" }),
    martiniImageLink: text({ label: "Martini Image Link", validation: { isRequired: true } }),
    catalogue: relationship({
      ref: "Catalogue.catalogueItem",
      many: false,
    }),
  },
});
