import React, { Component } from 'react';
import {Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {getPoints} from "../../Database.js";
import Dash from 'react-native-dash';

const window = Dimensions.get('window');

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
      }, 500);

}

  render(){
    return (
        <View style={{height: '100%'}}>
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
            <TouchableOpacity style={styles.RewardStyle} activeOpacity={0.5} onPress={this.props.rewards}>
                <Image source={{
                        uri: 'https://cdn.onlinewebfonts.com/svg/thumbnails_60_525610.png',
                    }}
                    style={styles.ImageIconStyle}
                />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Rewards </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ScanStyle} activeOpacity={0.5} onPress={this.props.scan}>
                <Image source={{
                    uri: 'https://cdn.onlinewebfonts.com/svg/thumbnails_60_200685.png',
                }}
                       style={styles.ImageIconStyle}
                />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Scan </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.NewsStyle} activeOpacity={0.5} onPress={this.props.news}>
                <Image source={{
                    uri: 'https://cdn.onlinewebfonts.com/svg/thumbnails_60_24743.png',
                }}
                       style={styles.ImageIconStyle}
                />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> News </Text>
            </TouchableOpacity>
        </View>


    )
  }
}

const styles = StyleSheet.create({
    TextStyle: {
        color: '#000000',

    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    ScanStyle: {
        alignItems: 'center',
        height: '15%',
        width: '15%',
        left: '42.5%',
        bottom: '10%',
        position: 'absolute',
    },
    RewardStyle: {
        alignItems: 'center',
        height: '15%',
        width: '15%',
        left: '5%',
        bottom: '10%',
        position: 'absolute',
    },
    NewsStyle: {
        alignItems: 'center',
        height: '15%',
        width: '15%',
        right: '5%',
        bottom: '10%',
        position: 'absolute',
    },
    SeparatorLine: {
        backgroundColor: '#000000',
        width: 40,
        height: 1,
    },
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
