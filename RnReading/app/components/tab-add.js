import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import NxDebug from 'next-debug';
import {ReduxAppBase} from 'react-native-redux-boot';


const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    textAlign: 'center',
    fontSize: 9,
    marginBottom: 1.5,
    backgroundColor: '#f4f4f4',
  }
});

export default class extends React.PureComponent {
  _onPress = e => {
    const {
      jumpToIndex
    } = this.props;

    if (e == 2) {
      ReduxAppBase.command('model:show');
    } else {
      jumpToIndex(e);
    }
  };

  _getLabel = e => {
    const {index} = e;
    const {getLabel} = this.props;
    if (index == 2) {
      return null;
    }
    return getLabel(e);
  };

  render() {
    const {
      navigation,
      renderIcon,
      getLabel,
      activeTintColor,
      inactiveTintColor,
    } = this.props;


    const {
      routes
    } = navigation.state;

    return (
      <Animated.View style={styles.tabbar}>
        {routes && routes.map((route, index) => {
          const focused = index == 2 || index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;
          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={styles.tab}
              onPress={() => this._onPress(index)}
            >
              <View style={[styles.tab, {backgroundColor: '#fff'}]}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
                <Animated.Text style={[styles.label]}>{
                  this._getLabel({
                    route,
                    index,
                    focused,
                    tintColor
                  })
                }</Animated.Text>
              </View>

            </TouchableWithoutFeedback>
          );
        })}

      </Animated.View>
    );
  }
}