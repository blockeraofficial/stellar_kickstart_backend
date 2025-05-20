const { Auction } = require("../models");
const { sendResponse } = require("../utils");

const getAuctions = async (req, res) => {
  const auctions = await Auction.find({});
  return sendResponse(res, "success", 200, "Auction List", auctions);
};

module.exports = {
  getAuctions,
};
