const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    console.log(duplicateNotes)
    if(duplicateNotes.length == 0){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully!'))
    }
    else{
        console.log(chalk.red.inverse(('Title already taken.')))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const removeNotes = notes.filter((note) => note.title !== title)
    if(removeNotes.length === notes.length){
        console.log(chalk.red.inverse('Title doesnot exist!'))
    }
    else{
        console.log(chalk.green.inverse('Removed Successfully!'))
        saveNotes(removeNotes)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if(note){
        console.log(chalk.blue.inverse('Title: ' + note[0].title))
        console.log(chalk.blue('Body: ' + note[0].body))
    }
    else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes, null, "\t")  // just to beautify the JSON we use null, "\t"
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => { 
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}


module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}