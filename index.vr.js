import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  SpotLight,
  VrButton,
  Scene,
} from 'react-vr';
import Planet from './components/planet';

class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = {
      mercuryHovered: false,
      mercuryRotation: 0,
      venusHovered: false,
      venusRotation: 0,
      earthHovered: false,
      earthRotation: 0,
      moonHovered: false,
      moonRotation: 0,
    }

    this.rotate = this.rotate.bind(this);
    this.mercuryHover = this.mercuryHover.bind(this);
    this.venusHover = this.venusHover.bind(this);
    this.earthHover = this.earthHover.bind(this);
    this.moonHover = this.moonHover.bind(this);
  }

  rotate() {
    this.setState({
      rotation: this.state.rotation + 1,
    });
    requestAnimationFrame(this.rotate);
  }

  mercuryHover(e) {
    this.setState({
      mercuryHovered: !this.state.mercuryHovered,
    });
  }

  venusHover(e) {
    this.setState({
      venusHovered: !this.state.venusHovered,
    });
  }

  earthHover(e) {
    this.setState({
      earthHovered: !this.state.earthHovered,
    });
  }

  moonHover(e) {
    this.setState({
      moonHovered: !this.state.moonHovered,
    });
  }

  render() {
    return (

      <View>

        <Pano source={
          {
            uri: [
              '../static_assets/starfield_rt.jpg',
              '../static_assets/starfield_lf.jpg',
              '../static_assets/starfield_up.jpg',
              '../static_assets/starfield_dn.jpg',
              '../static_assets/starfield_bk.jpg',
              '../static_assets/starfield_ft.jpg',
            ]
          }
        } />

        <SpotLight
          intensity={ 2.5 }
        />

        <View>
          <Model
            onEnter={this.earthHover}
            onExit={this.earthHover}
            style={{
              transform: [
                {translate: [-500, 0, 0]},
                {scale: 0.3},
                {rotateY: this.state.earthRotation},
                {rotateX: 20},
                {rotateZ: -10}
              ],
            }}
            source={{obj:asset('earth.obj'), mtl:asset('earth.mtl')}}
            lit={this.state.earthHovered}
          />
          <Text
            style={{
              fontSize: 1,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {translate: [-20, 5.5, 0]},
                {rotateX: 0},
                {rotateY: 90},
                {rotateZ: 0},
              ],
            }}>
            Earth
          </Text>
        </View>

        <View>
          <Model
            onEnter={this.venusHover}
            onExit={this.venusHover}
            style={{
              transform: [
                {translate: [0, 0, -500]},
                {scale: 0.3},
                {rotateY: this.state.venusRotation},
                {rotateX: 20},
                {rotateZ: -10}
              ],
            }}
            source={{obj:asset('earth.obj'), mtl:asset('venus.mtl')}}
            lit={this.state.venusHovered}
          />
          <Text
            style={{
              fontSize: 1,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {translate: [0, 6.5, -20]},
                {rotateX: 0},
                {rotateY: 0},
                {rotateZ: 0},
              ],
            }}>
            Venus
          </Text>
        </View>

        <View>
          <Model
            onEnter={this.mercuryHover}
            onExit={this.mercuryHover}
            style={{
              transform: [
                {translate: [500, 0, 0]},
                {scale: 0.12},
                {rotateY: this.state.mercuryRotation},
                {rotateX: 20},
                {rotateZ: -10}
              ],
            }}
            source={{obj:asset('earth.obj'), mtl:asset('mercury.mtl')}}
            lit={this.state.mercuryHovered}
          />
          <Text
            style={{
              fontSize: 1,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {translate: [20, 5, 0]},
                {rotateX: 0},
                {rotateY: 270},
                {rotateZ: 0},
              ],
            }}>
            Mercury
          </Text>
        </View>
      </View>
    );
  }
};

export default WelcomeToVR;

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
