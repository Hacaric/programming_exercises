// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "lib/prisma"; // Adjust path to your prisma client
import { username } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // Change to "mysql", "sqlite", etc. depending on your DB
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    username({
      displayUsername: false, // Matches your client setup
    }),
  ],
});
