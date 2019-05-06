var mongoose = require('mongoose')

var ratingSchema = new mongoose.Schema({
    user_id: Number,
    movie_id: Number,
    rating: Number,
    timestamp: Date
})

module.exports = mongoose.model('ratings', ratingSchema)
