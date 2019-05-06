var mongoose = require('mongoose')

var trendingMoviesSchema = new mongoose.Schema({
    movie_id: Number,
    views: Number
}, { toJSON: { virtuals: true } })

trendingMoviesSchema.virtual('movie_collection', {
    ref: 'movies',
    localField: 'movie_id',
    foreignField: 'movie_id',
    justOne: true
})

module.exports = mongoose.model('trending_movies', trendingMoviesSchema)
