const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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