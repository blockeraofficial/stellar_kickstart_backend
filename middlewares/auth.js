const { ROC_API_KEY } = require("../constants");
const { sendResponse } = require("../utils");

const authorize = () => {
  return async (req, res, next) => {
    try {
      const bearerHeader = req.headers["authorization"];
      if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        if (!bearerToken) {
          return sendResponse(res, "error", 401, "User unauthorized");
        }
        if (bearerToken !== ROC_API_KEY) {
          return sendResponse(res, "error", 401, "User unauthorized");
        }
        next();
      } else {
        return sendResponse(res, "error", 401, "User unauthorized");
      }
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { authorize };
