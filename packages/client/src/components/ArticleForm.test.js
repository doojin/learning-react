import React from 'react'
import { shallow } from 'enzyme'
import { ArticleForm } from './ArticleForm'

describe('ArticleForm', () => {
  describe('render', () => {
    test('sets title input\'s value', () => {
      const component = shallow(<ArticleForm title="test title" />)

      const titleInput = component.find('.form-group').at(0).find('input')

      expect(titleInput.props().value).toEqual('test title')
    })

    test('sets text textarea\'s value', () => {
      const component = shallow(<ArticleForm text="test text" />)

      const textTextarea = component.find('.form-group').at(1).find('textarea')

      expect(textTextarea.props().value).toEqual('test text')
    })
  })
})
