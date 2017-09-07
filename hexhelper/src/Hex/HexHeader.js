import React, { Component } from 'react'

class HexHeader extends Component {
  render () {
    return <div class="hex-header">
      {this.props.selectedHex.label}
    </div>
  }
}

export default HexHeader
