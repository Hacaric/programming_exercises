import { config } from "dotenv";
config();

import { PrismaClient } from "../generated/prisma/client";
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

    await prisma.activityAgeGroup.createMany({
        data: [
            { name: "Vĺčatá a včielky", tagColor: "#ffff00" },
            { name: "Skauti", tagColor: "#00bb00" },
            { name: "Rangeri", tagColor: "#40008f" },
            { name: "Roveri", tagColor: "#ff0909" },
            { name: "Old skauti", tagColor: "#0963ff" },
        ],
    });
    await prisma.activityEnviroment.createMany({
        data: [
            { name: "Na von", tagColor: "#009300" },
            { name: "Na vnútro", tagColor: "#474747" },
        ],
    });
    await prisma.activityPreparation.createMany({
        data: [
            { name: "Žiadna príprava", tagColor: "#004500" },
            { name: "Jednoduchá príprava", tagColor: "#0ea3ff" },
            { name: "Zložitá príprava", tagColor: "#800000" },
        ],
    });
    await prisma.activityType.createMany({
        data: [
            { name: "Hra", tagColor: "#9f00a7" },
            { name: "Duchovno", tagColor: "#7777b0" },
            { name: "Zručnosti", tagColor: "#1b6c00" },
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

    // Create Activity with related ActivityTags
    await prisma.activity.create({
        data: {
            name: "Sever proti juhu",
            description: "Sever proti juhu je hra, ktorá ...",
            createdBy: {
                connect: { id: user.id },
            },
            neededItems: "2 Lopty",
            durationMinutes: 10,
            activityTags: {
                create: {
                    ageGroups: {
                        connect: [{ name: "Skauti" }],
                    },
                    enviroments: {
                        connect: [{ name: "Na von" }],
                    },
                    preparation: {
                        connect: [{ name: "Jednoduchá príprava" }],
                    },
                    activityType: {
                        connect: [{ name: "Hra" }],
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
            neededItems: "Hra Avalon",
            durationMinutes: 45,
            activityTags: {
                create: {
                    ageGroups: {
                        connect: [{ name: "Skauti" }, { name: "Rangeri" }],
                    },
                    enviroments: {
                        connect: [{ name: "Na vnútro" }],
                    },
                    preparation: {
                        connect: [{ name: "Jednoduchá príprava" }],
                    },
                    activityType: {
                        connect: [{ name: "Hra" }],
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
            durationMinutes: 10,
            activityTags: {
                create: {
                    ageGroups: {
                        connect: [{ name: "Skauti" }, { name: "Rangeri" }],
                    },
                    enviroments: {
                        connect: [{ name: "Na vnútro" }],
                    },
                    preparation: {
                        connect: [{ name: "Jednoduchá príprava" }],
                    },
                    activityType: {
                        connect: [{ name: "Hra" }],
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
