import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import *as firebase from 'firebase';
import { SignupPage, SigninPage, HomePage, AboutPage } from './application/components'
// import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';

const Routing = StackNavigator({

  signin: {
    screen: SigninPage,
    navigationOptions: () => ({
      title: 'Please identify your self!'
    })
  },
  home: {
    screen: HomePage
  },
  signup: {
    screen: SignupPage,
  },
  // signin: {
  //   screen: SigninPage
  // }











  // Dashboard : {
  //   screen : TabNavigator({
  //     Home: {
  //         screen: HomePage,          
  //       },
  //     About: {
  //       screen: AboutPage,
  //       },
  //   })
  // }
});



export default Routing
