const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Heloo bisa SSH.. CI/CD..'))
  .listen(3000, () => console.log('server live...'));