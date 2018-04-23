import React from 'react'

export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <li>{ this.props.speed }</li>
        <li>{ this.props.hasRockets }</li>
        <li>{ this.props.colors }</li>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
