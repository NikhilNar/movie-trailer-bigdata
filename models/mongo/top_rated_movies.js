var mongoose = require('mongoose')

var topRatedMoviesSchema = new mongoose.Schema({
    movie_id: Number,
    avg_rating: mongoose.Schema.Types.Decimal128
}, { toJSON: { virtuals: true } })

topRatedMoviesSchema.virtual('movie_collection', {
    ref: 'movies',
    localField: 'movie_id',
    foreignField: 'movie_id',
    justOne: true
})

module.exports = mongoose.model('top_rated_movies', topRatedMoviesSchema)
