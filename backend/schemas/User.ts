import { list } from "@keystone-next/keystone";
import { text, relationship, password } from "@keystone-next/keystone/fields";

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
});
