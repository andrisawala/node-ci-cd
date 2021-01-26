const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Hello CI/CD..'))
  .listen(5000, () => console.log('server live...'));
