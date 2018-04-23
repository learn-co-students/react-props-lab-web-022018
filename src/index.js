import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';
// Spaceship.defaultProps = {   colors: ['black', 'red'], hasRockets: false, speed: "slow" };

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);
