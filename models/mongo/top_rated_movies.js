var mongoose = require('mongoose')

var topRatedMoviesSchema = new mongoose.Schema({
    movie_id: Number,
    avg_rating: mongoose.Schema.Types.Decimal128
})

module.exports = mongoose.model('TopRatedMovies', topRatedMoviesSchema)
