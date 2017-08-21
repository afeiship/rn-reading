import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';
import SK from 'react-native-stylekit';

export default class extends React.Component {
  static navigationOptions = {
    showLabel:null,
    tabBarIcon: ({tintColor}) =>{
      return (
        <View style={[{ position:'absolute', top:-16 , padding:20, borderRadius:100, backgroundColor:'#132431'}]}>
          <Text style={[SK.c_f,SK.tc]}><Icon name="md-add" size={25} color='#fff'/></Text>
          <Text style={[SK.c_f,SK.tc,SK.f10]}>发布</Text>
        </View>
      );
    }
  };

  render() {
    return null;
  }
}