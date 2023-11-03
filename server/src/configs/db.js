
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
 mongoose.connect(
  "mongodb://127.0.0.1:27017/Quiz"
  )
}
