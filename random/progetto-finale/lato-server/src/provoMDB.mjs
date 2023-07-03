import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_SECOND_URI;

const client = new MongoClient(uri);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export async function main() {
    // we'll add code here soon
    try {
        await client.connect();
    
        await listDatabases(client);
    
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
 }

