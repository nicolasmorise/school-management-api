const express = require('express');
const routes = require('./routes/index')

const studentsRoute = require('./routes/studentsRoute');
const teachersRoute = require('./routes/teachersRoute');
const coursesRoute = require('./routes/coursesRoute');
const staffRoute = require('./routes/staffRoute');

const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
const mongodb = require('./connection/db');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use('/api/students', studentsRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/staff', staffRoute);

// Generic routes — must be LAST
app.use('/', routes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
