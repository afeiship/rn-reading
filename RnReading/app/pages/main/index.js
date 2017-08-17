import React from 'react';
import {Button, View, Image, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {row, col, box} from 'react-native-styles-flexbox-grid';
import dateFormat from 'dateformat';
import SK from 'react-native-stylekit';
import timeago from 'timeago';
import Icon from 'react-native-vector-icons/Ionicons';

import $http from 'services/http';
import Swiper from 'react-native-swiper';

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
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 5
  },
  top: {
    height: 188
  },
  bottom: {
    height: 368
  },
  left: {
    width: 255,
    padding: 10
  },
  right: {
    width: 100
  },
  footer: {}
});


export default class extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      items: [],
      images: [
        'http://img01.sogoucdn.com/app/a/100520091/20170817110102',
        'http://img03.sogoucdn.com/app/a/100520091/20170817105910',
        'http://img03.sogoucdn.com/app/a/100520091/20170817110225'
      ]
    }
  }

  componentWillMount() {
    this.init();
  }

  init() {
    const date = new Date();
    $http.post('582-2', {
      showapi_timestamp: dateFormat(date, 'yyyymmddHHMMss')
    }).then(resp => {
      this.setState({
        refreshing: false,
        items: resp.pagebean.contentlist
      });
    });
  }

  _onItemPress = inItem => {
    const {navigate} = this.props.navigation;
    navigate('Web', {item: inItem});
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {

    return (
      <TouchableOpacity style={[row.$, row.center, styles.item]} onPress={this._onItemPress.bind(this, item)}>

        <View style={[styles.left]}>
          <View style={[row.$, box.vertical, row.justifyBetween, {height: '100%'}]}>
            <View style={[]}>
              <Text style={[SK.f16]}>{item.title}</Text>
            </View>
            <View style={[row.justifyBetween, row.center, box.horizontal, styles.footer]}>
              <Text style={[SK.f12, SK.c_9]}>
                <Icon name="md-bookmark" size={14} color='#999'/>
                <Text style={[{marginLeft: 3}]}>{item.typeName}</Text>
              </Text>
              <Text style={[SK.f12, SK.c_6]}>
                <Icon name="md-time" size={12} color='#999' iconStyle={{paddingLeft: 3}}>
                  <Text>{timeago(item.date)}</Text>
                </Icon>
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.right]}>
          <Image source={{uri: item.contentImg}} style={[{width: 110, height: 90}, SK.bdr5]}/>
        </View>

      </TouchableOpacity>
    )
  };

  _onRefresh = e => {
    this.setState({refreshing: false}, () => {
      this.init();
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    const {images} = this.state;


    //TODO: statusBar to global:
    return (
      <View style={[row.$, box.vertical]}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={[styles.top]}>
          <Swiper>
            {
              images.map((uri, index) => {
                return <Image style={[SK.wp10, {width: '100%', height: '100%'}]} source={{uri}} key={index}/>
              })
            }
          </Swiper>
        </View>
        <FlatList
          style={[styles.bottom]}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}