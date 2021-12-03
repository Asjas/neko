import { list } from "@keystone-6/core";
import { text, password, checkbox } from "@keystone-6/core/fields";

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: {
        isRequired: true,
        match: {
          regex: /(pienaar)\w+/gi,
          explanation: "Email must match pienaarconsulting.co.za or pienaarpartners.co.za",
        },
      },
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    isAdmin: checkbox(),
  },
  ui: {
    listView: {
      initialColumns: ["name", "email", "isAdmin"],
    },
  },
});
