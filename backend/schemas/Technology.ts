import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const Technology = list({
  fields: {
    field1: text({ label: "Field 1", validation: { isRequired: true } }),
    field2: text({ label: "Field 2", validation: { isRequired: true } }),
    field3: text({ label: "Field 3", validation: { isRequired: true } }),
    field4: text({ label: "Field 4", validation: { isRequired: true } }),
  },
});
