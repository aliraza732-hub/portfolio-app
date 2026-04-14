import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString =
  process.env.DATABASE_URL ?? process.env.DIRECT_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL (or DIRECT_URL) is not set.");
}

const adapter = new PrismaPg({ connectionString });

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;