const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'School Management API',
    description: 'API for managing Teachers, Students, Courses, and Staff collections'
  },
  host: 'localhost:3000',
  schemes: ['http'],

  // ============================
  // 📘 SCHEMAS (Teacher + Student + Course + Staff)
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
    },
    
    Course: {
      courseId: 301,
      name: "Environmental Studies: Climate & Sustainability",
      code: "ENV120",
      credits: 3,
      department: "Science",
      isActive: true,
      maxStudents: 28,
      schedule: {
        day: "Tuesday",
        startTime: "11:00",
        endTime: "13:00"
      },
      prerequisites: [101, 202]
    },

    Staff: {
      staffId: 105,
      firstName: "Verónica",
      lastName: "Hernández",
      email: "veronica.hernandez@school.edu",
      phone: "+57 318 770 6655",
      role: "Registrar",
      department: "Academic Records",
      hireDate: "2022-11-01",
      status: "active"
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = [
  './routes/index.js',
  './routes/teachersRoute.js',
  './routes/studentsRoute.js',
  './routes/coursesRoute.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);
