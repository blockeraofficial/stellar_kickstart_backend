const express = require("express");
const router = express.Router();
const { fetchStellarContractAssetsController } = require("../controllers");
const { errorCatcher } = require("../errors");

router.get(
  "/contract-assets",
  // authorize,
  errorCatcher(fetchStellarContractAssetsController.getFetchStellarContractAssets)
);

module.exports = router;
