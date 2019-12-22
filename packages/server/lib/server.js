const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const loadArticles = require('./handlers/loadArticles')
const createArticle = require('./handlers/createArticle')

const app = express()

app.use(express.static('static/app'))
app.use(bodyParser.json())

app.get('/articles', loadArticles)

app.post('/articles', createArticle)

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
