let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let memberSchema = new Schema({
  name: String,
  dob: String,
  contact: Number,
  designation: String,
  email: String,
  active: Boolean,
  about: String,
  skills: String,
  std: String,
  course: String,
  branch: String,
});

let Member = mongoose.model('Member', memberSchema);
module.exports = Member;
