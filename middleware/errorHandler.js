const {
  sendErrorResponse
} = require("../utils/response");


const errorHandler = (
  err,
  req,
  res,
  next
) => {

  console.log(err);

  sendErrorResponse(
    res,
    err.message || "Internal Server Error",
    err.statusCode || 500
  );

};


module.exports = errorHandler;