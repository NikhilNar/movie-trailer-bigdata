var kafka = require('kafka-node');
//var HighLevelConsumer = kafka.HighLevelConsumer;
var Consumer = kafka.Consumer;
var Client = kafka.Client;
const client = new kafka.KafkaClient({
  kafkaHost: '192.168.99.100:9092'
});
var topics = [{
  topic: 'movie_ratings',
  partition:0
},
{
  topic: 'movie_ratings',
  partition:1
},
{
  topic: 'movie_ratings',
  partition:2
},
{
  topic: 'movie_users_mapping'
}];


var consumer = new Consumer(client, topics);


consumer.on('message', function(message) {
  console.log(message);
});

consumer.on('error', function(err) {
  console.log('error', err);
});

process.on('SIGINT', function() {
  consumer.close(true, function() {
    process.exit();
  });
});
