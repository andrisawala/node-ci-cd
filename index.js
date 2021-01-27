const express = require('express');
const app = express();

app
  .get('/', (req, res) => res.send('Coba pake SSH.. CI/CD..'))
  .listen(3000, () => console.log('server live...'));
