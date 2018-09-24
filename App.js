/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
        <View style={styles.testStyle}>
          <View style={{flex:1, backgroundColor:'red'}}>
            <Text>内容</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  testStyle: {
    height:100,
    backgroundColor: 'blue',
    padding: 5,
    alignItems: 'center'
  },
});
