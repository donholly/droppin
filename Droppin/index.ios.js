/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
import React, { Component } from 'react';
const AuthView = require('./components/AuthView');
import {
  AppRegistry,
  AppState,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class Droppin extends Component {

  _authenticate = (params) => {
    // Perform login with firebase
  }


  state = {
    appState: AppState.currentState,
    markers: []
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({
          appState: this.state.appState,
          markers: [{
            latlng: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            title: "Matt's",
            description: "h4ck$",
          }]
        });
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

  };

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  };

  _handleAppStateChange = (appState) => {
    this.setState({
      appState: appState,
      markers: this.state.markers
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          >

          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}

        </MapView>
        <AuthView
          onSubmit={this._authenticate()}
        />
      </View>
    );
  }
}

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBR_6TfQEONL2aEr7kV5wPmu3XacDlh-hA",
  authDomain: "droppin-53b8c.firebaseapp.com",
  databaseURL: "https://droppin-53b8c.firebaseio.com",
  storageBucket: "droppin-53b8c.appspot.com",
  messagingSenderId: "70534211132"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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

AppRegistry.registerComponent('Droppin', () => Droppin);
