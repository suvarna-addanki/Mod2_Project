// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of fruit
const Product = require('../models/products')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllProducts,
    seedStarterData,
    } = require('../controllers/productController')

// Setup "index" route
router.get('/', findAllProducts)

// Setup "seed" route
router.get('/seed', seedStarterData)

module.exports = router