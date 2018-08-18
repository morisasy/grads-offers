const { Client } = require("pg");
const connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: 'grads-offers-node',
  password: 'adile49',
  port: 5432,
};
const client = new Client(connectionString);


client.connect();

module.exports = client;
