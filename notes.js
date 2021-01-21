const fs = require('fs')
const chalk = require('chalk')

const path = 'notes.json'

const saveNotes = (list) => {
  const dataJSON = JSON.stringify(list)
  fs.writeFileSync(path, dataJSON)
}

const loadNotes = () => {
  try {
    const file = fs.readFileSync(path).toString()
    return JSON.parse(file)
  } catch (e) {
    return []
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse.green('Here are your notes!'))


  notes.forEach((note) => {
    console.log(note.title)
  })
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => {
    return note.title === title
  })

  if (!duplicateNote) {
    const noteToAdd = { title, body }
    notes.push(noteToAdd)
    console.log(chalk.inverse.green('Note successfully added!'))
  } else {
    console.log(chalk.inverse.red('Can\'t add duplicate notes!'))
  }
  saveNotes(notes)
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesMinusNote = notes.filter((note) => note.title !== title)
  if (notes.length > notesMinusNote) {
    console.log(chalk.inverse.green('Succesfully removed note!'))
    saveNotes(notesMinusNote)
  } else {
    console.log(chalk.inverse.green('Note not found!'))
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse.green('Here is your note!'))
    console.log('Title: ', note.title)
    console.log('Body: ', note.body)
  } else {
    console.log(chalk.inverse.red('Note not found!'))
  }
}

module.exports = {
  listNotes,
  addNote,
  removeNote,
  readNote,
}
