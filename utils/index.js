const { getReasonPhrase } = require("http-status-codes");
const { Types, isValidObjectId } = require("mongoose");

const sendResponse = (response, type, code, message, data = null) => {
  response.status(code).json({
    status: type,
    code: code,
    statusMessage: getReasonPhrase(code),
    message: message,
    result: data,
  });
};

const castToMongoID = (ID) => {
  return new Types.ObjectId(ID);
};

const isMongoID = (ID) => {
  return isValidObjectId(ID);
};

const isEmpty = (value) => {
  return typeof value == "undefined" ||
    value === undefined ||
    value == null ||
    value.length <= 0
    ? true
    : false;
};

const validationError = (errors) => {
  const errorMessage = errors.details[0].message;
  return errorMessage.split('"').join("");
};

module.exports = {
  sendResponse,
  isMongoID,
  isEmpty,
  castToMongoID,
  validationError,
};
