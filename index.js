const express = require('express');
const studentsRoute = require('./routes/studentsRoute');
const teachersRoute = require('./routes/teachersRoute');
const coursesRoute = require('./routes/coursesRoute');
const staffRoute = require('./routes/staffRoute')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./connection/db');
const routes = require('./routes/index')
const authRoutes = require('./routes/authRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const errorhandler = require('./middleware/errorhandler')
const passport = require("passport")
const session = require('express-session');

require("./auth/github");

app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set true only if using HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.use('/', routes);

app.use('/api/students', studentsRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/staff', staffRoute);

app.use(errorhandler.errorHandler);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});