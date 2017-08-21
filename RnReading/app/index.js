import {ReduxAppBase} from 'react-native-redux-boot';
import AppContainer from './containers/app';
import React from 'react';
import {Root,Fab,Icon,Button} from 'native-base';



export default class extends ReduxAppBase {

  static displayName = 'RnReading';

  static initialState() {
    return {
      memory: {
        navigation: null
      }
    }
  }

  render() {
    return (
      <Root>
        <Button
          success
          style={{ bottom:20, left:'50%', transform:[{ translateX:-25}], borderRadius:200, padding:40, position:'absolute',zIndex:100 }}
          position="bottomRight">
          <Icon name="add" />
        </Button>
        <AppContainer />
      </Root>
    )
  }

}