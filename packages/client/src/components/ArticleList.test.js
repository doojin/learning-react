import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList } from './ArticleList';

describe('ArticleList', () => {

	describe('render', () => {

		test('creates list element for every article', () => {
			const articles = [
				{
					id: 1,
					title: 'test title 1'
				},
				{
					id: 2,
					title: 'test title 2'
				}
			];

			const component = shallow(<ArticleList articles={ articles } />);

			const articleElements = component
				.find('ul')
				.find('li');

			expect(articleElements).toHaveLength(2);

			expect(articleElements
				.at(0)
				.find('table')
				.find('tr')
				.at(0)
				.find('td')
				.at(1)
				.text()).toEqual('1');

			expect(articleElements
				.at(0)
				.find('table')
				.find('tr')
				.at(1)
				.find('td')
				.at(1)
				.text()).toEqual('test title 1');

			expect(articleElements
				.at(1)
				.find('table')
				.find('tr')
				.at(0)
				.find('td')
				.at(1)
				.text()).toEqual('2');

			expect(articleElements
				.at(1)
				.find('table')
				.find('tr')
				.at(1)
				.find('td')
				.at(1)
				.text()).toEqual('test title 2');
		});

	});

});