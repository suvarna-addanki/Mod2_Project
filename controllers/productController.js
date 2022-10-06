const Product = require('../models/products')

const seed = require('../models/seed')

// ROUTE     GET /products    (index)
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

// ROUTE      GET /products/new    (new)
const showNewView = (req, res) => {     
    
    res.render('products/New')
}

// route - delete
const deleteAProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}

// route - update
const updateOneProduct = (req, res) => {
    
    
    Product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`);
        }
    })
}

// ROUTE     POST /fruits     (create)
const createNewProduct = (req, res) => {
    
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}

// ROUTE      GET /products/:id/edit     (edit)
const showEditView = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Edit', { product: foundProduct })
        }
    })
}


// ROUTE     GET /products/:id     (show)
const showOneProduct = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Show', { product: foundProduct })
        }
    })
}

const buyProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $inc: { qty: -1 } }, (err, updatedProduct) => {
        if (err) {
            res.status(400).json(err)
         } else {
            res.status(200).render('products/Show', { product: updatedProduct })           
        
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
            console.log(seed)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Product.create(seed, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}

//route about
const aboutPage = (req,res) => {
    //console.log('about')
    res.render('products/about')
    
}




//route clear
const clearData = (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else { 
            res.status(200).redirect('/products')
        }
    })
}


module.exports = {findAllProducts, showNewView, deleteAProduct, updateOneProduct, createNewProduct, showEditView, showOneProduct, buyProduct, seedStarterData, aboutPage, clearData}