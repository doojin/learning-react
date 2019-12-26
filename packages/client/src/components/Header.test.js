import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'

describe('Header', () => {
  let fetchArticles
  let component

  beforeEach(() => {
    fetchArticles = jest.fn()
  })

  describe('loading message is not empty', () => {
    beforeEach(() => {
      component = shallow(<Header loadingMessage="test message" fetchArticles={ fetchArticles } />)
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
      component = shallow(<Header fetchArticles={ fetchArticles } />)
    })

    test('Loading message is hidden', () => {
      const loadingComponent = component.find('Loading')

      expect(loadingComponent.exists()).toBe(false)
    })
  })

  describe('error message is not empty', () => {
    beforeEach(() => {
      component = shallow(<Header errorMessage="test error" fetchArticles={ fetchArticles } />)
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
      component = shallow(<Header fetchArticles={ fetchArticles } />)
    })

    test('Error message is hidden', () => {
      const errorComponent = component.find('Error')

      expect(errorComponent.exists()).toBe(false)
    })
  })
})
