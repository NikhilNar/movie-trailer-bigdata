var mongoose = require('mongoose')

var movieUserMatchingsSchema = new mongoose.Schema({
    user_id: Number,
    movie_id: Number,
    timestamp: Date
})

module.exports = mongoose.model('movie_user_matchings', movieUserMatchingsSchema)
