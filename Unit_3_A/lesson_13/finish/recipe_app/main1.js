// March 2024
// main1.js
// uses the MongoDB 7.0.7, Node V. 20.10.0
// and the node.js driver with mongodb@6.5.0
//
const { MongoClient } = require("mongodb");

// The URI is also claaed a "connection string.""
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
//Notice that we need to add the keyword "async" 
// at the beginning of a function in which 
// an asynchronous actions, such as file save, file update,
// or even wait for a connection to be establish.
// Basically, the asynchronous activity is converted to 
// a synchronous activity. But it was just at the time
// the activity cannot move on without completion.
// Otherwise, VSC will underline the first letter with three dots
// to signify that the action of await has no 
// effect.
async function run() {
  try {
    const database = client.db('recipe_db');
    
    var subscribers = database.collection('subscriber');

    var user = await subscribers.insertOne({
        name: "Freddie",
        zipCode: "19001"
    });

    console.log(user);

    user = await subscribers.insertOne({
      name: "Mary",
      zipCode: "19201"
    });

    console.log(user);
    
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);