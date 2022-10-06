// class Index extends React.Component {

//     render() {
        
//         const { products } = this.props

//         console.log(products)  //getting the data from fruitcontroller

//         return (

    const React = require('react')
const DefaultLayout = require('../Layouts/DefaultLayouts')
    class Index extends React.Component {
           render() {
                  return (
                     <DefaultLayout>
                         <html>
                                <body>
                                   
                                       <link rel="stylesheet" href="/css/app.css" />
                                       <h1><i>The Book Worm </i> </h1>
                                       <div id="box">
                                              {this.props.products.map((product, i) => {
                                                     return (
                                                            <div key={i} className="book">
                                                                   <h3>{product.name}</h3>
                                                                   <a href={`/products/${product.id}`}><img style={{ height: '350px', width: '350px' }} src={product.img} /></a>
                                                                   <h5>Price:${product.price}</h5>
                                                                   <h5>Quantity:{product.qty > 0 ? `${product.qty} in stock` : `Out of Stock`}</h5>
                                                            </div>
                                                     )
                                              })}
                                              <nav>
                                                     <a href="/products/new">Create a New Product</a>
                                              </nav>
                                       </div>
                                </body>
                         </html>
                         </DefaultLayout>
                  )
           }
    }
    module.exports = Index