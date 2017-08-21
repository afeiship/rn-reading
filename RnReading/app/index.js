import {ReduxAppBase} from 'react-native-redux-boot';
import AppContainer from './containers/app';
import React from 'react';
import {Root, Fab, Icon, Button, Text,Grid,Row,Col} from 'native-base';

import Modal from 'react-native-modalbox';


export default class extends ReduxAppBase {

  static displayName = 'RnReading';

  static initialState() {
    return {
      memory: {
        navigation: null
      }
    }
  }

  componentWillMount() {
    ReduxAppBase.onCommand('model:show', () => {
      this.refs.md.open();
    });
  }

  _closeMd = e =>{
    this.refs.md.close();
  };

  render() {
    return (
      <Root>
        <Modal ref="md"
               animationDuration={300}
               backdropOpacity={0.2}
               position="bottom" style={{height: 200}}>
            <Button onPress={this._closeMd} transparent style={{ position:'absolute', bottom: 220, padding:0, left:'50%', transform:[{ translateX:-45}]}}>
              <Icon name='close-circle' style={{ fontSize: 50, color:'#fff' }} />
            </Button>
            <Grid>
              <Col><Text>test1</Text></Col>
              <Col><Text>test1</Text></Col>
              <Col><Text>test1</Text></Col>
            </Grid>
        </Modal>
        <AppContainer />
      </Root>
    )
  }

}