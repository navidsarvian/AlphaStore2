// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date
});

UserSchema.pre()('save', function(next) {
  let user = this;
  let date = new Date();

  user.created_at = date;
  next ();
})
