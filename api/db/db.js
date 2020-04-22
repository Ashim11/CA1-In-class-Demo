var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:test123@cluster0-ogrlq.mongodb.net/test?retryWrites=true&w=majority/cars', { useNewUrlParser: true});
var connection = mongoose.connection;

if (!connection) {
  console.log('Error connecting db');
}
else {
  console.log('Connected');
}

module.exports = mongoose;