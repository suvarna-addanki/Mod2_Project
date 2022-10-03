
require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/products.js');


const productSeed =
       [
              {
                     name: 'Princess Cake',
                     description: "Every princess will love this for her birthday",                    
                     img : "./public/images/Harry Potter.jpg",
                     price: 50,
                     qty: 5
              }
       ]

module.exports = productSeed