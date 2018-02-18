let express = require('express');
let router = express.Router();
let events = require('../services/eventsService');

router.get('/', function (req, res, next) {
  events.getAllEvents((data)=>res.json(data));
});

router.get('/featured', function (req, res, next) {
  events.getFeatured((data) => res.json(data));
});

router.get('/:id', function (req, res, next) {
  let eventId = req.params.id;
  events.getEvent(eventId, (data)=>res.json(data));
});

router.post('/', function (req, res, next) {
  let event = req.body;
  events.saveEvent(event, (data)=>res.json(data));
});


module.exports = router;
