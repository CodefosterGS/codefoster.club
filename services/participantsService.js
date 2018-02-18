let Participant = require('../models/Participant');

let participantsService = {};

participantsService.getParticipant = function (id, callback) {
  Participant.findOne({_id: id}, function (err, existingParticipant) {
    if (err) {
      callback({status: false, message: err});
    } else if (existingParticipant) {
      callback({status: true, message: existingParticipant});
    } else {
      callback({status: false, message: 'Participant not found'});
    }
  });
};

participantsService.getAllParticipants = function (callback) {
  Participant.find({}, function (err, existingParticipants) {
    if (err) {
      callback({status: false, message: err});
    } else if (existingParticipants.length == 0 ) {
      callback({status: false, message: 'No Participants.'});
    } else {
      callback({status: true, message: existingParticipants});
    }
  });
};

participantsService.saveParticipant = function (participant, callback) {
  let nParticipant = new Participant(participant);
  nParticipant.save(participant, function (err, newParticipant) {
    if (err) {
      callback({status: false, message: err});
    } else {
      callback({status: true, message: newParticipant});
    }
  });
};

module.exports = participantsService;
