import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const SocialMediaIcon = list({
  fields: {
    name: text({ label: "Social Media Name", validation: { isRequired: true } }),
    url: text({ label: "Social Media URL", validation: { isRequired: true } }),
  },
});
