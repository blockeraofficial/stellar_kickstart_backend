const morgan = require("morgan")

morgan.token("date", () => {
  return new Date().toISOString()
})
const logger = () => {
  return morgan("dev")
}

module.exports = { logger }
