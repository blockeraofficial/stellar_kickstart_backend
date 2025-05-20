const { sendResponse } = require("../utils");

const routeNotFound = (req, res) => {
  console.log("Error = > Route Not Found");
  return sendResponse(res, "error", 404, "Route Not Found");
};

const welcome = (req, res, next) => {
  return sendResponse(res, "success", 200, "Welcome To ROC Backend API");
};

const errorHandler = (error, req, res, next) => {
  console.log("Error Name", error);
  switch (error.name) {
    case "MongoServerError": // Or MongoError
      if (error.code === 11000) {
        const field = Object.keys(error.keyValue)[0];
        const message = field.toUpperCase() + " has already in use";
        console.log("Error = > ", message);
        return sendResponse(res, "fail", 409, message);
      }
      break;
    default:
      break;
  }
  const status = error.status || 500;
  return sendResponse(res, "error", status, error.message);
};

const errorCatcher = (controller) => {
  return (req, res, next) => {
    Promise.resolve(controller(req, res, next).catch(next));
  };
};

module.exports = {
  routeNotFound,
  errorHandler,
  errorCatcher,
  welcome,
};
