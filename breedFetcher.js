const request = require('request');
const userInput = process.argv[2];

request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
  console.error('error:', error);
  const data = JSON.parse(body);

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === userInput) {
      return console.log(data[i].description);
    }
  }
  return console.log('Error!');
});