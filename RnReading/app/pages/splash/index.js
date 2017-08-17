import React from 'react';
import {Dimensions, Image, Animated, Alert} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import RnSplash from 'react-native-splash-screen';
import splashImg from 'images/splash.jpg';
import $http from 'services/http';


class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onLoad = e => {
    Alert.alert('提示', `test is `);
    $http.post('582-2',{
      showapi_timestamp:'20170816231957'
    }).then(resp=>{
      console.log(resp);
    });
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
