"use server"
import { randomUUID } from "crypto";
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { csvToJson } from "./parse_cvs";


export async function UploadDataFile(formData: FormData) {
    const file = formData.get("file") as File;
    if (!file) {
        return 'Error: Parameter "file" is missing or not a file.'
    }
    if (!file.name.endsWith('.csv')) {
        return 'Error: File must be .csv'
    }
    const content = await file.text();
    const content_json = csvToJson(content);
    if (!content_json) {
        return 'Failed to parse cvs file to JSON. Check your structure and try again.'
    }
    const uniqueName = `upload_${randomUUID()}.csv`;
    
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, uniqueName), content);

}

