const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri = 'mongodb+srv://jonasdev:Teste.10@cluster0.tpmmdls.mongodb.net/?retryWrites=true&w=majority'
  

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('full-stack-server');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };