import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { exit } from "node:process";
import * as readline from "node:readline/promises";

export function csvToJson(
    csvString: string,
): { [key: string]: string }[] | null {
    const SEPARATOR = "\0";

    let output = "";
    let opened_quotes: boolean = false;
    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
        if (char == '"') {
            if (opened_quotes) {
                // if (i+1 < cvs_content.length && cvs_content[i+1] == '"') {
                //     i += 2;
                //     output += '"';
                //     continue;
                // }
                opened_quotes = false;
            } else {
                opened_quotes = true;
            }
        } else if (char == "\n" && opened_quotes) {
            continue;
        } else if (char == "," && !opened_quotes) {
            output += "\0";
            continue;
        }
        output += char;
    }

    csvString = output;

    const rows = csvString?.split("\n");

    const collumn_names = rows[0]?.split(SEPARATOR);
    if (!collumn_names) {
        return null;
    }

    const jsonData = [];
    for (let line_i = 1; line_i < rows.length; line_i++) {
        const values = rows[line_i]?.split(SEPARATOR);
        if (!values) {
            return null;
        }

        const activity_properties: { [key: string]: string } = {};

        for (let value_i = 0; value_i < collumn_names!.length; value_i++) {
            const key = collumn_names[value_i]!.trim();
            const value = values[value_i]!.trim();

            activity_properties[key] = value;
        }

        jsonData.push(activity_properties);
    }
    return jsonData;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const name = await rl.question("Enter source file name: ");
if (!name) {
    exit("Invalid filename");
}

const content = await readFile(path.join(import.meta.dirname, name), "utf-8");
const content_parsed = csvToJson(content);

console.log("Paring done.");
const output_name = await rl.question(
    "Enter output file name or leave empty to print to stdout: ",
);
if (!output_name) console.log(JSON.stringify(content_parsed));
else {
    await writeFile(
        path.join(import.meta.dirname, output_name),
        JSON.stringify(content_parsed),
        "utf-8",
    );
    console.log("Done writing to file.");
}

// Somehow this is needed
exit(0);
