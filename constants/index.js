require("dotenv").config();

module.exports = {
  NAME: process.env.NAME,
  PORT: process.env.PORT,
  HOSTNAME: process.env.HOSTNAME,
  DATABASE_URL: process.env.MONGO_DB_URL,
  COINGECKO_URL:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1",
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  ROC_SEPOLIO_CONTRACT_ADDRESS: process.env.ROC_SEPOLIO_CONTRACT_ADDRESS,
  STELLAR_RPC_URL: process.env.STELLAR_RPC_URL,
  STELLAR_EXAMPLE_CONNECTED_ACCOUNT_PUBLIC_KEY: process.env.STELLAR_EXAMPLE_CONNECTED_ACCOUNT_PUBLIC_KEY,
  API_STELLAR_EXPERT: process.env.API_STELLAR_EXPERT,
  ROC_API_KEY: "ABCD1234",
  EXPRESS_RATE_LIMITER: {
    MINUTES: 1,
    API_CALLS: 20,
  },
};
