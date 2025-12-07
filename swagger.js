const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'School Management API',
    description: 'API for managing students, teachers, staff, and courses in a school system',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
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
    Teacher: {
      firstName: "Sofia",
      lastName: "Martínez",
      age: 31,
      subject: "Computer Science",
      yearsOfExperience: 7,
      email: "sofia.martinez@school.edu",
      isFullTime: true
    },
    Staff: {
      staffId: "STF-145",
      firstName: "Ricardo",
      lastName: "Mejía",
      email: "ricardo.mejia@school.edu",
      phone: "+57 315 998 2201",
      role: "Senior Counselor",
      department: "Student Services",
      hireDate: "2019-08-21",
      status: "active"
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
      prerequisites: []
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = [
  './routes/index.js',
  './routes/studentsRoute.js',
  './routes/teachersRoute.js',
  './routes/staffRoute.js',
  './routes/coursesRoute.js'

];

swaggerAutogen(outputFile, endpointsFiles, doc);
