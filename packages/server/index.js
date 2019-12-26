const mongoose = require('mongoose')
const server = require('./lib/server')

// noinspection JSIgnoredPromiseFromCall
mongoose.connect('mongodb://localhost/reactArticles', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.start(80)
