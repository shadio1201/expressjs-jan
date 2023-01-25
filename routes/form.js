const express = require('express');
const router = express.Router();

let emails = [];

router.post('/', (req, res) => {
    res.send('Email saved!')
})


module.exports = router