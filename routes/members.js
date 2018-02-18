let express = require('express');
let router = express.Router();
let members = require('../services/membersService');

router.get('/', function (req, res, next) {
  members.getAllMembers((data)=>res.json(data));
});

router.get('/:id', function (req, res, next) {
  let memberId = req.params.id;
  members.getMember(memberId, (data)=>res.json(data));
});

router.post('/', function (req, res, next) {
  let member = req.body;
  members.saveMember(member, (data)=>res.json(data));
});


module.exports = router;
