const Article = require('../models/article')

module.exports = async function (req, res) {
  const articles = await Article.find({})
    .exec()

  res.json(articles)
}
