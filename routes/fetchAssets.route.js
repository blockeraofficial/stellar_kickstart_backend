const express = require("express");
const router = express.Router();
const { fetchStellarAssetsController } = require("../controllers");
const { errorCatcher } = require("../errors");

router.get(
  "/assets",
  // authorize,
  errorCatcher(fetchStellarAssetsController.getFetchStellarAssets)
);

module.exports = router;
