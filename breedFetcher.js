const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    let data = JSON.parse(body);
    if (err) {
      callback(err, null);
    } else if (data.length === 0) {
      err = `The requested breed is not found!`
      callback(err, null);
    } else {
      let desc = data[0].description;
      callback(null, desc);
    }
  });
};

module.exports = fetchBreedDescription;