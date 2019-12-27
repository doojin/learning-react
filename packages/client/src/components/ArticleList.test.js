import React from 'react'
import { shallow, mount } from 'enzyme'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ArticleList } from './ArticleList'

describe('ArticleList', () => {
  let component

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

      component = shallow(<ArticleList articles={articles}/>)

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

  describe('new article creation button is clicked', () => {
    test('redirects to the article creation form', () => {
      const history = createMemoryHistory()

      component = mount(
        <Router history={ history }>
          <ArticleList articles={[]} />
        </Router>
      )

      const newArticleButton = component.find('a[href="/create"]')

      newArticleButton.simulate('click', { button: 0 })
      expect(history.location.pathname).toBe('/create')
    })
  })

  describe('articles are loading', () => {
    beforeEach(() => {
      component = shallow(<ArticleList articles={[]} isLoading={ true } />)
    })

    test('articles placeholder is shown', () => {
      const placeholderComponent = component.find('ArticlePlaceholder')

      expect(placeholderComponent.exists()).toBe(true)
    })
  })

  describe('articles are not loading', () => {
    beforeEach(() => {
      component = shallow(<ArticleList articles={[]} />)
    })

    test('articles placeholder is hidden', () => {
      const placeholderComponent = component.find('ArticlePlaceholder')

      expect(placeholderComponent.exists()).toBe(false)
    })
  })

  describe('error during articles load', () => {
    beforeEach(() => {
      component = shallow(<ArticleList articles={[]} loadError="test error" />)
    })

    test('error is shown', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.exists()).toBe(true)
      expect(errorComponent.prop('message')).toEqual('test error')
    })
  })

  describe('no error during articles load', () => {
    beforeEach(() => {
      component = shallow(<ArticleList articles={[]} />)
    })

    test('error is hidden', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.exists()).toBe(false)
    })
  })
})
