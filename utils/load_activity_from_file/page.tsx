"use client"
import { useState } from "react"
import { UploadDataFile } from "./actions"

function getCollumnNames(file_content: string){
    // if (!file_content?.length){
    //     return []
    // }
    // const file = await file_content[0]?.text();
    // if (!file){
    //     return [];
    // }
    alert(`Got file: ${file_content}`)
    return file_content.split('\n')[0]?.split(',').map((e)=>e.trim())
}

function isValidJSON(text: string) {
    try {
        JSON.parse(text);
        return true;
    } catch (e) {
        return false;
    }
}

const databaseFields = {name: 'string', description: 'string', rules: 'string', neededItems: 'string', minDuration: 'string', maxDuration: 'string', TAG_age_group: 'array', TAG_activity_type: 'array', TAG_preparation: 'array', TAG_enviroment: 'array'}

export default function Upload() {
    const [file, setFile] = useState<string>('');
    const [mapping, setMapping] = useState<string>('');
    const [mappingValidity, setMappingValidity] = useState<{valid: boolean, message: string}|null>(null);


    async function handleSubmit(formData: FormData) {
        const response = await UploadDataFile(formData) ?? 'Success!'
        alert(`Server responded: ${response}`)
    }

    return <div className="border-black border-2 rounded-xl p-5 justify-center">
        <div className="text-xl bolder">Upload .csv file</div>
        <form action={async(formData)=>{await handleSubmit(formData)}}>
            <input 
                className="my-5 border-2 border-black rounded-md p-2"
                type="file" 
                name="file" 
                id="fileupload"
                accept="*.csv"
                onChange={async (e)=>{
                    if (!e.target.files?.length) {return}
                    const content = await e.target.files[0]?.text() ?? ''
                    setFile(content)
                    setMapping(
                        `# THIS LINE IS IGNORED, YOUR COLLUMN NAMES: ${getCollumnNames(content)?.join(',') ?? 'error loading names'}\n${
                            JSON.stringify(
                                Object.fromEntries(
                                    Object.entries(databaseFields)
                                    .map(([key, val_type]) => val_type == 'string' ? [key, ''] : [key, []])
                                )
                            )
                        }`
                    )
                }}
                // value={file}
            />
            {
                file && <div>
                    <h3>Map collumn names to database</h3>
                    <textarea 
                        name="mapping" 
                        id="mapping_input" 
                        value={mapping}
                        onChange={(e)=>{
                            const content = e.target.value;
                            setMapping(content);
                            let json_part: string|string[] = content.split('\n')
                            json_part.splice(0, 1);
                            json_part = json_part.join('');
                            if (!isValidJSON(json_part)) {
                                setMappingValidity({valid: false, message: 'Invalid JSON'});
                            } else {
                                setMappingValidity({valid: true, message: ''})
                            }
                        }}
                        className="w-full field-sizing-content"
                        >   
                        </textarea>
                    {!mappingValidity?.valid && <p className="bold text-sm text-red-600">{mappingValidity?.message}</p>}
                </div>
            }
            <br />
            <button type="submit" className={`bg-black text-white px-2 py-1 rounded-md `} style={{cursor: (mappingValidity?.valid ?? false) ? 'pointer' : 'not-allowed'}} disabled={!(mappingValidity?.valid ?? false)}>Submit</button>
        </form>
    </div>
}
