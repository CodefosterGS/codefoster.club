let Event = require('../models/Event');

let eventsService = {};

eventsService.getEvent = function (id, callback) {
  Event.findOne({
    _id: id,
  }, function (err, existingEvent) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else if (existingEvent) {
      callback({
        status: true,
        message: existingEvent,
      });
    } else {
      callback({
        status: false,
        message: 'Event not found',
      });
    }
  });
};

eventsService.getAllEvents = function (callback) {
  Event.find({}, function (err, existingEvents) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else if (existingEvents.length == 0) {
      callback({
        status: false,
        message: 'No events.',
      });
    } else {
      callback({
        status: true,
        message: existingEvents,
      });
    }
  });
};

eventsService.saveEvent = function (event, callback) {
  let nEvent = new Event(event);
  nEvent.save(event, function (err, newEvent) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else {
      callback({
        status: true,
        message: newEvent,
      });
    }
  });
};

eventsService.getFeatured = function (callback) {
  Event.find({
    featured: true,
  }, function (err, existingEvents) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else if (existingEvents.length == 0) {
      callback({
        status: false,
        message: 'No events.',
      });
    } else {
      callback({
        status: true,
        message: existingEvents,
      });
    }
  });
};

eventsService.updateEvent = function (event, callback) {
  Event.findByIdAndUpdate(event._id, {
    '$set': event,
  }, {
    new: true,
  }, function (err, updatedEvent) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else {
      callback({
        status: 'true',
        message: updatedEvent,
      });
    }
  });
};

eventsService.deleteEvent = function (id, callback) {
  Event.findByIdAndRemove(id, function (err, deletedEvent) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else {
      callback({
        status: 'true',
        message: deletedEvent,
      });
    }
  });
};

module.exports = eventsService;
