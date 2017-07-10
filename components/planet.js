import React from 'react';
import { Model, Text } from 'react-vr';

class Planet extends React.Component {

  render() {
    return (
      <Model
        style={{
          transform: [
            {translate: [-500, 0, -70]},
            {scale: 0.15},
            {rotateY: 0},
            {rotateX: 20},
            {rotateZ: -10}
          ],
        }}
        source={{obj:asset('../static_assets/moon.obj'), mtl:asset('../static_assets/moon.mtl')}}
        lit={true}
      />
    );
  }
};

export default Planet;