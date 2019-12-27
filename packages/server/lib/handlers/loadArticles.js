const Article = require('../models/article')

module.exports = async function (req, res) {
  const articles = await Article.find({})
    .sort({ _id: -1 })
    .exec()

  res.json(articles)
}
