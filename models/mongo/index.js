var MoviesModel = require('./movies')
var RatingsModel = require('./ratings')
var UserModel = require('./users')
var MovieUserMatchingsModel = require('./movie_user_matchings')
var TrendingMoviesModel = require('./trending_movies')
var TopRatedMoviesModel = require('./top_rated_movies')

var mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admin@192.168.99.100:27017/movie_analysis', { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected to Mongodb");
});

var models = {
  MoviesModel,
  RatingsModel,
  UserModel,
  MovieUserMatchingsModel,
  TrendingMoviesModel,
  TopRatedMoviesModel
}

module.exports = models
