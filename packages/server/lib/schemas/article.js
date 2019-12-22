const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: {
    type: String
  },
  text: {
    type: String
  }
}, {
  toJSON: {
    transform (doc, ret) {
      ret.id = ret._id
      delete ret._id
    }
  }
})
