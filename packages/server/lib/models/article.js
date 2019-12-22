const mongoose = require('mongoose')
const ArticleSchema = require('../schemas/article')

module.exports = mongoose.model('Article', ArticleSchema)
