import { prisma } from "lib/prisma";
import * as readline from "node:readline/promises";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { exit } from "node:process";
import { error } from "node:console";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const answer = await rl.question(
    "This will write to database with prisma. Continue? [y/n] ",
);
switch (answer.toLowerCase()) {
    case "y":
        console.log("Continuing...");
        break;
    default:
        rl.close();
        exit("Abort");
        break;
}

let name: string | undefined = await rl.question("Enter source file name: ");
if (!name) {
    console.error("Invalid filename");
    exit(1);
}

const content = await readFile(path.join(import.meta.dirname, name), "utf-8");
const content_json = JSON.parse(content);
if (!Array.isArray(content_json)) {
    throw new Error(
        "Invalid JSON input: should be {[key: string]: string}[], didn't get an array",
    );
}

interface ActivityInitData {
    name: string;
    description: string;
    rules: string;
    neededItems: string;
    minDurationMinutes: number | null;
    maxDurationMinutes: number;
    createdById: string;
    tags: { connect: { name: string }[] };
}

const REQUIRED_FIELDS = [
    "name",
    "time",
    "type",
    "type2",
    "age",
    "age2",
    "preparation",
    "env",
    "env2",
    "env3",
    "env4",
    "env5",
    "description",
];
const TAG_FIELDS = [
    "type",
    "type2",
    "age",
    "age2",
    "preparation",
    "env",
    "env2",
    "env3",
    "env4",
    "env5",
];

const prisma_create_promises = content_json.map((element, i) => {
    //DEBUG
    if (i != 0) return Promise<void>;

    if (!REQUIRED_FIELDS.every((key) => Object.keys(element).includes(key))) {
        throw new Error(
            `Invalid format: element ${JSON.stringify(element)} is missing one or more required keys: ${JSON.stringify(REQUIRED_FIELDS.filter((key) => Object.keys(element).includes(key)))}`,
        );
    }

    if (element.time.includes(":")) element.time = element.time.split(":")[1];
    element.maxDurationMinutes = Number(element.time);
    if (isNaN(element.maxDurationMinutes))
        throw error(
            `Field 'time' of activity named '${element.name}' is not a valid number. Halting without writing to database.`,
        );

    // element.age = Number(element.age);
    // if (isNaN(element.age))
    //     throw error(`Field 'age' of activity named '${element.name}' is not a valid number. Halting without writing to database.`);

    // if (element.age2 != '') {
    //     element.age2 = Number(element.age2);
    //     if (isNaN(element.age2))
    //         throw error(`Field 'age2' of activity named '${element.name}' is not a valid number. Halting without writing to the database. (To ignore this value leave it empty instead of non-numeric value.)`);
    // }

    let TAGS: string[] = [];
    TAG_FIELDS.forEach((tag) => {
        if (element[tag] != "") TAGS.push(element[tag]);
    });

    let DB_ACTIVITY_DATA: ActivityInitData = {
        name: element.name,
        description: element.description,
        rules: element.rules,
        neededItems: element.neededItems,
        minDurationMinutes: element.minDurationMinutes,
        maxDurationMinutes: element.maxDurationMinutes,
        createdById: "system",
        tags: {
            connect: TAGS.filter((t) => t != "").map((t) => ({ name: t })),
        },
    };

    console.log(`DATA: ${JSON.stringify(DB_ACTIVITY_DATA)}`);
    return prisma.activity.create({
        data: DB_ACTIVITY_DATA,
    });
});

await Promise.all(prisma_create_promises);
