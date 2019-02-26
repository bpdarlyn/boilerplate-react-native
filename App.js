import React, { Component } from 'react';
import {
    Text
} from 'react-native';

import { Provider } from 'react-redux';
import Store from './src/stores/Store';

import Seleccion from './src/Seleccion';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Provider store={Store}>
          <Text>
            Holasdf asdasd
          </Text>
        </Provider>
    );
  }
}