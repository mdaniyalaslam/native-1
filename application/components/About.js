import React, { Component } from 'react';
// import { Container, Header, Content, Button, Text } from 'native-base';
import { Text, View } from 'react-native';

export default class AboutPage extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
    );
  }
}