import React from 'react';
import {
  StyleSheet,
  WebView,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
});


export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.item.title,
    tabBarIcon: ({tintColor}) =>
      <Icon name="md-home" size={25} color={tintColor}/>,
    headerRight: (
      <Icon.Button
        name="md-share"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        onPress={() => {
          alert('pressed!')
        }}
      />
    )
  });

  render(){
    const {navigation} = this.props;
    const { url } = navigation.state.params.item;
    return (
      <WebView source={{ uri: url}} style={{ width:'100%', height:'100%'}} />
    )
  }
}


