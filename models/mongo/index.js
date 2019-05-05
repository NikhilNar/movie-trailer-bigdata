var userModel=require('./user')

var mongoose=require('mongoose')
mongoose.connect('mongodb://admin:admin@192.168.99.100:27017/movie_analysis',{useNewUrlParser:true})

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to Mongodb");
});

var models={
  userModel
}

module.exports=models
