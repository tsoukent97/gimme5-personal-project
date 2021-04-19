const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  try {
    res.send('hello world')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router