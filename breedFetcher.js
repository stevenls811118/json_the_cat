const request = require('request');

let input = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (err, response, body) => {
  if (err) {
    console.log('error: ', err);
  } else {
    console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body);
    // console.log(typeof body);
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length === 0) {
      console.log(`The requested breed is not found!`);
    } else {
      console.log(data[0].description);
    }
  }
});