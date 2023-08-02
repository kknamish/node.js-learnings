const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const parialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engin and views location
app.set('view engine', 'hbs')
// By default, express searches for 'views' directory inorder to load dynamic templates using Handlebars, so to change it we can do the following
app.set('views', viewsPath)
hbs.registerPartials(parialsPath)

// Used incase to static pages
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    const data = {
        title: 'Weather App',
        username: 'Namish',
        forecast: 'It is not raining.'
    }
    res.render('index', data)
})

app.get('/about', (req, res) => {
    const data = {
        title: 'About page',
        username: 'Namish'
    }
    res.render('about', data)
})

app.get('/about/*', (req, res) => {
    const data = {
        title: '404',
        username: 'Namish',
        message: 'Article Not Found'
    }
    res.render('404', data)
})

app.get('/help', (req, res) => {
    const data = {
        message: 'This is help message',
        title: 'Help',
        username: 'Namish'
    }

    res.render('help', data)
})

app.get('/help/*', (req, res) => {
    const data = {
        title: '404',
        username: 'Namish',
        message: 'Article Not Found'
    }
    res.render('404', data)
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Address is not mentioned.',
    });
  }

  weather.forecast(req.query.address)
    .then(description => {
      res.send({
        forecast: description,
        location: 'Hyderabad',
        address: req.query.address,
      });
    })
    .catch(error => {
    //   console.error('Error fetching weather data:', error);
      res.status(500).send('Error fetching weather data');
    });
});


app.get('*', (req, res) => {
    const data = {
        title: '404',
        username: 'Namish',
        message: 'Page Not Found'
    }
    res.render('404', data)
})

app.listen(3000, ()=>{
    console.log('Server listening to port 3000.')
})