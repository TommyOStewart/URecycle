import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class Signup extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image style={styles.logo} source={require('../DanStuff/test.png')}/>
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
        returnKeyType="Next"
        ref = {(input) => this.passwordInput= input}

        style={styles.input}
        />

        <TextInput
        placeholder="Password Again"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="Go"
        ref = {(input) => this.passwordInput= input}
        style={styles.input}
        />

        <TouchableOpacity style={styles.SignUpbutton}>
        <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignUpbutton}>
        <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    
  },
  input: {
    height: 50,
    width: 250,
    backgroundColor: 'rgba(7, 235, 72,0.7)',
    margin: 10,
    color: '#009933',
    paddingHorizontal: 10
  },
  logo: {
    height: 256,
    width: 256,
  },

  SignUpbutton: {
    textAlign: 'right',
    backgroundColor: '#00b33c',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#00b33c'
  }
});