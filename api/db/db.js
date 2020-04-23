var mongoose = require('mongoose');
var config = require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ogrlq.mongodb.net/test?retryWrites=true&w=majority/${process.env.DB_COLLECTION}`, { useNewUrlParser: true});
var connection = mongoose.connection;

if (!connection) {
  console.log('Error connecting db');
}
else {
  console.log('Connected');
}

module.exports = mongoose;