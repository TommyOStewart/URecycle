import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView,Alert } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


class Login extends React.Component {
  

  state = {username: "", password: ""};



  checkLogin() {
    var {username, password} = this.state
    console.warn(username, password);
    if(username= 'admin' && password == 'admin'){
      //redirect
      this.props.navigation.navigate('Details')
    }
    else{
      //alert
      Alert.alert('Error', 'username',[{
        text:'Okay'
      }])
      
    }
  }

  render() {
    //const { heading, input, parent} = styles
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image style={styles.logo} source={require('../DanStuff/test.png')} />
        <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="Next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={text => this.setState({password: text})}
        />
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="Go"
        ref = {(input) => this.passwordInput = input}
        secureTextEntry
        style={styles.input}
        onChangeText={text => this.setState({username: text})}
        />        
        <TouchableOpacity style={styles.Loginbutton}>
        <Button title={'Login'} onPress={_ => this.checkLogin()} /> 
        <Button title={'SignUp'} onPress={this.props.navigation.navigate('Signup')}/>
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
    fontWeight: '900',
    
  }
});
const AppNavigator = createStackNavigator({
  
  Home: Login,
  Details: App,
  Setup: SignUp
},
{
  initialRouteName: 'Home',

});

export default createAppContainer(AppNavigator);