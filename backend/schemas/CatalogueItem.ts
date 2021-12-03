import { list } from "@keystone-6/core";
import { text, relationship, image } from "@keystone-6/core/fields";

export const CatalogueItem = list({
  fields: {
    name: text({ label: "Catalogue Item Name", validation: { isRequired: true } }),
    responsiveImageLink: text({ label: "Responsive Image Link", validation: { isRequired: true } }),
    martiniImageLink: text({ label: "Spin Image Link", validation: { isRequired: true } }),
    catalogue: relationship({
      ref: "Catalogue.catalogueItem",
      many: false,
    }),
  },
});
