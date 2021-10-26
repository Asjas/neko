import { createAuth } from "@keystone-next/auth";
import { statelessSessions } from "@keystone-next/keystone/session";

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("The SESSION_SECRET environment variable must be set in production");
  } else {
    sessionSecret =
      "a1230213jsadhDIUOSAHD1234842346ASDLKJ12309214690123UIASd23802180213LASDKHuasld12380123-gfsASDHJvDSKL";
  }
}

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

export { withAuth, session };
