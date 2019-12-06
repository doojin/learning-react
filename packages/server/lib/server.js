const express = require('express');
const articles = require('./data/articles');

const app = express();

app.get('/articles', (req, res) => {
	res.json(articles);
});

module.exports = {
	start(port) {
		app.listen(port, () => {
			console.log('Server is up and running!');
		});
	}
};