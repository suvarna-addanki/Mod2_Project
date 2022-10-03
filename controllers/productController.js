const Product = require('../models/products')

const seed = require('../models/seed')

// ROUTE     GET /fruits    (index)
const findAllProducts = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
  Product.find({}, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Index', { products: foundProduct })
        }
    })
}

// ROUTE       GET /products/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.products)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Product.create(seed.products, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}

module.exports = {findAllProducts, seedStarterData}