const React = require('react')
const DefaultLayout = require('../Layouts/DefaultLayouts')
    class About extends React.Component {
           render() {
                  return (
                     <DefaultLayout>
                         <html>
                                <body>
                                   <div>
                                       <link rel="stylesheet" href="/css/app.css" />
                                       
                                       <h1><i>Welcome to the store! I got inspired with my daughter's love of reading to create this application.
                
                                        These books are few of the 100's of books that she read so far. In praise of my avid reader, I designed this store. 
                                        </i> </h1>
                                        <img src='/images/book-library.jpg' height='700px' width='2000px' />
                                        </div>
                                </body>
                        </html>
                    </DefaultLayout>
                  )
           }
        }
module.exports = About
                                    