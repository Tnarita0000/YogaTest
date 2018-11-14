/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ backgroundColor: '#32bfca', padding: '10%'  }}>
        <Text style={{ marginVertical: 14 }}>Embark on a 30-day journey called {journey.JourneyName} that includes:</Text>
          {journey.games.map(gameId => (
            <Text key={gameId} style={{ fontFamily: 'Saira-SemiBold', marginBottom: 4 }}>• {Helper.assessObject(props.games.data, 'gameId', gameId).name}</Text>
          ))}
        <Text style={{ textAlign: 'center', marginTop: 12, marginBottom: 34 }}>All in just 15 mins a day!</Text>
        <TouchableOpacity onPress={() => {
          const type = props.journeys.currentJourney ? props.journeys.currentJourney.type : journey.type;
          props.goToJourney(type, props.navigator);
        }}>
          <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 222, height: 40, borderRadius: 18, backgroundColor: 'white' }}>
            <Text>{props.journeys.currentJourney !== null ? 'CONTINUE JOURNEY' : 'START JOURNEY'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
