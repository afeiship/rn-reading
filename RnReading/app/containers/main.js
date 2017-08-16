import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from '../pages/main/index';

export default class extends React.Component {
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>
    };

    render() {
        return <Main {...this.props} />;
    }
}