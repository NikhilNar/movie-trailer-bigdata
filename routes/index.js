import users from './users'
import movies from './movies'
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies-trailer/:id', function (req, res, next) {
  res.render('movies_trailer', { title: 'Express' });
});

router.use('/user/', users)
router.use('/movies/', movies)

module.exports = router;
