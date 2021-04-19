const path = require('path')
const express = require('express')
const cors = require('cors')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))


module.exports = server

server.get('/', (req, res) => {
  const serverURL = "http://localhost:3000/api/v1/players"
    return request
    .get(`${serverURL}/players`)
    .then(response => {
      res.json(response.body)
    })
})
