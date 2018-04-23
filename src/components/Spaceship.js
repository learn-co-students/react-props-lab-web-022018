// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    // let lis = this.props.colors.map{color => }
    return (
      <div class="spaceship">
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Does it have rockets? {this.props.hasRockets}</p>
        <ul>Colors: {this.props.colors.join(", ")}</ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
