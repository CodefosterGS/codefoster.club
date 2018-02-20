let Message = require('../models/Message');

let messagesService = {};

messagesService.getMessage = function (id, callback) {
  Message.findOne({
    _id: id,
  }, function (err, existingMessage) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else if (existingMessage) {
      callback({
        status: true,
        message: existingMessage,
      });
    } else {
      callback({
        status: false,
        message: 'Message not found',
      });
    }
  });
};

messagesService.getAllMessages = function (callback) {
  Message.find({}, function (err, existingMessages) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else if (existingMessages.length == 0) {
      callback({
        status: false,
        message: 'No Messages.',
      });
    } else {
      callback({
        status: true,
        message: existingMessages,
      });
    }
  });
};

messagesService.saveMessage = function (message, callback) {
  let nMessage = new Message(message);
  nMessage.save(message, function (err, newMessage) {
    if (err) {
      callback({
        status: false,
        message: err,
      });
    } else {
      callback({
        status: true,
        message: newMessage,
      });
    }
  });
};

module.exports = messagesService;
