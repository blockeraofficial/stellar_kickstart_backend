const express = require("express");
const router = express.Router();
const { contractController } = require("../controllers");
const { errorCatcher } = require("../errors");
// const { authorize } = require("../middlewares");

router.get(
  "/token-prices",
  // authorize,
  errorCatcher(contractController.getTokenPrices)
);
router.get(
  "/properties",
  // authorize,
  errorCatcher(contractController.getProperties)
);

module.exports = router;
