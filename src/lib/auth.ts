import { PrismaClient, } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// Prisma Client
const prisma = new PrismaClient();

// Better Auth Setup
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // Supported: "postgresql", "mysql", etc.
  }),
       emailAndPassword: { 
    enabled: true, 
  },
});
