const { default: axios } = require("axios");
const { sendResponse } = require("../utils");
const {
  COINGECKO_URL,
  ALCHEMY_API_KEY,
  ROC_SEPOLIO_CONTRACT_ADDRESS,
} = require("../constants");
const { Alchemy, Network } = require("alchemy-sdk");

const getTokenPrices = async (req, res) => {
  try {
    const response = await axios.get(COINGECKO_URL);
    const data = {
      roc: "0.07$",
      matic:
        `${
          response.data.find((item) => item.id === "matic-network")
            .current_price
        }$` || "0$",
      usdt:
        `${response.data.find((item) => item.id === "tether").current_price}$` ||
        "0$",
      bitcoin:
        `${response.data.find((item) => item.id === "bitcoin").current_price}$` ||
        "0$",
    };
    return sendResponse(res, "success", 200, "Token Price List", data);
  } catch (error) {
    return sendResponse(res, "error", 500, "Something went wrong");
  }
};

const getProperties = async (req, res) => {
  try {
    const config = {
      network: Network.ETH_SEPOLIA, // Replace with your network
    };
    const headers = {
      Authorization: `Bearer ${ALCHEMY_API_KEY}`,
    };
    const alchemy = new Alchemy(config);
    const response = await alchemy.nft.getNftsForContract(
      ROC_SEPOLIO_CONTRACT_ADDRESS,
      {
        headers: headers,
      }
    );
    return sendResponse(res, "success", 200, "Property List", response);
  } catch (error) {
    console.log("error", error.message);
    return sendResponse(res, "error", 500, "Something went wrong");
  }
};

module.exports = {
  getTokenPrices,
  getProperties,
};
