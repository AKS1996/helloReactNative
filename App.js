import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={{alignSelf:'center',textAlign:'center'}}>
        <Text style={{fontSize: 40}}>hello react native</Text>
      </View>
    );
  }
}