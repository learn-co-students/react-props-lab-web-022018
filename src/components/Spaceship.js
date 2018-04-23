import React from 'react'
// Code The Spaceship Component Here
class Spaceship extends React.Component{
  render(){
    const { name, speed, hasRockets, colors } = this.props;
    return(
      <div>
        <h1>Name: {name} </h1>
        <p>Speed: {speed} </p>
        <p>Has Rockets: {hasRockets ? "Yes" : "No"} </p>
        <p>Colors: {colors.map((color)=><li>{color}</li>)} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false,
  speed: 'slow'
};

export default Spaceship
