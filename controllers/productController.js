const Fruit = require('../models/products')

const seed = require('../models/seed')

// ROUTE     GET /fruits    (index)
const findAllProducts = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Fruit.find({}, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Index', { products: foundProduct })
        }
    })
}

module.exports = findAllProducts