let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let participantSchema = new Schema({
  name: String,
  contact: Number,
  email: String,
  address: String,
  paid: Boolean,
  event: [{type: Schema.Types.ObjectId, ref: 'Event'}],
});

let Participant = mongoose.model('Participant', participantSchema);
module.exports = Participant;
