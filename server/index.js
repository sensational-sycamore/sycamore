const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// GitHub token is stored in an .env file
// please create a .env file in root directory
// add this line to the .env file: GITHUB_TOKEN:<your github token>
require('dotenv').config();

// server routes
/////////////////////////////////////////////////////////////////////

// support look up of all styles available for the specific product using product id from request url
// example request: axios.get('/products/63612/styles')
app.get('/products/:product_id/styles', (req, res) => {
  let productId = req.params.product_id;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}/styles`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// support look up of all related products for the specific product using product id from request url
// example request: axios.get('/products/63612/related')
app.get('/products/:product_id/related', (req, res) => {
  let productId = req.params.product_id;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}/related`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// support specific product look up using product id from request url
// example request: axios.get('/products/63612')
app.get('/products/:product_id', (req, res) => {
  let productId = req.params.product_id;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// support product look up with query strings page (integer, default 1) and count (integer, default 5)
// example request: axios.get('/products/?page=2&count=5')
app.get('/products', (req, res) => {
  let page = req.query.page;
  let count = req.query.count;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?page=${page}&count=${count}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});