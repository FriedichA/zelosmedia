const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(cors());
app.use(bodyParser.json());

// Initialize database
db.serialize(() => {
  db.run('CREATE TABLE content (id INTEGER PRIMARY KEY, title TEXT, description TEXT, imageUrl TEXT)');
  db.run('INSERT INTO content (title, description, imageUrl) VALUES ("Welcome to My Page", "This is a simple one-page application powered by Angular.", "/assets/images/sample.jpg")');
});

// Get content
app.get('/api/content', (req, res) => {
  db.get('SELECT * FROM content LIMIT 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

// Update content
app.post('/api/content', (req, res) => {
  const { title, description, imageUrl } = req.body;
  db.run(
    'UPDATE content SET title = ?, description = ?, imageUrl = ? WHERE id = 1',
    [title, description, imageUrl],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
