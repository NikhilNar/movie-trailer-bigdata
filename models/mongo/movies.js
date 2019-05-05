var mongoose = require('mongoose')

var movieSchema = new mongoose.Schema({
    movie_id: Number,
    title: String,
    genre: String,
    imdb_id: Number,
    posters: String,
    youtube_id: String
})

module.exports = mongoose.model('Movies', movieSchema)
