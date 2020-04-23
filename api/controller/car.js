var model = require('../db/carModel');
var mongoose = require('mongoose');

//Logic for reading all cars
exports.index = function(req, res) {
 model.find().then(function(data){
   res.json(data);
 });
}
// //Logic for creating a new car
exports.new = function (req, res) {
  var car = new model();
  car.name = req.body.name ? req.body.name : car.name;
  car.type = req.body.type;
  car.price = req.body.price;

  model.create(car, function(err) {
    if (err) {
      res.json(err);
    }
    else {
      res.json({type: "success"});
    }
  });
};
// //Logic for deleting a car
exports.delete = function(req, res) {
  model.deleteOne({_id: req.params.carId}, function(err) {
  });
  res.json({
    type: "success"
  });
}
// //Logic for updateing a car
exports.update = function (req, res) {
  model.findByIdAndUpdate({_id: req.params.carId}, {name: req.body.name}, function(err, result) {
  });
  res.json({
    type:"success"
  });
};