import React, { Component } from 'react'
import './HexHeader.css'

class HexHeader extends Component {
  render () {
    return <header>
      <h2>
        {this.props.selectedHex.label}
      </h2>
      <img src={'/forestHex.png'} alt={'Forest Icon'} height={'18'} width={'16'} className="terrain-icon"/>
      <h2>{this.props.selectedHex.terrain.label}</h2>
      <table className={'terrain-stats'}>
        <tr>
          <td><strong>Highway: x{this.props.selectedHex.terrain.highwayMultiplier}</strong></td>
          <td><strong>Road/Trail: x{this.props.selectedHex.terrain.roadMultiplier}</strong></td>
          <td><strong>Road/Trail: x{this.props.selectedHex.terrain.roadMultiplier}</strong></td>
          <td><strong>Trackless: x{this.props.selectedHex.terrain.tracklessMultiplier}</strong></td>
          <td><strong>Navigation: DC {this.props.selectedHex.terrain.navDC}</strong></td>
          <td><strong>Forage DC: {this.props.selectedHex.terrain.forageDC}</strong></td>
        </tr>
      </table>
    </header>
  }
}

export default HexHeader
