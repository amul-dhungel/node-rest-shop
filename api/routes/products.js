const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const Product = require('../models/product')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /prod'
    })
})

router.post('/', (req, res, next) => {


    res.status(200).json({
        message: 'Handling POST request to /prod',
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID

    if (id === 'special') {
        res.status(200).json({
            message: "You discovered the special ID",
            id: id
        })
    }
})

router.patch('/:productID', (req, res, next) => {


    res.status(200).json({
        message: "Update product",

    })
})

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: "Product deleted",
    })
})


module.exports = router