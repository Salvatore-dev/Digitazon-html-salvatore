// dal sito di mongo db si copia questo codice, poi ci saranno delle modifiche
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_SECOND_URI;

const collection = process.env.MONGODB_SECOND_NAME_COLLECTION

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

export async function findKeyword(keyTofind) {
  try {
    await client.connect();
    const database = client.db(collection);
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
    return keyword;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await client.close();
  }
}

export async function insertChapters(chapter) {
  // funzione che serve per inserire documento nel data base
  try {
    await client.connect();
    const database = client.db(collection); // riferimento al nome database dato in sede di registrazione a mongodb
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
    const database = client.db(collection);
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
    return chapter;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await client.close();
  }
}

export async function insertUser(user) {
  // funzione che serve per inserire documento nel data base
  try {
    await client.connect();
    const database = client.db(collection); // riferimento al nome database dato in sede di registrazione a mongodb
    const usersCollection = database.collection("users"); // fa riferimento ad una collection da creare su interfacciagrafica di mongodb

    const result = await usersCollection.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error); // qui da gestire lerrore quando abbiamo un eccezione dal DB, nell'esercizio abbiamo impostato un id univoco associato allusername, se si manda una post con username uguale da errore
  } finally {
    await client.close();
  }
}

export async function findUser(usernameToFind) {
  try {
    await client.connect();
    const database = client.db(collection);
    const chapters = database.collection("users");
    const query = { username: usernameToFind };
    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    const user = await chapters.findOne(query); //options (secondo paramentro, possibile per ordinare la ricerca)
    // since this method returns the matched document, not a cursor, print it directly
    //console.log(keyword);
    return user;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await client.close();
  }
}

export async function upDateFavorite(userToUpdate, insertNewData ) {
  try {
    await client.connect();
    const database = client.db(collection);
    const users = database.collection("users");
    // create a filter for a movie to update
    const filter = { username: userToUpdate };
    //console.log(users);
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: false };
    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        favoriteVerses: insertNewData
      },
    };
    const result = await users.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } catch(error){
    console.log(error);
  }
   finally {
    await client.close();
  }
}
