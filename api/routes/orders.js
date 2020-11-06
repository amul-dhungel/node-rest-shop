const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /orde'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling POST request to /orde'
    })
})


router.patch('/:orderID', (req, res, next) => {
    const id = req.params.orderID
    res.status(200).json({
        message: "Ordeer id is updated",
        id: id
    })
})

router.delete('/:orderID', (req, res, next) => {
    const id = req.params.orderID
    res.status(200).json({
        message: "Ordeer id is deleted",
        id: id
    })
})


module.exports = router