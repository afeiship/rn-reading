import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import PhotoView from 'react-native-photo-view';

export default class extends React.PureComponent{
  render(){
    const {navigation} = this.props;
    const { uri } = navigation.state.params;

    return (
      <PhotoView
        source={{uri}}
        minimumZoomScale={1}
        maximumZoomScale={3}
        androidScaleType="center"
        onLoad={() => console.log("Image loaded!")}
        style={{width: '100%', height: '100%'}} />
    )
  }
}