import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const Technology = list({
  fields: {
    field1_heading: text({ label: "Field 1 Heading", validation: { isRequired: true } }),
    field1_content: text({ label: "Field 1 Content", validation: { isRequired: true } }),
    field2_heading: text({ label: "Field 2 Heading", validation: { isRequired: true } }),
    field2_content: text({ label: "Field 2 Content", validation: { isRequired: true } }),
    field3_heading: text({ label: "Field 3 Heading", validation: { isRequired: true } }),
    field3_content: text({ label: "Field 3 Content", validation: { isRequired: true } }),
    field4_heading: text({ label: "Field 4 Heading", validation: { isRequired: true } }),
    field4_content: text({ label: "Field 4 Content", validation: { isRequired: true } }),
  },
});
