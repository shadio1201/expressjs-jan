const express = require('express');
const router = express.Router();

const emails = []

router.post('/', (req, res) => {
    let data = JSON.parse(req.body)
    emails.push(data.content)
    res.send('Email saved!')
})

router.get('/', (req, res) => {
    res.send(emails)
})


module.exports = router