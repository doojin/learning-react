const Article = require('../models/article')

module.exports = async (req, res) => {
  const { title, text } = req.body

  try {
    await Article.create({ title, text })
    res.status(201).end()
  } catch (e) {
    res.status(500).json({
      error: 'At the moment article cannot be created. Please try again later.'
    })
  }
}
