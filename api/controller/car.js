var model = require('../db/carModel');
var mongoose = require('mongoose');
var car = new model();

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
  car.name = req.body.name ? req.body.name : car.name;
  car.type = req.body.type;
  car.price = req.body.price;

// save the car and check for errors
  car.save(function (err) {
      if (err)
          res.json(err);
      else 
        res.json({type: "success"});
  });
};

exports.delete = function(req, res) {
  car.remove({_id: req.params.carId}, function(err) {
    if (!err) {
      res.json({
        type: "success"
      })
    }
  });
}
exports.update = function (req, res) {
  car.findById(req.params.carId, function (err, car) {
      if (err)
          res.send(err);
      car.name = req.body.name ? req.body.name : car.name;
      car.type = req.body.type;
      car.price = req.body.price;
      car.save(function (err) {
          if (err)
              res.json(err);
          res.json({
              message: 'Car updated',
              data: car
          });
      });
    });
  };