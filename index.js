const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Akhirnya bisa guys.. CI/CD..'))
  .listen(3000, () => console.log('server live...'));
