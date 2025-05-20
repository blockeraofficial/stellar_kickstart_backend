const rateLimit = require("express-rate-limit");
const { EXPRESS_RATE_LIMITER } = require("../constants");

const limiter = () => {
  return rateLimit({
    windowMs: EXPRESS_RATE_LIMITER.MINUTES * 60 * 1000,
    max: EXPRESS_RATE_LIMITER.API_CALLS,
    message:
      "Too many api calls from this IP within short period of time, please try again after an hour",
  });
};

module.exports = { limiter };
