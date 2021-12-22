const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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

  let params = req.query;
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  var queryUrl = '?' + queryString;

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${queryUrl}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// Returns review metadata for a given product with query paremeters:
//// product_id	 (integer)
app.get('/reviews/meta', (req, res) => {
  let params = req.query;
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  var queryUrl = '?' + queryString;

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/${queryUrl}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});


// returns list of reviews for a particular product with query paremeters:
//// page (integer, default 1)
//// count (integer, default 5)
//// sort (text, "newest", "helpful", or "relevant")
//// product_id	 (integer)
// example request: axios.get('/reviews/?product_id=63609')
app.get('/reviews', (req, res) => {
  let params = req.query;
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  var queryUrl = '?' + queryString;

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${queryUrl}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// adds a review for the given product
/*
request body sample
{
    "product_id": 63609,
    "rating": 5,
    "summary": "Great Product",
    "body": "frad gthtwhr fahyaterf gtagf",
    "recommend": true,
    "name": "tester",
    "email": "tester@gmail.com",
    "characteristics": {}
  }
*/
app.post('/reviews', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
    headers: {'Authorization': process.env.GITHUB_TOKEN},
    data: req.body
  })
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Updates a review to show it was found helpful.
app.put('/reviews/:review_id/helpful', (req, res) => {
  let reviewId = req.params.review_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${reviewId}/helpful`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Updates a review to show it was found helpful.
app.put('/reviews/:review_id/report', (req, res) => {
  let reviewId = req.params.review_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${reviewId}/report`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});


// Retrieves a list of questions for a particular product. This list does not include any reported questions.
//// page (integer, default 1)
//// count (integer, default 5)
//// product_id	 (integer)

app.get('/qa/questions', (req, res) => {
  let params = req.query;
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  var queryUrl = '?' + queryString;

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${queryUrl}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// Returns answers for a given question. This list does not include any reported answers.
//// product_id	 (integer)
//// page (integer, default 1)
//// count (integer, default 5)

app.get('/qa/questions/:question_id/answers', (req, res) => {
  let questionId = req.params.question_id;
  let params = req.query;
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  var queryUrl = '?' + queryString;

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionId}/answers/${queryUrl}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});

// Adds a question for the given product
/*
request body sample
{
    "body": "frad gthtwhr fahyaterf gtagf",
    "name": "tester",
    "email": "tester@gmail.com",
    "product_id": 123456
  }
*/
app.post('/qa/questions', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
    headers: {'Authorization': process.env.GITHUB_TOKEN},
    data: req.body
  })
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Adds an answer for the given question
/*
request body sample
{
    "body": "frad gthtwhr fahyaterf gtagf",
    "name": "tester",
    "email": "tester@gmail.com"
  }
*/
app.post('/qa/questions/:question_id/answers', (req, res) => {
  let questionId = req.params.question_id;
  axios({
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionId}/answers`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
    data: req.body
  })
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Updates a question to show it was found helpful.
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  let questionId = req.params.question_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionId}/helpful`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
app.put('/qa/questions/:question_id/report', (req, res) => {
  let questionId = req.params.question_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionId}/report`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});


// Updates an answer to show it was found helpful.
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  let answerId = req.params.answer_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${answerId}/helpful`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Report an answer
app.put('/qa/answers/:answer_id/report', (req, res) => {
  let answerId = req.params.answer_id;
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${answerId}/report`,
    headers: {'Authorization': process.env.GITHUB_TOKEN},
  })
    .then(response => res.status(204).send(response.data))
    .catch(error => res.status(404).send(error));
});

// Retrieves list of products added to the cart by a user.
app.get('/cart', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});



// Adds a product to the cart.
// pass in an sku_id
//// sku_id seems not to be working. Get 500 Internal Server Error
//// to be revisited
app.post('/cart', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart',
    headers: {'Authorization': process.env.GITHUB_TOKEN},
    data: req.body
  })
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(404).send(error));
});


// Adds a interaction to the db.
app.post('/interactions', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions',
    headers: {'Authorization': process.env.GITHUB_TOKEN},
    data: req.body
  })
    .then(response => res.status(201).send(response.data))
    .catch(error => res.status(404).send(error));
});


///////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});