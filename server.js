const environment = process.env.NODE_ENV || 'development';
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Connecting FE to BE';

app.get('/', (request, response) => {
  response.json('HELLO! Welcome to Connecting FE to BE! YAY!');
});

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`);
});
