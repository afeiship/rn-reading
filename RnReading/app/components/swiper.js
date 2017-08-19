import React from 'react';
import Swiper from 'react-native-swiper';
import {Button, View, Image, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#FFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dotActive: {
    backgroundColor: '#F60',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  pagination: {
    position: 'absolute',
    bottom: 5
  }
});

export default class extends React.PureCompoent {

  static defaultProps = {
    items: []
  };

  _showGallery = uri => {
    alert(uri);
  };

  render() {
    const {items} = this.props;

    return (
      <Swiper
        dot={<View style={styles.dot}/>}
        activeDot={<View style={styles.dotActive}/>}
        paginationStyle={styles.pagination}>
        {
          items.map((uri, index) => {
            return (
              <TouchableOpacity onPress={this._showGallery.bind(this, uri)} key={index}>
                <Image style={[{width: 375, height: 118}]} source={{uri}}/>
              </TouchableOpacity>
            )
          })
        }
      </Swiper>
    );
  }
};