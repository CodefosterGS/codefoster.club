let Member = require('../models/Member');

let membersService = {};

membersService.getMember = function (id, callback) {
  Member.findOne({_id: id}, function (err, existingMember) {
    if (err) {
      callback({status: false, message: err});
    } else if (existingMember) {
      callback({status: true, message: existingMember});
    } else {
      callback({status: false, message: 'Member not found'});
    }
  });
};

membersService.getAllMembers = function (callback) {
  Member.find({}, function (err, existingMembers) {
    if (err) {
      callback({status: false, message: err});
    } else if (existingMembers.length == 0) {
      callback({status: false, message: 'No Members.'});
    } else {
      callback({status: true, message: existingMembers});
    }
  });
};

membersService.saveMember = function (member, callback) {
  let nMember = new Member(member);
  nMember.save(member, function (err, newMember) {
    if (err) {
      callback({status: false, message: err});
    } else {
      callback({status: true, message: newMember});
    }
  });
};

module.exports = membersService;
