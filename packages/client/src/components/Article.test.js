import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'

describe('Article', () => {
  test('renders title', () => {
    const component = shallow(<Article title="test title" />)

    expect(component.find('.card-header').text()).toEqual('test title')
  })

  test('renders text', () => {
    const component = shallow(<Article text="test text" />)

    expect(component.find('.card-body').text()).toEqual('test text')
  })
})
