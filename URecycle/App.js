/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Chat from './app/routes/Chat';

import Stories from './app/routes/Stories';
import Me from './app/routes/Me';
import Menu from './app/components/Menu';
import SignUp from './DanStuff/SignUp'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import {Camera} from './Camera';





const SubMenu = () => (
  <Menu
    routes={[
      { component: Me },
      { component: Camera }
    ]}
    initialIndex={1}
    horizontal={false}
  />
);



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
        <Image style={styles.logo} source={require('./DanStuff/test.png')} />
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

const App: () => React$Node = () => {
  return (
    <>     
      <Menu
      routes={[
        { component: Chat },
        { component: SubMenu },
        { component: Stories },
      ]}
      initialIndex={1}/>
    </>
  );
};




const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
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