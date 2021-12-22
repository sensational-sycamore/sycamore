const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
require('dotenv').config();

// support specific product look up using product id from request url
// example request: axios.get('/products/63612')
app.get('/products/:product_id', (req, res) => {
  let productId = req.params.product_id;
  axios({
    method: 'get',
    url: `hhttps://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}`,
    headers: {'Authorization': process.env.GITHUB_TOKEN}
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(404).send(error));
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});