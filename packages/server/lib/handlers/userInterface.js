const path = require('path')

module.exports = (req, res) => {
  res.sendFile(path.join(__dirname, '../../static/app/index.html'))
}
