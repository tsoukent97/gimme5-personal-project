const path = require('path')
const express = require('express')
const cors = require('cors')
const { request } = require('https')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))


module.exports = server

server.get('/', (req, res) => {
  const serverURL = "http://localhost:3000/api/v1/player"
    return request
    .get(`${serverURL}/player`)
    .then(response => {
      res.json(response.body)
    })
    .catch(err => {
      console.log(err)
    })
})


