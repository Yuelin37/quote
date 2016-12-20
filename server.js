import express from 'express';
import axios from 'axios';
import apiRouter from './api';

const server = express();


server.get('/', (req, res) => {
  axios.get('http://localhost:3001/api/randomquote')
  .then(function (response) {
    res.send(response.data.quoteText + '<br> -- '+ response.data.quoteAuthor);
  })
  .catch(function (error) {
    console.log(error);
    res.send(error);
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(3001);
console.log('Express Server Listening Port 3001.');
