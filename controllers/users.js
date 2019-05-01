

const moviesWatched=(data)=>{
  return new Promise((resolve, reject)=>{
    console.log("moviesWatched called");
    resolve(data)
  })
}

const users={
  moviesWatched
}

export{
  users
}
