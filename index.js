const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./connection/db');
const routes = require('./routes/index')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', routes);


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});