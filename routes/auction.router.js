const express = require("express");
const router = express.Router();
const { auctionController } = require("../controllers");
const { errorCatcher } = require("../errors");

router.get("/auctions", errorCatcher(auctionController.getAuctions));

module.exports = router;
