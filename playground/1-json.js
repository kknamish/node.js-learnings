const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)

const bufferData = fs.readFileSync('1-json.json')
const JSONData = bufferData.toString()
const data = JSON.parse(JSONData)
data.name = 'Namish'
data.age = 22

const newJSONData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSONData)