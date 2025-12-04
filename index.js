const express = require('express');
const studentsRoute = require('./routes/studentsRoute');
const teachersRoute = require('./routes/teachersRoute');
const coursesRoute = require('./routes/coursesRoute');
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./connection/db');
const routes = require('./routes/index')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.use('/', routes);

app.use('/api/students', studentsRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/courses', coursesRoute);


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});