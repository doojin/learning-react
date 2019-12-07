jest.mock('axios');
import { fetchArticles } from './fetch-articles';
import axios from 'axios';

describe('fetch articles action', () => {

	let dispatch;

	beforeEach(() => {
		dispatch = jest.fn();
	});

	test('dispatches FETCH_ARTICLES_STARTED event', async () => {
		await fetchArticles()(dispatch);

		expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_ARTICLES_STARTED' });
	});

	describe('fetches articles successfully', () => {

		let articles;

		beforeEach(() => {
			articles = [
				{ title: 'test article' }
			];

			axios.get.mockReturnValue({
				data: articles
			});
		});

		test('dispatches FETCH_ARTICLES_SUCCESS event', async () => {
			await fetchArticles()(dispatch);

			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_ARTICLES_SUCCESS',
				payload: articles
			});
		});

	});

	describe('articles fetch fails', () => {

		beforeEach(() => {
			axios.get.mockRejectedValue('test error');
		});

		test('dispatches FETCH_ARTICLES_FAILURE event', async () => {
			await fetchArticles()(dispatch);

			expect(dispatch).toHaveBeenCalledWith({
				type: 'FETCH_ARTICLES_FAILURE',
				payload: 'test error'
			});
		});

	});

});