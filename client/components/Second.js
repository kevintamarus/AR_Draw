import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Second extends React.Component {
  static navigationOptions = {
    title: "Second Screen",
  };
  render() {
    return (
      <View>
        <Text>This is the Second Screen</Text>
      </View>
    );
  }
}

export default Second;