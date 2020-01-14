import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

jest.useFakeTimers()

describe('Notification', () => {
  let component

  describe('constructor', () => {
    beforeEach(() => {
      component = shallow(<Notification />)
    })

    test('sets initial state', () => {
      expect(component.state('hidden')).toBe(false)
    })
  })

  describe('componentDidMount', () => {
    describe('duration property is set', () => {
      beforeEach(() => {
        component = shallow(<Notification duration={ 500 } />)
        component.instance().componentDidMount()
      })

      test('hides notification after timeout', () => {
        jest.advanceTimersByTime(199)
        expect(component.state('hidden')).toBe(false)

        jest.advanceTimersByTime(1)
        expect(component.state('hidden')).toBe(true)
      })
    })

    describe('duration property is not set', () => {
      beforeEach(() => {
        component = shallow(<Notification />)
        component.instance().componentDidMount()
      })

      test('not hides notification', () => {
        jest.advanceTimersByTime(1000)
        expect(component.state('hidden')).toBe(false)
      })
    })
  })

  describe('render', () => {
    test('adds correct collection of classes', () => {
      component = shallow(<Notification type={ Notification.type.INFO } />)

      const container = component.find('div')

      expect(container.prop('className')).toEqual('notification alert alert-info')
    })

    test('renders the notification text', () => {
      component = shallow(<Notification text="test notification" />)

      const container = component.find('div')

      expect(container.text()).toEqual('test notification')
    })

    describe('state.hidden is true', () => {
      beforeEach(() => {
        component = shallow(<Notification />)
        component.setState({ hidden: true })
      })

      test('hides component', () => {
        expect(component.find('div').hasClass('notification--hidden')).toBe(true)
      })
    })

    describe('state.hidden is false', () => {
      beforeEach(() => {
        component = shallow(<Notification />)
        component.setState({ hidden: false })
      })

      test('not hides the component', () => {
        expect(component.find('div').hasClass('notification--hidden')).toBe(false)
      })
    })
  })

  describe('hide', () => {
    test('sets hidden property of state to true', () => {
      component = shallow(<Notification/>)
      component.setState({ hidden: false })

      expect(component.state('hidden')).toBe(false)

      component.instance().hide()

      expect(component.state('hidden')).toBe(true)
    })
  })

  describe('containerClassName', () => {
    test('returns correct container class name', () => {
      component = shallow(<Notification type="testType"/>)

      expect(component.instance().containerClassName).toEqual('alert-testType')
    })
  })
})
