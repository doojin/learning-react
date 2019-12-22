const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./handlers')

const app = express()

app.use(express.static('static/app'))
app.use(bodyParser.json())

handlers.register(app)

module.exports = {
  start (port) {
    app.listen(port, () => {
      console.log('Server is up and running!')
    })
  }
}
