import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Test extends React.Component {
  static navigationOptions = {
    title: "Test Screen",
  };
  render() {
    return (
      <View>
        <Text>This is the Test Screen</Text>
      </View>
    );
  }
}

export default Test;