
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

    const monica = {
      firstName: 'Monica Many',
      lastName: 'Souza',
      age: 12,
      gender: 'female',
      interest: ['rabbit', 'watermelon'], 
      isStudent: false
    };

    const magali = {
      firstName: 'Magali Many',
      lastName: 'Souza',
      age: 12,
      gender: 'female',
      interest: ['rabbit', 'food', 'yellow'], 
      isStudent: false
    };

    await db.insertMany([
      monica,
    ])
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
