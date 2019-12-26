jest.mock('../store/actions/fetchArticles')

import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

describe('App', () => {
  let fetchArticles
  let component

  beforeEach(() => {
    fetchArticles = jest.fn()
  })

  describe('loading message is not empty', () => {
    beforeEach(() => {
      component = shallow(<App loadingMessage="test message" fetchArticles={ fetchArticles } />).dive()
    })

    test('Loading message is shown', () => {
      const loadingComponent = component.find('Loading')

      expect(loadingComponent.exists()).toBe(true)
    })

    test('correct message is displayed', () => {
      const loadingComponent = component.find('Loading')

      expect(loadingComponent.prop('message')).toEqual('test message')
    })
  })

  describe('loading message is empty', () => {
    beforeEach(() => {
      component = shallow(<App fetchArticles={ fetchArticles } />).dive()
    })

    test('Loading message is hidden', () => {
      const loadingComponent = component.find('Loading')

      expect(loadingComponent.exists()).toBe(false)
    })
  })

  describe('error message is not empty', () => {
    beforeEach(() => {
      component = shallow(<App errorMessage="test error" fetchArticles={ fetchArticles } />).dive()
    })

    test('Error message is shown', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.exists()).toBe(true)
    })

    test('correct message is displayed', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.prop('message')).toEqual('test error')
    })
  })

  describe('error message is empty', () => {
    beforeEach(() => {
      component = shallow(<App fetchArticles={ fetchArticles } />).dive()
    })

    test('Error message is hidden', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.exists()).toBe(false)
    })
  })
})
