/**
 * Authization View
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class AuthView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.intro}>
          Auth Bro.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry
        />
        <TouchableHighlight
          underlayColor={'#ff0000'}
          onPress={this.props.onSubmit}>
          <Text>
            Fetch
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    height: 40,
    textAlign: 'center',
    marginTop: 50
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

module.exports = AuthView;