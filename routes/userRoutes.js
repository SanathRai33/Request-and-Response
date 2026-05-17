const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  addUser
} = require("../controllers/userController");


router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/users", addUser);


module.exports = router;