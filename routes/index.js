import users from './users'
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies-trailer/:id', function(req, res, next) {
  res.render('movies', { title: 'Express' });
});

// router.use('/user/', users)

module.exports = router;
