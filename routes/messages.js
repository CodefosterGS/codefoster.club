let express = require('express');
let router = express.Router();
let messages = require('../services/messagesService');

router.get('/', function (req, res, next) {
  messages.getAllMessages((data) => res.json(data));
});

router.get('/:id', function (req, res, next) {
  let messageId = req.params.id;
  messages.getMessage(messageId, (data) => res.json(data));
});

router.post('/', function (req, res, next) {
  let message = req.body;
  messages.saveMessage(message, (data) => res.json(data));
});

module.exports = router;
