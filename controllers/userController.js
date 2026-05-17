const {
  sendResponse
} = require("../utils/response");


const getAllUsers = (req, res, next) => {

  try {

    const users = [
      "Alice",
      "Bob"
    ];

    sendResponse(res, users);

  } catch (err) {

    next(err);

  }

};


const getUserById = (req, res, next) => {

  try {

    const id = req.params.id;

    if (id > 5) {

      const error = new Error(
        "User not found"
      );

      error.statusCode = 404;

      throw error;

    }

    sendResponse(
      res,
      `Fetching user with ID: ${id}`
    );

  } catch (err) {

    next(err);

  }

};


const addUser = (req, res, next) => {

  try {

    sendResponse(
      res,
      "Adding a new user",
      201
    );

  } catch (err) {

    next(err);

  }

};


module.exports = {
  getAllUsers,
  getUserById,
  addUser
};