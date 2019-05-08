import users from './users'
import movies from './movies'
var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies-trailer/:id', function (req, res, next) {
  axios.get('http://localhost:3000/movies/list?filter=trending&genre=drama')
    .then(data => {
      if (data.data && data.data.status == 200) {
        let list = {
          "data": data.data.data
        }
        res.render('movies_trailer', list);
      }
      else {
        let errMessage = {
          "message": "Please try after sometime!!"
        }
        res.render('error', errMessage)
      }

    })
    .catch(err => {
      let errMessage = {
        "message": "Please try after sometime!!",
        "error": err
      }
      res.render('error', errMessage)
    })

});

router.use('/user/', users)
router.use('/movies/', movies)

module.exports = router;
