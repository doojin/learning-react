import React from 'react'
import { shallow } from 'enzyme'
import Error from './Error'

describe('Error', () => {
  test('renders error message', () => {
    const component = shallow(<Error message="test error" />)

    expect(component.find('.alert').text()).toEqual('test error')
  })
})
