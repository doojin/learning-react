import React from 'react'
import { shallow } from 'enzyme'
import ArticlesLoad from './ArticlesLoad'

describe('ArticlesLoad', () => {
  let component

  describe('render', () => {
    beforeEach(() => {
      component = shallow(<ArticlesLoad />)
    })

    test('renders the correct amount of placeholders', () => {
      const placeholders = component.find('ArticlePlaceholder')

      expect(placeholders.length).toEqual(3)
    })

    test('renders placeholders with correct keys', () => {
      const placeholders = component.find('ArticlePlaceholder')

      expect(placeholders.at(0).key()).toEqual('0')
      expect(placeholders.at(1).key()).toEqual('1')
      expect(placeholders.at(2).key()).toEqual('2')
    })
  })
})
