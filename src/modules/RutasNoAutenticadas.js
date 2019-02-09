import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Authentication from './Login/Authentication';
import SignUp from './Login/SignUp';
import SignUpPhone from './Login/SignUpPhone';

const RutasNoAutenticadas = StackNavigator(
  {
    Authentication: {
      screen: Authentication,
      headerMode: 'none',
      header: null,
      navigationOptions: {
          header: null
      }
    },
    SignUp: {
      screen: SignUp,
    },
    SignUpPhone: {
      screen: SignUpPhone,
      header: {
        visible: true
      },
      headerTintColor: '#000000',
      navigationOptions: {
      }
    }
  },
  {
    header: {
      visible: false
    }
  },
);

export { RutasNoAutenticadas };
