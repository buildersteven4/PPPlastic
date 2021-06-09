import mongodb from "mongodb";
const { MongoClient } = mongodb;

const uri = "mongodb+srv://ppplastic_app:Cq3Dip5Jm9KYlVwI@cluster0.4yp1e.mongodb.net/questionaire?retryWrites=true&w=majority";

export function getClient() {
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}
