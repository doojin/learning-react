const path = require('path');
const express = require('express');
const articles = require('./data/articles');

const app = express();

app.use(express.static('static/app'));

app.get('/articles', (req, res) => {
	const delaySeconds = 3;

	setTimeout(() => {
		res.json(articles);
	}, delaySeconds * 1000);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/app/index.html'));
});

module.exports = {
	start(port) {
		app.listen(port, () => {
			console.log('Server is up and running!');
		});
	}
};