
// require('dotenv').config()
// const mongoose = require('mongoose')
// const Product = require('./models/products.js');


const products = [

              {
                     name: 'Harry Potter series',
                     description: "The Harry Potter books make up the popular series written by J. K. Rowling. The books concern a wizard called Harry Potter and his journey through Hogwarts School of Witchcraft and Wizardry.",                                         
                     img: "https://images.unsplash.com/photo-1606311698062-21c4f57cb27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=458&q=80",
                     price: 50.99,
                     qty: 5
              },
              {
                     name: 'Eloquent JavaScript',
                     description: "Completely revised and updated, this best-selling book introduces you to programming in JavaScript and focuses on writing real applications.",
                     img: "https://joshuawinn.com/wp-content/uploads/2020/03/eloquent_javascript_book_cover-1024x950.jpg",
                     price: 9.99,
                     qty: 17

              },
              {
                     name:"Becoming",
                     description:"A powerful, and inspiring memoir by the former First Lady of the United States",
                     img:"https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
                     price: 29.99,
                     qty: 6,
              },
              {
                     name:"Road To React",
                     description:"You will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step.",
                     img:"https://miro.medium.com/max/402/0*ZUQsq4M2P-6Omu0-.png",
                     price:25.99,
                     qty:8,
              },
              {
                     name:"HTML,CSS and JavaScript All in One",
                     description:"“HTML, CSS, and JavaScript All in One” is another complete resource for both beginners and advanced coders",
                     img:"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/HTML-CSS-and-JavaScript-218x300.jpg",
                     price:13,
                     qty:18,
              },
              {
                     name:"Financial Freedom",
                     description:"Money is unlimited. Time is not. Become financially independent as fast as possible.",
                     img:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780525534587_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
                     price:14,
                     qty:9
              }
              
       ]
       

module.exports = products