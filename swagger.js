const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'School Management API',
    description: 'API for managing Teachers and Students collections'
  },
  host: 'localhost:3000',
  schemes: ['http'],

// ============================
  // 📘 SCHEMAS (Teacher + Student)
  // ============================
  definitions: {
    Teacher: {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      subject: "Mathematics",
      yearsOfExperience: 10,
      email: "john.doe@testemail.com",
      isFullTime: true
    },

    Student: {
      firstName: "Andrés",
      lastName: "Castillo",
      age: 16,
      grade: 11,
      email: "andres.castillo@student.edu",
      enrolled: true,
      gpa: 3.8,
      homeroomTeacher: "Ms. Smith"
    }
  } 
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './routes/teachersRoute.js', './routes/studentsRoute.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
