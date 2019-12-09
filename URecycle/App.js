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

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Camera} from './Camera';


class SubMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu
                routes={[
                    {component: Me},
                    {component: Camera}
                ]}
                initialIndex={0}
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

        if (await checkUser(username, password)) {
            //redirect
            this.props.navigation.navigate('Details', {username: username})
        } else {
            //alert
            Alert.alert('Error', 'username', [{
                text: 'Okay'
            }])

        }
    }


    render() {
        //const { heading, input, parent} = styles
        return (
            <KeyboardAvoidingView behavior="padding" style={styles2.container}>
                <Image style={styles2.logo} source={require('./DanStuff/test.png')}/>
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
                    ref={(input) => this.passwordInput = input}
                    secureTextEntry
                    style={styles2.input}
                    onChangeText={text => this.setState({password: text})}
                />
                <TouchableOpacity style={styles2.Loginbutton}>
                    <Button title={'Login'} onPress={_ => this.checkLogin()}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles2.Loginbutton}>
                    <Button title={'SignUp'} onPress={_ => this.props.navigation.navigate('Setup')}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

class Signup extends React.Component {


    async createUser() {
        var {username, password, passAgain} = this.state;

        if (password !== passAgain) {
            Alert.alert('Error', 'Password Mismatch', [{
                text: 'Okay'
            }]);
            return;
        }

        if (await addNewUser(username, password)) {
            //redirect
            this.props.navigation.navigate('Details', {username: username});
        } else {
            //alert
            Alert.alert('Error', 'User already exists', [{
                text: 'Okay'
            }])

        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles2.container}>
                <Image style={styles2.logo} source={require('./DanStuff/test.png')}/>
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
                    ref={(input) => this.passwordInput = input}
                    onChangeText={text => this.setState({password: text})}
                    style={styles3.input}
                    autoCapitalize="none"
                    secureTextEntry
                />

                <TextInput
                    placeholder="Password Again"
                    placeholderTextColor="rgba(0, 102, 34,0.7)"
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    style={styles3.input}
                    onChangeText={text => this.setState({passAgain: text})}
                    autoCapitalize="none"
                    secureTextEntry
                />

                <TouchableOpacity style={styles3.SignUpbutton}>
                    <Button title={'Sign up'} onPress={_ => this.createUser()}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles3.SignUpbutton}>
                    <Button title={'Back'} onPress={_ => this.props.navigation.navigate('Home')}/>
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
        color: 'black',
        paddingHorizontal: 10
    },
    logo: {
        height: 256,
        width: 256,
    },

    SignUpbutton: {
        textAlign: 'right',
        // backgroundColor: '#00b33c',
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
                initialIndex={1}
                horizontal={true}
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
        color: 'black',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    logo: {
        height: 256,
        width: 256,
    },
    Loginbutton: {
        // backgroundColor: '#00b33c',
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '900',

    }
});


const AppNavigator = createStackNavigator({


        Home: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                title: `Welcome to URecycle`,
                headerBackTitle: 'Logout',
                headerShown: false
            })
        },
        Details: {
            screen: App,
            navigationOptions: ({navigation}) => ({
                title: `Welcome ${navigation.state.params.username}`,
            })
        },
        Setup: {
            screen: Signup,
            navigationOptions: ({navigation}) => ({
                title: `Welcome to URecycle`,
                headerBackTitle: null,
                headerShown: false
            })
        },

    },
    {
        initialRouteName: 'Home',

    });

export default createAppContainer(AppNavigator);
