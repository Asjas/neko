import "dotenv/config";
import { config } from "@keystone-next/keystone";

import { withAuth, session } from "./auth";

import { User } from "./schemas/User";
import { Catalogue } from "./schemas/Catalogue";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL!,
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      User,
      Catalogue,
    },
    images: {
      upload: "local",
      local: {
        storagePath: "public/images",
        baseUrl: "/images",
      },
    },
    session,
  }),
);
