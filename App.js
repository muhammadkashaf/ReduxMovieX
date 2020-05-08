import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Home from './app/containers/Home';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <Home />
     
    );
  }
}
