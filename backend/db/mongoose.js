const mongoose = require('mongoose');
const { dbConnecString } = require('../config')
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || dbConnecString);

module.exports = {
  mongoose
}