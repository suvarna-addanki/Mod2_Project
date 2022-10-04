const React = require('react')

class New extends React.Component {
       render() {
              return (
                     <div className='box3'>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1><i>Create Product Page</i></h1>
                            <form action="/products" method="POST">
                                   Name:
                                   <br></br>
                                   <input type="text" name="name" required placeholder='name' />
                                   <br></br>
                                   <br></br>
                                   Description:
                                   <br></br>
                                   <input type="text" name="description" placeholder='description' />
                                   <br></br>
                                   <br></br>
                                   Image URL:
                                   <br></br>
                                   <input type="text" name="img" placeholder='url' />
                                   <br></br>
                                   <br></br>
                                   Price:
                                   <br></br>
                                   <input type="number" name="price" step="1" min="0" placeholder='price' /><br></br>
                                   <br></br>
                                   Quantity:
                                   <br></br>
                                   <input type="number" name="qty" min="0" step="1" placeholder='qty' /><br></br>
                                   
                                   <input type="submit" name="" value="Create New Book"  /><br></br>                                    
                                   <a href={`/products/`} style= {{marginLeft:10 + 'em'}} >Back </a>
                            </form>
                     </div>
              )
       }
}
module.exports = New