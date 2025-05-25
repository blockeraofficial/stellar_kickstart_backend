const cors = require("cors")

const whiteList = ["http://localhost:3000", "http://localhost:3001", "https://stellar-kickstart-proof-of-concept.onrender.com/"]

const corsOptions = {
  // origin: whiteList,
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: true,
  optionsSuccessStatus: 200,
}

const myCorsPolicy = () => cors(corsOptions)

module.exports = { myCorsPolicy }