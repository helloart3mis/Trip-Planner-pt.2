var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.hotel;
var Restaurant = models.restaurant;
var Activity = models.activity;
var Place = models.place;

router.get('/attractions', function(req, res, next) {
   Promise.all([
    Hotel.findAll({
      include: [Place]
    }),
    Restaurant.findAll({
      include: [Place]
    }),
    Activity.findAll({
      include: [Place]
    })])
  .then(function(result) {
    res.json(result)
  }).catch(next)
})


module.exports = router;
