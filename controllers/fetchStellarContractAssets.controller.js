const axios = require("axios");
const { sendResponse } = require("../utils");


const {
  API_STELLAR_EXPERT
} = require("../constants");

const getFetchStellarContractAssets = async (req, res) => {
  try {
    const response = await axios.get(
      `${API_STELLAR_EXPERT}/value`
    );

    return sendResponse(res, "success", 200, "Fetch Assets", response.data.trustlines);

  } catch (error) {
    
    return sendResponse(res, "error", 500, "Something went wrong");

  }
};

module.exports = {
  getFetchStellarContractAssets,
};
