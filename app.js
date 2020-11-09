const express = require('express')
const app = express()
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authoriazation')
// })

// Routes which should handle the requests

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


module.exports = app
