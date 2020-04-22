var model = require('../db/carModel');
var mongoose = require('mongoose');

exports.index = function(req, res) {
  model.get(function(err, cars) {
    if (err) {
      res.json({
        status: "Error",
        message: err
      });
    }
    else {
      res.json({
        status: "Success",
        message: "Cars delivered",
        data: cars
      });
    }
  });
};
// Handle create 
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

exports.delete = function(req, res) {
  model.deleteOne({_id: req.params.carId}, function(err) {
    if (!err) {
      res.json({
        type: "success"
      })
    }
  });
}
exports.update = function (req, res) {
  model.findByIdAndUpdate({_id: req.params.carId}, {name: req.body.name}, function(err, result) {
    if (!err) {
      res.json({
        type:"success"
      });
    }
  });
};