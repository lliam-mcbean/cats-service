const request = require('request');
const userInput = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + userInput, function(error, response, body) {
  if (error) {
    callback('hello', null) 
    return
  }
  if (response.statusCode > 299) {
    callback('hello', null)
    return
  }
  const data = JSON.parse(body)
  if (data.length === 0) {
    callback('hello', null)
    return
  }
  callback(null, data[0].description)
});
}

module.exports = fetchBreedDescription;