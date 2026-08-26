import { config } from "dotenv";
config();

import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Please check your .env file.");
}

const prisma = new PrismaClient();

export { prisma };
