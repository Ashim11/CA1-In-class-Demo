var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true});
var connection = mongoose.connection;

if (!connection) {
  console.log('Error connecting db');
}
else {
  console.log('Connected');
}

module.exports = mongoose;