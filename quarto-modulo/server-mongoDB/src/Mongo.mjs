// dal sito di mongo db si copia questo codice, poi ci saranno delle modifiche
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGO_SECOND_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function run() { // esportiamo la funzione che servira altrove questa esportazione e un aggiunta
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function insertUser(user) {// funzione che serve per inserire documento nel data base
  try {
    await client.connect();
    const database = client.db(process.env.NAME_DB_MONGO); // riferimento al nome database dato in sede di registrazione a mongodb
    const usersCollection = database.collection("users"); // fa riferimento ad una collection da creare su interfacciagrafica di mongodb

    const result = await usersCollection.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch(error) {
    console.log(error); // qui da gestire lerrore quando abbiamo un eccezione dal DB, nell'esercizio abbiamo impostato un id univoco associato allusername, se si manda una post con username uguale da errore

  } finally {
    await client.close();
  }
}

export async function fechUsers() {

  try {
    await client.connect();
    const database = client.db(process.env.NAME_DB_MONGO); // riferimento al nome database dato in sede di registrazione a mongodb
    const usersCollection = database.collection("users");

    const findUsers = await usersCollection.find().toArray()
    // for await (const doc of cursor) {
    //   console.dir(doc);
    // }
    console.log(findUsers);
    return findUsers
    
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
  
}
