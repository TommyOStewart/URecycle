import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import {getPoints} from "../../Database.js";
import Dash from 'react-native-dash';

export default class Me extends Component{
  constructor(props) {
    super(props);
    this.state = {
        points: 0,
        acceptModal: false,
        declineModal: false
    };
    this.updatePoint();
    this.pointUpdater();
}

updatePoint = async() => {
  this.setState({points: await getPoints(this.props.username)})
};

async pointUpdater() {

      setInterval(async () => {
          let points = await getPoints(this.props.username);
          this.setState({points: points});
      }, 5000);

}

  render(){
    return (
      <ScrollView contentContainerStyle={styles.center}>
        <Text style={styles.settings}>Settings</Text>
        <Image style={styles.imgprofile} source={{uri:'http://cdn.onlinewebfonts.com/svg/img_411978.png'}}/>
        <Text style={styles.text}>Welcome back, {this.props.username}</Text>
        <Text style={styles.text} onPress = {this.updatePoint}>
               {this.state.points} points </Text>
        <Dash style={{width:1000, height:2, padding: 20}}/>
        <Text>UserName : {this.props.username}</Text>
        <Dash style={{width:1000, height:2, padding: 20}}/>
        <Text>Password: ***********</Text>
        <Dash style={{width:1000, height:2, padding: 20}}/>
        <Text>Language: English</Text>

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  settings: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: 'center',
    marginBottom: 30
  },
  center: {
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  text: {
    marginTop: 10,
    fontSize: 16
  },

  imgprofile: {
    height: 90,
    width: 90,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Loginbutton: {
    backgroundColor: '#00b33c',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },

});
