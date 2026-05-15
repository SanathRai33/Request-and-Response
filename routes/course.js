const express = require("express");

const router = express.Router();

const courses = [
  {
    id: 1,
    name: "Frontend",
    description: "HTML, CSS, JS, React"
  },
  {
    id: 2,
    name: "Backend",
    description: "Node.js, Express, MongoDB"
  }
];


// GET /coirses
router.get("/courses", (req, res) => {
  const courseNames = courses.map(course => course.name);
  res.send(`Courses: ${courseNames.join(", ")}`);
});


// GET /courses/:id
router.get("/courses/:id", (req, res) => {

  const courseId = parseInt(req.params.id);
  const course = courses.find(
    course => course.id === courseId
  );

  if (!course) {
    return res.send("Course not found");
  }
  res.send(
    `Course: ${course.name}, Description: ${course.description}`
  );
});


module.exports = router;