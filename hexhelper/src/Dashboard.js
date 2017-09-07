import React, { Component } from 'react'
import HexHeader from './Hex/HexHeader.js'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedHex: null}
  }
  render () {
    return (
      <div className="dashboard">
        <HexHeader hex={this.state.selectedHex} />
      </div>
    )
  }
}

export default Dashboard
