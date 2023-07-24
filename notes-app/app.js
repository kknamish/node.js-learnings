const validator = require('validator')
const chalk = require('chalk')
const notesFunctions = require('./notes.js')
const yargs = require('yargs')


// const msg = getNotes()
// const isValid = validator.contains(msg, 'Notes')
// console.log(msg, isValid)


// console.log(chalk.green.inverse('Success'))
// console.log(chalk.red.inverse('Error'))


// console.log(process.argv)

// add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a notes.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesFunctions.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        // console.log(argv)
        notesFunctions.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List of notes.',
    handler: function (){
        notesFunctions.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title: {
            describe: 'Title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesFunctions.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)