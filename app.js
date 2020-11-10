const express = require('express')
const app = express()
const morgan = require('morgan')
//const body = require('body-parser')

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const bodyParser = require('body-parser')



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.unsubscribe((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app
