// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1> {this.props.name} </h1>
        <h3>Speed: {this.props.speed}</h3>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

export default Spaceship;
