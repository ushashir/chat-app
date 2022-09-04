const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://usha:5KLsPuAXp9fUS9f4@cluster0.fcyyjyl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



