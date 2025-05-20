const cors = require("cors");

const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4000",
  "https://www.rocplatform.online"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  optionsSuccessStatus: 200,
};

const myCorsPolicy = () => cors(corsOptions);

module.exports = { myCorsPolicy };
