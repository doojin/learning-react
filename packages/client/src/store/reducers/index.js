import {
	FETCH_ARTICLES_STARTED,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_FAILURE,
} from '../actions/fetch-articles';

const initialState = {
	articles: [
		{
			id: 0,
			title: 'Default Article'
		}
	],
	loadError: null,
	isLoading: false
};

function reducer(state = initialState, action) {
	switch (action.type) {

		case FETCH_ARTICLES_STARTED:
			return Object.assign({}, state, {
				isLoading: true
			});

		case FETCH_ARTICLES_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				loadError: null,
				articles: action.articles
			});

		case FETCH_ARTICLES_FAILURE:
			return Object.assign({}, state, {
				isLoading: false,
				loadError: action.error
			});

		default:
			return state;
	}
}

export default reducer;