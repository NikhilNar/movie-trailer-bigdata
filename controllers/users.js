import{
  producers as kafkaProducer
} from '../kafka'

const moviesWatched=(data)=>{
  return new Promise((resolve, reject)=>{
    console.log("moviesWatched called");
    kafkaProducer.publish(data)
    .then(data=>{
      resolve(data)
    })
    .catch(err=>{
      reject(err)
    })
  })
}

const users={
  moviesWatched
}

export{
  users
}
