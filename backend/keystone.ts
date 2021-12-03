import "dotenv/config";
import { config } from "@keystone-6/core";

import { withAuth, session } from "./auth";

import { User } from "./schemas/User";
import { Catalogue } from "./schemas/Catalogue";
import { CatalogueItem } from "./schemas/CatalogueItem";
import { Technology } from "./schemas/Technology";
import { Page } from "./schemas/Page";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL!,
    },
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL!],
        credentials: false,
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      User,
      Catalogue,
      CatalogueItem,
      Technology,
      Page,
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
