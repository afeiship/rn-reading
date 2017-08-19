import {ReduxAppBase} from 'react-native-redux-boot';
import AppContainer from './containers/app';
import React from 'react';

export default class extends ReduxAppBase {

  static initialState() {
    return {
      memory: {
        navigation: null
      }
    }
  }

  render() {
    return <AppContainer />
  }

}