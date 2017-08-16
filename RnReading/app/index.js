import {ReduxAppBase} from 'react-native-redux-boot';
import AppContainer from './containers/app';
import React from 'react';

export default class extends ReduxAppBase {

  static initialState() {
    return {
      memory: {
        test: 100,
      }
    }
  }

  render() {
    return <AppContainer />
  }

}