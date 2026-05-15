const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];


// GET /students
router.get("/students", (req, res) => {
  const studentNames = students.map(student => student.name);
  res.send(`Students: ${studentNames.join(", ")}`);
});


// GET /students/:id
router.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(
    student => student.id === studentId
  );

  if (!student) {
    return res.send("Student not found");
  }
  res.send(`Student: ${student.name}`);
});


module.exports = router;