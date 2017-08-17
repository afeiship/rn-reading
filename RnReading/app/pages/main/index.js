import React from 'react';
import {Button, View, Image, Text, FlatList, StyleSheet} from 'react-native';
import $http from 'services/http';
import {row, col, box} from 'react-native-styles-flexbox-grid';
import dateFormat from 'dateformat';
import SK from 'react-native-stylekit';
import timeago from 'timeago';

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
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 5
  },
  left: {
    width: 255,
    padding: 10
  },
  right: {
    width: 120
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
      refreshing: false,
      items: []
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
        items: resp.pagebean.contentlist
      });
    });
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {
    return (
      <View style={[row.$, row.center, styles.item]}>

        <View style={[styles.left]}>
          <View style={[row.$, box.vertical, row.justifyBetween, {height: '100%'}]}>
            <View style={[]}>
              <Text style={[SK.f16]}>{item.title}</Text>
            </View>
            <View style={[row.justifyBetween, box.horizontal, styles.footer]}>
              <Text style={[SK.f12, SK.c_9]}>分类：{item.typeName}</Text>
              <Text style={[SK.f12, SK.c_6]}>{timeago(item.date)}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.right,]}>
          <Image source={{uri: item.contentImg}} style={[{width: 110, height: 110}, SK.bdr5]}/>
        </View>

      </View>
    )
  };

  _onRefresh = e => {
    this.init();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <FlatList
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
        data={this.state.items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}