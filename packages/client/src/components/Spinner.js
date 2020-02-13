import React from 'react'
import './Spinner.scss'

class Spinner extends React.Component {
  render () {
    return (
      <div className="spinner">
        <div className="spinner-circle"/>
        <div className="spinner-circle"/>
        <div className="spinner-circle"/>
      </div>
    )
  }
}

export default Spinner
