
import React, { Component } from 'react';
;import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Test from './Test';
import Second from './Second';
import { StackNavigator } from 'react-navigation';




export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Currently on App</Text>
        {/* <Button onPress={() => navigate('Test')} title="Go to Test page" /> */}
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
  Test: { screen: Test },
  Second: { screen: Second }
});
