import React from 'react'
import { shallow } from 'enzyme'
import { ArticleList } from './ArticleList'

describe('ArticleList', () => {
  describe('render', () => {
    test('creates list element for every article', () => {
      const articles = [
        {
          id: 1,
          title: 'test title 1',
          text: 'test text 1'
        },
        {
          id: 2,
          title: 'test title 2',
          text: 'test text 2'
        }
      ]

      const component = shallow(<ArticleList articles={articles}/>)

      const articleElements = component.find('Article')

      expect(articleElements).toHaveLength(2)

      expect(articleElements.at(0).key()).toEqual('1')
      expect(articleElements.at(0).prop('title')).toEqual('test title 1')
      expect(articleElements.at(0).prop('text')).toEqual('test text 1')

      expect(articleElements.at(1).key()).toEqual('2')
      expect(articleElements.at(1).prop('title')).toEqual('test title 2')
      expect(articleElements.at(1).prop('text')).toEqual('test text 2')
    })
  })
})
