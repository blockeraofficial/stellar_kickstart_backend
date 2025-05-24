const axios = require("axios");
const { sendResponse } = require("../utils");

const {
  STELLAR_RPC_URL,
  STELLAR_ASSET_CODE,
  STELLAR_ASSET_ISSUER,
  STELLAR_EXAMLE_CONNECTED_ACCOUNT_PUBLIC_KEY
} = require("../constants");

const getEstablishTrustline= async (req, res) => {
  try {
    const response = await axios.get(
      `${STELLAR_RPC_URL}/accounts/${STELLAR_EXAMLE_CONNECTED_ACCOUNT_PUBLIC_KEY}`
    );

    const data = response.data.balances;

    return sendResponse(res, "success", 200, "Fetch Assets", data);
  } catch (error) {
    return sendResponse(res, "error", 500, "Something went wrong");
  }
};

module.exports = {
  getFetchStellarAssets,
};
