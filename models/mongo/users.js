var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  user_id: Number,
  name: String
})

module.exports = mongoose.model('Users', userSchema)
