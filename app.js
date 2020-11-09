const express = require('express')
const app = express()
const morgan = require('morgan')
const body = require('body-parser')
const mongoose = require('mongoose')

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@cluster0.3ef6h.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
        useMongoClient: true
    }
)


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authoriazation')
// })

// Routes which should handle the requests

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
