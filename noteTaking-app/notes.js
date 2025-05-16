const fs = require('fs');

function saveNote(note) {
  fs.appendFileSync('notes.txt', note + '\n');
  console.log('Note saved!');
}

module.exports = saveNote;
