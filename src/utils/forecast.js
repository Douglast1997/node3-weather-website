const request = require('request')

const forecast = (latitude, longitude, callback) =>{
 
  const url = 'http://api.weatherstack.com/current?access_key=d6e638343914aeecf515261f2596e13b&query='+ latitude +','+ longitude +'&units=m'

  request({url, json: true}, (error, {body}) => {
    if(error){
      callback('Unable to connect to weather services!',undefined)
    } else if(body.error){
      callback('Unable to find Location',undefined)
    } else {
      callback(undefined, ' It is currently '+ body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain. It feels like: ' + body.current.feelslike +' degrees and the humidity is ' + body.current.humidity
      )
    }
  })
}


module.exports = forecast