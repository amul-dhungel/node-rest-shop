const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /prod'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling POST request to /prod'
    })
})

module.exports = router