const fs = require('fs'); //to read and updaten file when we post

const path = require('path'); //module that provides utilities for working with file and directory paths

function createNewNote(body, notes){
   const note = body;
   notes.push(note);
   fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
   );
   console.log("file created")

   return note;
}

module.exports = {
    createNewNote
};