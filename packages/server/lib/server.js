const path = require('path')
const express = require('express')
const loadArticles = require('./handlers/loadArticles')

const app = express()

app.use(express.static('static/app'))

app.get('/articles', (req, res) => loadArticles(req, res))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/app/index.html'))
})

module.exports = {
  start (port) {
    app.listen(port, () => {
      console.log('Server is up and running!')
    })
  }
}
