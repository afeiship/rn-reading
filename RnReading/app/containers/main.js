import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from '../pages/main/index';
import { View } from 'react-native';

export default class extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({tintColor}) =>{
      return (
        <View style={{ position:'absolute', top:-10 , borderWidth:1, borderColor:'#f00',backgroundColor:'#eee'}}>
          <Icon name="md-home" size={25} color={tintColor}/>
        </View>
      );
    }

  };

  render() {
    return <Main {...this.props} />;
  }
}