import React from 'react'
import { shallow, mount } from 'enzyme'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ArticleForm } from './ArticleForm'

const getTitleInput = component =>
  component.find('.form-group').at(0).find('input')

const getTextTextarea = component =>
  component.find('.form-group').at(1).find('textarea')

const getForm = component => component.find('form')

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

  describe('form submitted', () => {
    let createArticle

    beforeEach(() => {
      createArticle = jest.fn()
    })

    test('invokes createArticle function', () => {
      const component = shallow(<ArticleForm
        title="test title"
        text="test text"
        createArticle={ createArticle } />)

      getForm(component).simulate('submit', { preventDefault: jest.fn() })

      expect(createArticle).toHaveBeenCalledWith({
        title: 'test title',
        text: 'test text'
      })
    })
  })

  describe('Go back button clicked', () => {
    test('redirects to the article list page', () => {
      const history = createMemoryHistory()

      history.push('/some/dummy/url')

      const component = mount(
        <Router history={ history }>
          <ArticleForm />
        </Router>
      )

      component.find('a[href="/"]').simulate('click', { button: 0 })

      expect(history.location.pathname).toEqual('/')
    })
  })
})
