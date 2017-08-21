import React from 'react';
import {Button, View, Image, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {row, col, box} from 'react-native-styles-flexbox-grid';
import dateFormat from 'dateformat';
import SK from 'react-native-stylekit';
import timeago from 'timeago';
import Icon from 'react-native-vector-icons/Ionicons';

import $http from 'services/http';
import Swiper from 'react-native-swiper';
import NxDebug from 'next-debug';
import {TabView} from 'react-navigation';
import TabAdd from 'components/tab-add';

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
    height: 118
  },
  bottom: {
    height: 438
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


export default class extends React.PureComponent {

  static navigationOptions = {
    title: 'Main'
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      items: [],
      images: [
        'https://gw.alicdn.com/imgextra/i4/185/TB2kUGlaxOGJuJjSZFhXXav4VXa_!!185-0-luban.jpg_q50.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
        'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
        'https://img.alicdn.com/imgextra/i1/61/TB2I8oQXlfkJKJjSspeXXbgPFXa_!!61-0-luban.jpg_q50.jpg',
        'https://img.alicdn.com/imgextra/i1/53/TB2WKhEahWGJuJjSZFMXXauRFXa_!!53-0-luban.jpg_q50.jpg',
        'https://gw.alicdn.com/imgextra/i1/169/TB2Ii.lXpZZJ1JjSZFEXXXUlXXa_!!169-0-luban.jpg_q50.jpg',
        'https://gw.alicdn.com/imgextra/i3/126/TB251VBXNuGJuJjSZPiXXcqOpXa_!!126-0-luban.jpg_q50.jpg',
        'https://gw.alicdn.com/imgextra/i3/32/TB2oIzUXBjkJKJjSspfXXc2tXXa_!!32-0-luban.jpg_q50.jpg'
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

    NxDebug.alert(
      'navigate:',
      navigate
    );
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
    this.setState({refreshing: true}, () => {
      setTimeout(() => {
        this.init();
      }, 1000)
    });
  };

  _showGallery = uri => {
    const {navigate} = this.props.navigation;
    navigate('gallery', {uri});
    // alert('show gallery!')
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
          <Swiper
            dot={<View style={{
              backgroundColor: '#FFF',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}/>}
            activeDot={<View style={{
              backgroundColor: '#F60',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}/>}
            paginationStyle={{
              position: 'absolute',
              bottom: 5
            }}>
            {
              images.map((uri, index) => {
                return (
                  <TouchableOpacity onPress={this._showGallery.bind(this, uri)} key={index}>
                    <Image style={[{width: 375, height: 118}]} source={{uri}}/>
                  </TouchableOpacity>
                )
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