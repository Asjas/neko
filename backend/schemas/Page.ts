import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const Page = list({
  fields: {
    name: text({ label: "Page Name", validation: { isRequired: true } }),
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
  },
  ui: {},
});
