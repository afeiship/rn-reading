import React from 'react';
import {StyleSheet, Image,  Linking, View} from 'react-native';
import { Container, Header, Thumbnail, Content,Button, List, ListItem, Text,Separator, Icon, Left, Body, Right, Switch } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import DeviceInfo from 'react-native-device-info';

const SHOW_API = 'https://www.showapi.com';
const READING_REPO = 'https://github.com/attentiveness/reading';

const aboutLogo = require('../../img/about_logo.png');

export default class extends React.Component {
  static navigationOptions = {
    title: '关于',
    tabBarIcon: ({ tintColor }) =>{
      return <Ionicon name="md-information-circle" size={25} color={tintColor} />
    }
  };

  render() {
    return (
      <Container style={{ backgroundColor:'#fff'}}>
        <Content>
          <List>
            <ListItem>
              <Thumbnail circle size={80} source={{ uri: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg' }} />
              <Body>
              <Text>afeiship</Text>
              <Text note>Its time to build an app.</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Ionicon name="ios-code" size={40} />
                </Button>
              </Right>
            </ListItem>

            <Separator bordered>
              <Text>基本设置</Text>
            </Separator>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
              <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
              <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
              <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 110,
    height: 110,
    marginTop: 50
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    color: '#aaaaaa',
    marginTop: 5
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#313131',
    marginTop: 10
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4e4e4e'
  },
  disclaimerContent: {
    flexDirection: 'column'
  },
  disclaimer: {
    fontSize: 14,
    textAlign: 'center'
  },
  bottomContainer: {
    alignItems: 'center'
  }
});
