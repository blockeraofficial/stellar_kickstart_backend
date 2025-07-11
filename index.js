const express = require("express");
const path = require("path");

const { PORT, HOSTNAME } = require("./constants");
// const { connect_database } = require("./models");
const {
  logger,
  limiter,
  helmet,
  compression,
  myCorsPolicy,
} = require("./middlewares");
const { welcome, errorHandler, routeNotFound } = require("./errors");

const routes = require("./routes");

const port = process.env.PORT || PORT;
const host = process.env.HOSTNAME || HOSTNAME;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger());
app.use(helmet());
app.use(myCorsPolicy());
app.use(compression());
app.use(limiter());

app.all("/", welcome);
app.use("/api/", routes);

app.use(errorHandler);
app.use(routeNotFound);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`ROC API IS RUNNING AT http://${host}:${port}`);
  // connect_database()
  
});
