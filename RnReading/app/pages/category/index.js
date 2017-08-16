import React from 'react';
import {Button} from 'react-native';

export default class extends React.Component {
    static navigationOptions = {
        title: 'Category',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', {name: 'Jane'})
                }
            />
        );
    }
}