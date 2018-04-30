import React from 'react'

class Spaceship extends React.Component{
  render(){
    return(
      <div>
      <li>{this.props.name}</li>
      <li>{this.props.speed}</li>
      <li>{this.props.hasRockets}</li>
      <li>{this.props.colors}</li>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  speed:"slow",
  hasRockets:false,
  colors:['black','red']
}

export default Spaceship;
