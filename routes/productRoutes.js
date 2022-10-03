// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of fruit
const Fruit = require('../models/products')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllProducts
    } = require('../controllers/productController')

// Setup "index" route
router.get('/', findAllProducts)

module.exports = router