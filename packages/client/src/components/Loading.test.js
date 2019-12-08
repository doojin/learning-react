import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

describe('Loading', () => {
  test('should increase amount of dots', () => {
    const component = shallow(<Loading message="test loading message" maxDots={2}/>)

    expect(component.text()).toEqual('test loading message')

    jest.advanceTimersByTime(150)

    expect(component.text()).toEqual('test loading message.')

    jest.advanceTimersByTime(150)

    expect(component.text()).toEqual('test loading message..')

    jest.advanceTimersByTime(150)

    expect(component.text()).toEqual('test loading message')
  })
})
