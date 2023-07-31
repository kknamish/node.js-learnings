const request = require('request')
const axios = require('axios')

const url = 'http://api.weatherstack.com/current?access_key=1723b971373411005cf8bdcd0844aac2&query=Hyderabad, India'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(`It is currently ${data.temperature} degree out. It feels like ${data.feelslike} degrees out. There is a ${data.precip*100}% chance of rain.`)
}) 

const params = {
  access_key: '775afe8009ed6030e37b307b62381dca',
  query: '1600 Pennsylvania Ave NW'
}

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error.message);
  });