import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Container, Header, Content, Form, Item, Button, Input, Label, Text} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SK from 'react-native-stylekit';

export default class extends React.PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '用户登录'
  });

  render() {
    return (
      <Container>
        <Content style={[SK.bg_f]}>
          <Form>
            <Item fixedLabel>
              <Label>用户名</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>密码</Label>
              <Input />
            </Item>
            <View style={[SK.p10]}>
              <Button primary block>
                <Text>登录</Text>
              </Button>
              <Button primary bordered block style={[SK.mt10]}>
                <Text>注册</Text>
              </Button>
              <View style={[SK.blank2,SK.bg_9,SK.mt10,SK.wp10]} />
              <Button primary block style={[SK.mt50]}>
                <Ionicon name="logo-twitter" size={18} color="#007aff"/>
                <Text>微信登录</Text>
              </Button>

            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}