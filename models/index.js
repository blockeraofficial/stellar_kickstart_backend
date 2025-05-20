const mongoose = require("mongoose");
const { DATABASE_URL } = require("../constants");

const Auction = require("./Auction");

const connect_database = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      return console.log(`DATABASE CONNECTION SUCCESSFUL !`);
    })
    .catch((error) => {
      console.log("Error connecting to database: ", error.message);
      return process.exit(1);
    });
};

module.exports = {
  connect_database,
  Auction,
};
