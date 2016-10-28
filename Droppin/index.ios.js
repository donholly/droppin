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
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Droppin extends Component {

  _authenticate = (params) => {
    // Perform login with firebase
  }

  render() {
    return (
      <AuthView
        onSubmit={this._authenticate()}
      />
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
