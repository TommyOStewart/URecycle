import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, Linking, ScrollView} from 'react-native';
import {setPoints} from "../../Database.js";
export default class Stories extends Component{
  constructor(props) {
    super(props);
    this.state = {
        myText: 'None',
        acceptModal: false,
        declineModal: false
    }
}

onPress = async() => {
  this.setState({
    acceptModal: true
})
  await setPoints(this.props.username, await getPoints(this.props.username) + 5)
}
  render(){
    return(
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://img-aws.ehowcdn.com/350x235p/photos.demandstudios.com/getty/article/41/172/56528939_XS.jpg'}}/>
        <Text style={styles.cardText}
        onPress={() => {
          Linking.openURL('https://homeguides.sfgate.com/ten-steps-start-recycling-79791.html')}}
        >Ten Steps to Start Recycling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://static01.nyt.com/images/2015/10/04/opinion/sunday/04tierneyWEB/04tierneyWEB-jumbo.jpg?quality=90&auto=webp'}}/>
        <Text style={styles.cardText} onPress={() => {
            Linking.openURL('https://www.nytimes.com/2015/10/04/opinion/sunday/the-reign-of-recycling.html')}}>The Reign of Recycling</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://cdn.cnn.com/cnnnext/dam/assets/180307122958-biocellection-plastic-before-and-after-exlarge-169.jpg'}}/>
        <Text style={styles.cardText} onPress={() => {
            Linking.openURL('https://www.cnn.com/2018/03/09/world/miranda-wang-tomorrows-hero/index.html')}}>Start-up devours pollution with new plastic recycling method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://cdn.cnn.com/cnnnext/dam/assets/190418123212-malaysia-plastics-3-exlarge-169.jpg'}}/>
        <Text style={styles.cardText}
        onPress={() => {
          Linking.openURL('https://www.cnn.com/2019/04/26/asia/malaysia-plastic-recycle-intl/index.html')}}
        >China's recycling ban has sent America's plastic to Malaysia. Now they don't want it -- so what next?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://cdn.cnn.com/cnnnext/dam/assets/190312143952-05-coca-cola-recycling-grant-exlarge-169.jpg'}}/>
        <Text style={styles.cardText}
        onPress={() => {
          Linking.openURL('https://www.cnn.com/2019/03/14/business/coca-cola-recycling-grant/index.html')}}
        >Coca-Cola promised to help fix recycling. Here's how it plans to deliver</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F5FCFF'
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
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  cardText: {
    padding: 10,
    fontSize: 16
  }
});
