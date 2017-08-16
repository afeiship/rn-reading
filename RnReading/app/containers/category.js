import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../pages/category/index';

export default class extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '分类',
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-pricetags" size={25} color={tintColor}/>,
        headerRight: navigation.state.params !== undefined && navigation.state.params.isFirst
            ? null
            : <Icon.Button
                name="md-checkmark"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.handleCheck();
                }}
            />
    });

    render() {
        return <Category {...this.props} />;
    }
}