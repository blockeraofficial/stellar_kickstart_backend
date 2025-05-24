const cors = require("cors");

const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4000",
  "https://www.rocplatform.online",
  "https://stellar-kickstart-proof-of-concept.onrender.com",
  "https://stellar-kickstart-backend.onrender.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    const isDev = process.env.NODE_ENV !== "production";

  console.log("Look at the origin:", origin)

    // Allow whitelisted origins or undefined in development
    if (whiteList.includes(origin) || (isDev && !origin)) {
      console.log("Incoming origin:", origin || "undefined (allowed in dev)");
      callback(null, true);
    } else {
      console.log("Incoming origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  optionsSuccessStatus: 200,
};

const myCorsPolicy = () => cors(corsOptions);

module.exports = { myCorsPolicy };
