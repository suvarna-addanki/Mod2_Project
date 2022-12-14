const React = require('react');
const DefaultLayout = require('../Layouts/DefaultLayouts');
class Show extends React.Component {
       render() {
            // const {product} = this.props
              return (
                     <DefaultLayout>
                     <div className='box2'>
                                   
                                    <link rel="stylesheet" href="/css/app.css" />
                                    <h1><i>Product Detail Page</i></h1>
                                    {/* {console.log (this.props.product.name)} */}
                                    <h2> {this.props.product.name}</h2> 
                                     <img style={{ height: '400px', width: '450px' }} src={this.props.product.img} />
                                    <h3>Description: {this.props.product.description}</h3>
                                    <h3>Price: ${this.props.product.price}</h3>
                                    <h3 >{this.props.product.qty > 0 ? `${this.props.product.qty} in stock` : `Out of Stock`}</h3>
                                    <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                                        {this.props.product.qty > 0 ?
                                                <input id="buy" type="submit" value="Buy book " /> : null}
                                    </form>

                                    <br></br>
                                    <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                                        <input id="delete" type="submit" value="Delete" />
                                    </form>
                                    <br></br>
                                    <a href={`/products/${this.props.product._id}/edit`}>EditBook</a>
                                    <br></br>
                                    <br></br>
                                    <a href={`/products/`}>Back </a>
                            
                     </div>
                     </DefaultLayout>
                     
              )

       }
}
module.exports = Show;