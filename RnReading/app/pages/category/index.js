import React from 'react';
import $http from 'services/http';
import dateFormat from 'dateformat';
import {Button, View, Image, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {row, col, box} from 'react-native-styles-flexbox-grid';
import SK from 'react-native-stylekit';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  cRed: {
    borderWidth: 1,
    borderColor: '#f00'
  },
  cGreen: {
    borderWidth: 1,
    borderColor: '#0f0'
  },
  cBlue: {
    borderWidth: 1,
    borderColor: '#00f'
  },
  item: {
    width:'33.33%',
    height:60,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#eee'
  }
});

export default class extends React.Component {
  static navigationOptions = {
    title: 'Category',
  };

  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    const date = new Date();
    $http.post('582-1', {
      showapi_timestamp: dateFormat(date, 'yyyymmddHHMMss')
    }).then(resp => {
      this.setState({
        items: resp.typeList
      });
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={[ row.$, row.wrap ]}>
        {
          this.state.items.map((item,index)=>{
            return (
              <TouchableOpacity key={index} style={[{paddingLeft: 3}, styles.item]}>
                <View style={[row.$, row.center, SK.pl10, { height:'100%'}]}>
                  <Icon name="md-star-outline" size={12} color='#999' />
                  <View style={[ SK.ml10 ]}><Text>{item.name}</Text></View>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    );
  }
}