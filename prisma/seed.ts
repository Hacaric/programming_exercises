import { config } from "dotenv";
config();

import { ActivityTagType, PrismaClient } from "../generated/prisma/client";
import { error } from "console";
import { LOREM_IPSUM } from "~/app/utils";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Seeding aborted.");
}

const prisma = new PrismaClient();
console.log("Starting seed.ts");

async function main() {
    console.log("Start seeding...");

    if ((await prisma.activity.findMany()).length) {
        throw error(
            `\nERROR: Database is not empty, refusing to seed. Try running 'npm run db:reset' to reset database.\n`,
        );
    }

    await prisma.activityTag.createMany({
        data: [
            {
                name: "Vĺčatá a včielky",
                tagColor: "#ffff00",
                type: ActivityTagType.AGE_GROUP,
            },
            {
                name: "Skauti",
                tagColor: "#00bb00",
                type: ActivityTagType.AGE_GROUP,
            },
            {
                name: "Rangeri",
                tagColor: "#40008f",
                type: ActivityTagType.AGE_GROUP,
            },
            {
                name: "Roveri",
                tagColor: "#ff0909",
                type: ActivityTagType.AGE_GROUP,
            },
            {
                name: "Old skauti",
                tagColor: "#0963ff",
                type: ActivityTagType.AGE_GROUP,
            },
        ],
    });
    await prisma.activityTag.createMany({
        data: [
            {
                name: "Na von",
                tagColor: "#009300",
                type: ActivityTagType.ENVIROMENT,
            },
            {
                name: "Na vnútro",
                tagColor: "#474747",
                type: ActivityTagType.ENVIROMENT,
            },
        ],
    });
    await prisma.activityTag.createMany({
        data: [
            {
                name: "Žiadna príprava",
                tagColor: "#004500",
                type: ActivityTagType.PREPARATION,
            },
            {
                name: "Jednoduchá príprava",
                tagColor: "#0ea3ff",
                type: ActivityTagType.PREPARATION,
            },
            {
                name: "Zložitá príprava",
                tagColor: "#800000",
                type: ActivityTagType.PREPARATION,
            },
        ],
    });
    await prisma.activityTag.createMany({
        data: [
            {
                name: "Hra",
                tagColor: "#9f00a7",
                type: ActivityTagType.ACITIVITY_TYPE,
            },
            {
                name: "Duchovno",
                tagColor: "#7777b0",
                type: ActivityTagType.ACITIVITY_TYPE,
            },
            {
                name: "Zručnosti",
                tagColor: "#1b6c00",
                type: ActivityTagType.ACITIVITY_TYPE,
            },
        ],
    });

    // Fetch created tag references to get their generated IDs
    // const ageGroup = await prisma.activityAgeGroup.findFirst({
    //   where: { name: 'Skauti' },
    // })
    // const environment = await prisma.activityEnviroment.findFirst({
    //   where: { name: 'Na von' },
    // })
    // const preparation = await prisma.activityPreparation.findFirst({
    //   where: { name: 'Žiadna príprava' },
    // })
    // const type = await prisma.activityType.findFirst({
    //   where: { name: 'Hra' },
    // })

    // Ensure a creator user exists
    const user = await prisma.user.upsert({
        where: { id: "admin" },
        update: {},
        create: {
            id: "admin",
            name: "admin",
            email: "example@exaple.com",
        },
    });

    // Create Activity with related activityProperites
    await prisma.activity.create({
        data: {
            name: "Sever proti juhu",
            description: "Sever proti juhu je hra, ktorá ...",
            createdBy: {
                connect: { id: user.id },
            },
            properties: {
                create: {
                    minDurationMinutes: 15,
                    maxDurationMinutes: 45,
                    neededItems: "2 Lopty",
                    tags: {
                        connect: [
                            { name: "Skauti" },
                            { name: "Na von" },
                            { name: "Jednoduchá príprava" },
                            { name: "Hra" },
                        ],
                    },
                },
            },
        },
    });
    await prisma.activity.create({
        data: {
            name: "Avalon",
            description: `Avalon je hra, ktorá je super! Raz som ju hral a povedal som si: ${LOREM_IPSUM}`,
            createdBy: {
                connect: { id: user.id },
            },
            properties: {
                create: {
                    minDurationMinutes: 20,
                    maxDurationMinutes: 120,
                    neededItems: "Stolová hra 'Avalon: The resistance'",
                    tags: {
                        connect: [
                            { name: "Skauti" },
                            { name: "Rangeri" },
                            { name: "Na vnútro" },
                            { name: "Jednoduchá príprava" },
                            { name: "Hra" },
                        ],
                    },
                },
            },
        },
    });
    await prisma.activity.create({
        data: {
            name: "Ahoj ako sa máš",
            description: `Ahoj ako sa máš je aktivita, ktorá sa hodí na začiatok družinovky. ${LOREM_IPSUM}`,
            createdBy: {
                connect: { id: user.id },
            },
            properties: {
                create: {
                    minDurationMinutes: 5,
                    maxDurationMinutes: 15,
                    tags: {
                        connect: [
                            { name: "Skauti" },
                            { name: "Rangeri" },
                            { name: "Na vnútro" },
                            { name: "Jednoduchá príprava" },
                            { name: "Hra" },
                        ],
                    },
                },
            },
        },
    });
    console.log("Seeding finished.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
