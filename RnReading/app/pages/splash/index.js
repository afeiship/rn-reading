import React from 'react';
import {Dimensions, Image, Animated} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import RnSplash from 'react-native-splash-screen';
// import splashImg from 'images/splash.jpg';
import splashImg from '../../assets/images/splash.jpg';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;



class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onLoad = e => {
    NavigationUtil.reset(this.props.navigation, 'Home');
  };

  render() {
    return (
      <RnSplash onLoad={this._onLoad} duration={{move: 2000}}>
        <Image source={splashImg} style={{width: 375, height: 667}}/>
      </RnSplash>
    );
  }
}

export default Splash;
