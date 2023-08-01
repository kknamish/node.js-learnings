const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engin and views location
app.set('view engine', 'hbs')
// By default, express searches for 'views' directory inorder to load dynamic templates using Handlebars, so to change it we can do the following
app.set('views', viewsPath)

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
        created_by: 'Namish'
    }
    res.render('about', data)
})

app.get('/help', (req, res) => {
    const data = {
        message: 'This is help message',
    }

    res.render('help', data)
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "It is raining.",
        location: "Hyderabad"
    })
})

app.listen(3000, ()=>{
    console.log('Server listening to port 3000.')
})