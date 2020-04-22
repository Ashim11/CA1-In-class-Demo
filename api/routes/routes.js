var router = require('express').Router();

//We define the root of our website and render index.html located inside the views folder
router.get('/', function(req, res) {
  res.render('index');
});

var carController = require('../controller/car');

router.route('/api/cars')
.get(carController.index)
.post(carController.new);

router.route('/api/cars/:carId')
.put(carController.update)
.delete(carController.delete);

module.exports = router;