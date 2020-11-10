const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product')

router.get('/', (req, res) => {
    Product.find().exec().
        then(result => {
            res.status(200).json({
                createdProduct: result
            })

        }).catch(err => console.log(err))
})

router.post('/', (req, res) => {


    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save().then(result => {
        console.log(result)
    }).catch(err => console.log(err))
    res.status(200).json({
        message: 'Handling POST request to /prod',
        createdProduct: product
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID
    Product.findById(id)
        .exec()
        .then(result => {
            console.log(result),
                res.status(200).json(result)
        })
})

router.patch('/:productID', (req, res, next) => {


    res.status(200).json({
        message: "Update product",

    })
})

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID

    Product.remove({ _id: id })
        .then(result => {
            res.status(200).json({
                deltedItem: result
            })
        })
})


module.exports = router