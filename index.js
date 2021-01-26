const express = require('express');

const app = express();

app
  .get('/', (req, res) => res.send('Hello Word'))
  .listen(5000, () => console.log('server live...'));
