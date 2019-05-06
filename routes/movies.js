import {
    movies as moviesController
} from '../controllers';
var Message = require('../utils')
var express = require('express');
var router = express.Router();


router.get('/list/', function (req, res, next) {

    moviesController.movieList(req.query)
        .then(data => {
            res.send(Message.generateMessage(200, data, "Success!!"));
        })
        .catch(err => {
            res.send(Message.generateMessage(422, {}, err));
        })

});

module.exports = router;