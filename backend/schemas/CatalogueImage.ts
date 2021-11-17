import { list } from "@keystone-next/keystone";
import { relationship, text } from "@keystone-next/keystone/fields";

export const CatalogueImage = list({
  fields: {
    altText: text(),
    catalogue: relationship({ ref: "Catalogue.photo" }),
  },
});
