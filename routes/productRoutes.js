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
    showNewView,
    showEditView,
    showOneProduct,
    seedStarterData,
    deleteAProduct,
    updateOneProduct,
    createNewProduct,
    clearData,
    abc,
    buyProduct
    } = require('../controllers/productController')

// Setup "index" route
router.get('/', findAllProducts)

// Setup "new" route
router.get('/new', showNewView)

//setup delete route
router.delete('/:id', deleteAProduct)

//setup update route
router.put('/:id', updateOneProduct)

// Setup "create" route
router.post('/', createNewProduct)

// Setup "edit" route
router.get('/:id/edit', showEditView)

//patch
router.patch('/:id', buyProduct)

// Setup "seed" route
router.get('/seed', seedStarterData)

//clear route
router.get('/clear', clearData)

// Setup "show" route  
router.get('/:id', showOneProduct)




module.exports = router