const generateMessage=(status, data, message)=> {
  return  {
    status: status,
    message: message,
    data: data
  }
}

export{
  generateMessage
}
