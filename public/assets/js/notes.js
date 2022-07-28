app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      var notes = JSON.parse(data);
      let userNote = req.body;
      userNote.id = Math.floor(Math.random() * 5000);
      notes.push(userNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        res.json(userNote);
    });
    }); 
  });