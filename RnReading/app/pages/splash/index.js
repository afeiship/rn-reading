import React from 'react';
import {Dimensions, Image, Animated, Alert} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import RnSplash from 'react-native-splash-screen';
import splashImg from 'images/splash.jpg';
import * as WeChat from 'react-native-wechat';


export default class extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onLoad = e => {
    NavigationUtil.reset(this.props.navigation, 'Home');
    alert(WeChat);
  };

  render() {
    return (
      <RnSplash onLoad={this._onLoad} duration={{ }}>
        <Image source={splashImg} style={{width: 375, height: 667}}/>
      </RnSplash>
    );
  }
}