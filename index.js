const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Belajar CI/CD..'))
  .listen(5000, () => console.log('server live...'));
