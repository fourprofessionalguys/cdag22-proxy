const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

// setup
const app = express();
const port = 3000;

// server index.html
app.use(express.static('public'));


// routes

// proxy middleware
app.use('/:id', (req, res, next) => {
  const id = req.params.id;
  proxy({
    target: `http://localhost:3001/api/listings/header/${id}`
  })
  next();
});

app.use('/:id', (req, res, next) => {
  const id = req.params.id;
  proxy({
    target: `http://localhost:3002/api/listings/tour/${id}`
  })
  next();
});

app.use('/:id', (req, res, next) => {
  const id = req.params.id;
  proxy({
    target: `http://localhost:3003/api/listings/amenities/${id}`
  })
  next();
});

app.use('/:id', (req, res, next) => {
  const id = req.params.id;
  proxy({
    target: `http://localhost:3004/api/listings/reviews/${id}`
  })
  next();
});

app.use('/:id', (req, res, next) => {
  const id = req.params.id;
  proxy({
    target: `http://localhost:3005/api/listings/hosts/${id}`
  })
  next();
});

app.use('/:id', (req, res, next) => {
  res.status(201).send('/public/index.html');
});


// server
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
})