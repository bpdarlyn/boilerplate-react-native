import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { StackHome } from './Principal/StackHome';

const RutasAutenticadas = StackNavigator(
  {
    Home: {
      screen: StackHome,
    }
  },
  {
    headerMode: 'none',
  },
);

export { RutasAutenticadas };
