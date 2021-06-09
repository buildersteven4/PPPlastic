import { getClient } from "$lib/db";
import type { EndpointOutput, Request } from "@sveltejs/kit";


export async function post(req: Request) : Promise<EndpointOutput> {
    let client = getClient();

    try {
        await client.connect();
        const database = client.db("questionaire");
        const answers = database.collection("answers");

        // create a document to be inserted
        const doc = req.body;
        const result = await answers.insertOne(doc);

        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
    } finally {
        await client.close();
    }
    
    return {
        body: "",
        status: 200
    };
}