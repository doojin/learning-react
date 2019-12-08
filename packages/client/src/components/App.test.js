import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {

	let component;
	let fetchArticles;

	beforeEach(() => {
		fetchArticles = jest.fn();
	});

	describe('isLoading property is true', () => {

		beforeEach(() => {
			component = shallow(<App isLoading={ true } fetchArticles={ fetchArticles } />);
		});

		test('Loading component is displayed', () => {
			expect(component.find('Loading').exists()).toBe(true);
		});

		test('ArticleList component is hidden', () => {
			expect(component.find('Connect(ArticleList)').exists()).toBe(false);
		});

	});

	describe('isLoading property is false', () => {

		beforeEach(() => {
			component = shallow(<App isLoading={ false } fetchArticles={ fetchArticles } />);
		});

		test('Loading component is hidden', () => {
			expect(component.find('Loading').exists()).toBe(false);
		});

		test('ArticleList component is displayed', () => {
			expect(component.find('Connect(ArticleList)').exists()).toBe(true);
		});

	});

});