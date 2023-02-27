const express = require('express');
const { CityController, FlightController , AirportController} = require('../../controllers');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id?', CityController.get);
router.patch('/city/:id', CityController.update);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.get);

router.post("/airports", AirportController.create);
module.exports = router;