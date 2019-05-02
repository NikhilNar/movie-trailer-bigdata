import {
  users as usersController
} from '../controllers';
var Message=require('../utils')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/movie-watched', function(req, res, next) {
  usersController.moviesWatched(req.body)
  .then(data=>{
      res.send(Message.generateMessage(200,data,"data published successfully"));
  })
  .catch(err=>{
    console.log("err=",err);
  })

});

module.exports = router;
