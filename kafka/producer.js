var kafka = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
let producerReady = false

const client = new kafka.KafkaClient({
  kafkaHost: '192.168.99.100:9092'
});

// For this demo we just log client errors to the console.
client.on('error', function (error) {
  console.error(error);
});

let producer = new HighLevelProducer(client);
producer.on('ready', function () {
  // Create message and encode to Avro buffer
  producerReady = true
});

// For this demo we just log producer errors to the console.
producer.on('error', function (error) {
  console.error(error);
});




const publish = (data) => {
  return new Promise((resolve, reject) => {
    console.log("publish called");
    if (producerReady) {
      console.log("producer is ready");
      let payloads = [{
        topic: data.topic,
        messages: JSON.stringify(data.data)
      }]
      producer.send(payloads, function (err, data) {
        console.log(data);
        if (err) {
          console.log("err occured in kafka=", err);
          reject("Something is wrong. Please try again after sometime!!")
        }
        return
      });
      resolve(data)
    }
    else
      reject("Something is wrong. Please try again after sometime!!")

  })
}

const producers = {
  publish
}

export {
  producers
}
