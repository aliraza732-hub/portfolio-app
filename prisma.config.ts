import "dotenv/config"; 
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DIRECT_URL for Prisma CLI operations (db push/migrate/studio).
    // Runtime queries in the app are configured via the Adapter in `lib/prisma.ts`.
    url: env("DIRECT_URL"),
  },
});