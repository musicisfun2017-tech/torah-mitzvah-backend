const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Load data
const items = require('./data/torah_mitzvah_1000.json');

app.get('/api/items', (req, res) => {
  const { q } = req.query;
  if (q) {
    const query = q.toLowerCase();
    const filtered = items.filter(item =>
      item.TorahQuote.toLowerCase().includes(query) ||
      item.MitzvahIdea.toLowerCase().includes(query)
    );
    return res.json(filtered);
  }
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
