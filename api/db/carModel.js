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
module.exports = db.model('car', carSchema);