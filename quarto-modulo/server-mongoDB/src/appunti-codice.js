// step 1 primo codice da prendere da mongodb // serve per la configurazione e il primo collegamento

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Salvo:<password>@salvodb.9bd10a5.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
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
run().catch(console.dir);


// step 2 secondo codice da copiare nel file mongo serve per inserire documento
async function run() {
    try {
      const database = client.db("insertDB");
      const haiku = database.collection("haiku");
      // create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }
      const result = await haiku.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }

  // step tre accedere alle risorse https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/