// dal sito di mongo db si copia questo codice, poi ci saranno delle modifiche
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_SECOND_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function run() {
  // esportiamo la funzione che servira altrove questa esportazione e un aggiunta
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function insertKeyword(keyword) {
  // funzione che serve per inserire documento nel data base
  try {
    await client.connect();
    const database = client.db("BibleAppDB"); // riferimento al nome database dato in sede di registrazione a mongodb
    const usersCollection = database.collection("searchKeywords"); // fa riferimento ad una collection da creare su interfacciagrafica di mongodb

    const result = await usersCollection.insertOne(keyword);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
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

    const findUsers = await usersCollection.find().toArray();
    // for await (const doc of cursor) {
    //   console.dir(doc);
    // }
    console.log(findUsers);
    return findUsers;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export async function findKeyword(keyTofind) {
  try {
    await client.connect();
    const database = client.db("BibleAppDB");
    const keywords = database.collection("searchKeywords");
    // Query for a movie that has the title 'The Room'
    const query = { keyword: keyTofind };
    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    const keyword = await keywords.findOne(query); //options (secondo paramentro, possibile per ordinare la ricerca)
    // since this method returns the matched document, not a cursor, print it directly
    //console.log(keyword);
    return keyword
  } catch (error) {
    console.log(error);
    return false
  } finally {
    await client.close();
  }
}

export async function insertChapters(chapter) {
  // funzione che serve per inserire documento nel data base
  try {
    await client.connect();
    const database = client.db("BibleAppDB"); // riferimento al nome database dato in sede di registrazione a mongodb
    const usersCollection = database.collection("chapters"); // fa riferimento ad una collection da creare su interfacciagrafica di mongodb

    const result = await usersCollection.insertOne(chapter);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error); // qui da gestire lerrore quando abbiamo un eccezione dal DB, nell'esercizio abbiamo impostato un id univoco associato allusername, se si manda una post con username uguale da errore
  } finally {
    await client.close();
  }
}

export async function findChapter(chapterTofind) {
  try {
    await client.connect();
    const database = client.db("BibleAppDB");
    const chapters = database.collection("chapters");
    const query = { chapter: chapterTofind };
    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    const chapter = await chapters.findOne(query); //options (secondo paramentro, possibile per ordinare la ricerca)
    // since this method returns the matched document, not a cursor, print it directly
    //console.log(keyword);
    return chapter
  } catch (error) {
    console.log(error);
    return false
  } finally {
    await client.close();
  }
}
