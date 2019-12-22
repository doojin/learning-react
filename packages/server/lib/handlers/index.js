const loadArticles = require('./loadArticles')
const createArticle = require('./createArticle')
const userInterface = require('./userInterface')

module.exports = {
  register (app) {
    app.get('/', userInterface)
    app.get('/articles', loadArticles)
    app.post('/articles', createArticle)
  }
}
