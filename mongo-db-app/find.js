
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://my-new-user:GAWTJzwatdDzC3mZ@techof.0l1vepo.mongodb.net/?retryWrites=true&w=majority&appName=TechOf";

const DATABASE_NAME = "techof-mongodb-class-fs2024";
const COLLECTION_NAME = "person";

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
    await client.connect();

    const db = client.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const result = await db
      .find({ 'interest': { '$size': 2 } })
      .sort({ firstName: -1 })
      .limit(1)
      .toArray();
    console.log(result)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
