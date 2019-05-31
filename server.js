const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

// setup
const app = express();
const port = 3000;

// server index.html
app.use(express.static('public'));

// proxy middleware
app.use('api/listings/header/:id', proxy({
  target: 'http://localhost:3001'
}));

app.use('api/listings/tour/:id', proxy({
  target: 'http://localhost:3002'
}));

app.use('api/listings/amenities/:id', proxy({
  target: 'http://localhost:3003'
}));

app.use('api/listings/reviews/:id', proxy({
  target: 'http://localhost:3004'
}));

app.use('api/listings/hosts/:id', proxy({
  target: 'http://localhost:3005'
}));

// route
app.get('/listings/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// server
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
})