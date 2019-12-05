import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image style={styles.logo} source={require('../assets/test.png')} />
        <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="Next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="Go"
        ref = {(input) => this.passwordInput= input}
        secureTextEntry
        style={styles.input}
        />
        
        <TouchableOpacity style={styles.Loginbutton}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  input: {
    height: 50,
    width: 250,
    backgroundColor: 'rgba(7, 235, 72,0.7)',
    marginBottom: 20,
    color: '#009933',
    paddingHorizontal: 10
  },
  logo: {
    height: 128,
    width: 256,
  },
  Loginbutton: {
    backgroundColor: '#00b33c',
    paddingVertical: 10,
    paddingHorizontal: 50
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '1000',
    Color: '#00b33c'
  }
});