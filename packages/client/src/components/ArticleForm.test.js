import React from 'react'
import { shallow } from 'enzyme'
import { ArticleForm } from './ArticleForm'

const getTitleInput = component =>
  component.find('.form-group').at(0).find('input')

const getTextTextarea = component =>
  component.find('.form-group').at(1).find('textarea')

describe('ArticleForm', () => {
  describe('render', () => {
    test('sets title input\'s value', () => {
      const component = shallow(<ArticleForm title="test title" />)

      expect(getTitleInput(component).props().value).toEqual('test title')
    })

    test('sets text textarea\'s value', () => {
      const component = shallow(<ArticleForm text="test text" />)

      expect(getTextTextarea(component).props().value).toEqual('test text')
    })
  })

  describe('article title is changed', () => {
    let updateTitle

    beforeEach(() => {
      updateTitle = jest.fn()
    })

    test('invokes updateTitle function', () => {
      const component = shallow(<ArticleForm updateTitle={ updateTitle }/>)

      getTitleInput(component).simulate('change', {
        target: {
          value: 'test title'
        }
      })

      expect(updateTitle).toHaveBeenCalledWith('test title')
    })
  })

  describe('article text is changed', () => {
    let updateText

    beforeEach(() => {
      updateText = jest.fn()
    })

    test('invokes updateText function', () => {
      const component = shallow(<ArticleForm updateText={ updateText }/>)

      getTextTextarea(component).simulate('change', {
        target: {
          value: 'test text'
        }
      })

      expect(updateText).toHaveBeenCalledWith('test text')
    })
  })
})
