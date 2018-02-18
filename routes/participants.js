let express = require('express');
let router = express.Router();
let participants = require('../services/participantsService');

router.get('/', function (req, res, next) {
  participants.getAllParticipants((data)=>res.json(data));
});

router.get('/:id', function (req, res, next) {
  let participantId = req.params.id;
  participants.getParticipant(participantId, (data)=>res.json(data));
});

router.post('/', function (req, res, next) {
  let participant = req.body;
  participants.saveParticipant(participant, (data)=>res.json(data));
});


module.exports = router;
