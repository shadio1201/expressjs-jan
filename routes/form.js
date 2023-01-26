const express = require('express');
const router = express.Router();

const emails = []

router.post('/', (req, res) => {
    let data = req.body
    emails.push(data)
    console.log(emails)
    res.send('Email saved!')
})

router.get('/', (req, res) => {
    res.send(emails)
})


module.exports = router