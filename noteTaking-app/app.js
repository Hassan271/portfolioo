const saveNote = require('./notes');

// Get user input from CLI
const note = process.argv[2]; // e.g., node app.js "Buy milk"

if (note) {
  saveNote(note);
} else {
  console.log("Please enter a note.");
}
