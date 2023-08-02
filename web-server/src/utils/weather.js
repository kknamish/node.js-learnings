const axios = require('axios');

const url = 'http://api.weatherstack.com/current?access_key=1723b971373411005cf8bdcd0844aac2&query=';

const forecast = (address) => {
  const customURL = url + address;
  return axios.get(customURL)
    .then(response => {
      const data = response.data.current;
      return `It is currently ${data.temperature} degree out. It feels like ${data.feelslike} degrees out. There is a ${data.precip*100}% chance of rain.`
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
};

module.exports = {
  forecast
};