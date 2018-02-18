let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: String,
  start_data: String,
  end_date: String,
  active: Boolean,
  featured_img: String,
  featured: Boolean,
  short_desc: String,
  desc: String,
  paid: Boolean,
  amount: Number,
  venue: String,
  incharge: [{type: Schema.Types.ObjectId, ref: 'Member'}],
});

let Event = mongoose.model('Event', eventSchema);
module.exports = Event;
