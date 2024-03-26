const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'recipe_db';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('subscriber');

  // the following code examples can be pasted here...
  const query = { name: "Freddie" };
  const user = await collection.findOne(query);
  console.log("Found: " + user.name);

  const users = collection.find();
  var i = 0;
  for await (const doc of users) {
      i++;
      console.log("Found: "+ i);
      console.dir(doc.name);
    }

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());