import React, { Component } from 'react';
// import { Container, Header, Content, Button, Text } from 'native-base';
import { Text, View } from 'react-native';

export default class HomePage extends Component {

  // static navigationOptions = {
  //   header: null,
  // };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}