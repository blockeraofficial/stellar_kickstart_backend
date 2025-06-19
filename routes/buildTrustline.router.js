const express = require("express");
const router = express.Router();
const { establishTrustlineController } = require("../controllers");
const { errorCatcher } = require("../errors");

router.get(
  "/build-trustline",
  // authorize,
  errorCatcher(establishTrustlineController.getEstablishTrustline)
);

module.exports = router;
