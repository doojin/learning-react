const axios = require('axios');

export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_STARTED = 'FETCH_ARTICLES_STARTED';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

function fetchArticlesStarted() {
	return { type: FETCH_ARTICLES_STARTED };
}

function fetchArticlesSuccess(articles) {
	return {
		type: FETCH_ARTICLES_SUCCESS,
		articles
	};
}

function fetchArticlesFailure(error) {
	return {
		type: FETCH_ARTICLES_FAILURE,
		error
	};
}

export function fetchArticles() {
	return async dispatch => {
		dispatch(fetchArticlesStarted());

		try {
			const articles = await axios.get('/articles');
			dispatch(fetchArticlesSuccess(articles.data));
		} catch (e) {
			dispatch(fetchArticlesFailure(e));
		}
	};
}
