var db = require('./db');

// Setup schema
var carSchema = db.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true
    }
});
// Export Car model
var car = module.exports = db.model('car', carSchema);
module.exports.get = function (callback, limit) {
  try {
    car.find(callback).limit(limit);
  }
  catch(err) {
    console.log(err);
  }
}