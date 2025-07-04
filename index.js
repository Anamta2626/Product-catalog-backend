const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const products = require('./data');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors({origin: process.env.FRONT_END_URL}));
app.use(cors()); 

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
