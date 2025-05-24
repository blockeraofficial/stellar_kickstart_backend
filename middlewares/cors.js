const cors = require("cors");

// const whiteList = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://localhost:4000",
//   "https://www.rocplatform.online",
//   "https://stellar-kickstart-proof-of-concept.onrender.com",
//   "https://stellar-kickstart-backend.onrender.com",
// ];
// 
// const corsOptions = {
//   origin: function (origin, callback) {
//     const isDev = process.env.NODE_ENV !== "production";
// 
//     if (!origin && isDev) {
//       // Allow requests with no origin in dev (e.g., Postman, CLI)
//       return callback(null, true);
//     }
// 
//     if (whiteList.includes(origin)) {
//       return callback(null, true);
//     }
// 
//     console.log("❌ Blocked CORS Origin:", origin);
//     return callback(new Error("Not allowed by CORS"));
//   },
//   credentials: true,
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//   optionsSuccessStatus: 200,
// };

const myCorsPolicy = () => cors()

module.exports = { myCorsPolicy };