import React, { Component } from 'react'
import HexHeader from './Hex/HexHeader.js'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedHex: {label: 'H3',
      terrain: {label: 'Forest (dense)',
        highwayMultiplier: 1,
        roadMultiplier: 1,
        tracklessMultiplier: 0.5,
        navDC: 18,
        forageDC: 14
      }}}
  }
  render () {
    return (
      <div className="dashboard">
        <HexHeader selectedHex={this.state.selectedHex} />
        <div>

        </div>
      </div>
    )
  }
}

export default Dashboard
