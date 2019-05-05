var mongoose = require('mongoose')

var trendingMoviesSchema = new mongoose.Schema({
    movie_id: Number,
    views: Number
})

module.exports = mongoose.model('Trending_movies', trendingMoviesSchema)
