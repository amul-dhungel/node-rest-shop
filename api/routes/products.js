const express = require('express')
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /prod'
    })
})

router.post('/', (req, res, next) => {
    const product = {
        hi: req.body.hi,
        he: req.body.he,
    }
    res.status(200).json({
        message: 'Handling POST request to /prod',
        createdProduct: product
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