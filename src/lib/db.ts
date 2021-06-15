import mongodb from "mongodb";
const { MongoClient } = mongodb;

const pass = process.env["DB_PASSWORD"];
const uri = "mongodb+srv://ppplastic_app:7PPdd48OPnjUeQX5@cluster0.4yp1e.mongodb.net/questionaire?retryWrites=true&w=majority";

export function getClient() {
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}
