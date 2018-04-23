import React from 'react';
// import ReactDOM from 'react-dom';

// Code The Spaceship Component Here
// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

class Spaceship extends React.Component{
  render(){
    return (
      <div>
      <p>Name:{this.props.name}</p>
      <p>Speed:{this.props.speed}</p>
      <p>Rockets:{this.props.hasRockets ? "Yes" : "No"}</p>
      <p>Colors:{this.props.colors.join(", ")}</p>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  colors: ['black', 'red'],
  speed: "slow",
  hasRockets: false
};

export default Spaceship;
