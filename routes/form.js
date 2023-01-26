const express = require('express');
let bodyParser = require('body-parser')
const router = express.Router();
router.use(bodyParser.json());
const emails = []


router.post('/', (req, res) => {
    let data = req.body.content
    emails.push(data)
    res.send('Email saved!')
})

router.get('/', (req, res) => {
    res.send(emails)
})


module.exports = router