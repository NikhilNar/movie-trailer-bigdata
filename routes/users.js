import {
  users as usersController
} from '../controllers';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersController.moviesWatched()
  .then(data=>{
      res.send('respond with a resource');
  })
  .catch(err=>{
    console.log("err=",err);
  })

});



module.exports = router;
