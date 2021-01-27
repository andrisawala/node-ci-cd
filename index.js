const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Test SSH.. CI/CD..'))
  .listen(3000, () => console.log('server live...'));
