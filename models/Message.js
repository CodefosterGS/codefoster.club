let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let messageSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

let Message = mongoose.model('Message', messageSchema);
module.exports = Message;
