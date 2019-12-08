/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Stories from './app/routes/Stories';

import Me from './app/routes/Me';
import Menu from './app/components/Menu';

import {checkUser, addNewUser} from "./Database";
import Redeem from './DanStuff/Redeem';


import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import {
  Colors,
  } from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Camera} from './Camera';



class SubMenu extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Menu
                routes={[
                    {component: Me},
                    {component: Camera}
                ]}
                initialIndex={1}
                horizontal={false}
                username={this.props.username}
            />
        );
    }

}



 class Login extends React.Component {

  state = {username: "", password: "", passAgain: ""};

  async checkLogin() {
    var {username, password} = this.state;

    if(await checkUser(username, password)){
      //redirect
      this.props.navigation.navigate('Details', {username: username})
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
      <KeyboardAvoidingView behavior="padding" style={styles2.container}>
        <Image style={styles2.logo} source={require('./DanStuff/test.png')} />
        <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles2.input}
        onChangeText={text => this.setState({username: text})}
        />
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="go"
        ref = {(input) => this.passwordInput = input}
        secureTextEntry
        style={styles2.input}
        onChangeText={text => this.setState({password: text})}
        />
        <TouchableOpacity style={styles2.Loginbutton}>
        <Button title={'Login'} onPress={_ => this.checkLogin()} />
        <Button title={'SignUp'} onPress={_ => this.props.navigation.navigate('Setup')}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

class Signup extends React.Component {


    async createUser() {
        var {username, password, passAgain} = this.state;

        if (password !==  passAgain) {
            Alert.alert('Error', 'Password Mismatch',[{
                text:'Okay'
            }]);
            return;
        }

        if(await addNewUser(username, password)){
            //redirect
            this.props.navigation.navigate('Details', {username: username});
        }
        else{
            //alert
            Alert.alert('Error', 'User already exists',[{
                text:'Okay'
            }])

        }
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles3.container}>
        <Image style={styles3.logo} source={require('./DanStuff/test.png')}/>
        <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles3.input}
        onChangeText={text => this.setState({username: text})}
        />
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="next"
        ref = {(input) => this.passwordInput= input}
        onChangeText={text => this.setState({password: text})}
        style={styles3.input}
        />

        <TextInput
        placeholder="Password Again"
        placeholderTextColor="rgba(0, 102, 34,0.7)"
        returnKeyType="go"
        ref = {(input) => this.passwordInput= input}
        style={styles3.input}
        onChangeText={text => this.setState({passAgain: text})}
        />

        <TouchableOpacity style={styles3.SignUpbutton}>
            <Button title={'Sign up'} onPress={_ => this.createUser()} />
        {/*<Text style={styles3.buttonText}>SignUp</Text>*/}
        </TouchableOpacity>

        <TouchableOpacity style={styles3.SignUpbutton}>
        <Text style={styles3.buttonText}>Back</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles3 = StyleSheet.create({
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

class App extends React.Component {

    constructor(props) {
        super(props);

    }


  render() {
        return (
      <Menu
          routes={[
              {component: Redeem},
              {component: SubMenu},
              {component: Stories},
          ]}
          initialIndex={2}
          username={this.props.navigation.state.params.username}/>
        );
  }
}

const styles2 = StyleSheet.create({
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
    height: 256,
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
    Setup: Signup,
  },
  {
    initialRouteName: 'Home',

});

export default createAppContainer(AppNavigator);
