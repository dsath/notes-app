const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1')

yargs.command({
  command: 'add',
  describe: 'add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
});

yargs.command({
  command: 'list',
  describe: 'Show all notes',
  handler(argv) {
    notes.listNotes()
  }
});

yargs.command({
  command: 'read',
  describe: 'Show a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
});



yargs.parse()

