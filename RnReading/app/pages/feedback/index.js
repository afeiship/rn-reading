import React from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';

import SK from 'react-native-stylekit';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../../utils/ToastUtil';

let feedbackText;

export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '建议',
    tabBarIcon: ({tintColor}) => {
      return <Icon name="md-thumbs-up" size={25} color={tintColor}/>
    }
  });

  componentDidMount() {
    feedbackText = '';
    this.props.navigation.setParams({handleCheck: this.onActionSelected});
  }

  onActionSelected = () => {
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      ToastUtil.showShort('请填写建议内容哦~');
    } else {
      const feedback = AV.Object.new('Feedback');
      feedback.set('manufacturer', DeviceInfo.getManufacturer());
      feedback.set('system', DeviceInfo.getSystemName());
      feedback.set('deviceVersion', DeviceInfo.getSystemVersion());
      feedback.set('deviceModel', DeviceInfo.getModel());
      feedback.set('appVersion', DeviceInfo.getVersion());
      feedback.set('feedback', feedbackText);
      feedback.save();
      ToastUtil.showShort('您的问题已反馈，我们会及时跟进处理');
      this.textInput.clear();
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <Container>
        <Content style={[SK.p10, SK.bg_f]}>
          <TextInput
            ref={(ref) => {
              this.textInput = ref;
            }}
            style={[styles.textInput]}
            placeholder="请写下您宝贵的意见或建议，与iReading一起进步！"
            placeholderTextColor="#aaaaaa"
            underlineColorAndroid="transparent"
            numberOfLines={200}
            multiline
            autoFocus
            onChangeText={(text) => {
              feedbackText = text;
            }}
          />
          <Button primary block>
            <Text> 提交 </Text>
          </Button>
          <Text style={[SK.c_9,SK.f14,SK.mt10,SK.tl]}>
            您可以想说啥就说啥
          </Text>
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
  textInput: {
    height: 300,
    fontSize: 16
  }
});
