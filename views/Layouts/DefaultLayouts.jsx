const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <nav id= "nav-bar">
                    <a href="/products"><img src="/images/logo.png" height= '100px'/></a> 
                    <a href = "/products/about" className='abt'>About</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;