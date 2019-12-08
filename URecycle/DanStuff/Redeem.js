import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,ScrollView, Image} from 'react-native';

export default class Redeem extends React.Component {
  render() {
    return (

      <ScrollView style={styles.container}>

        <Image style={styles.image} source={require('./hat.png')} />
        <Text style={styles.text}>
        A *Really* Cool hat
        </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('./discount.png')} />
        <Text style={styles.text}>
        Select Store Discounts*
        </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('./giftcard.png')} />
        <Text style={styles.text}>
        Select Store Giftcards*
        </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        <Image style={styles.image} source={require('./raffle.png')} />
        <Text style={styles.text}>
        Raffle Entry
        </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backbutton}>
        <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
    image: {
    resizeMode: 'contain',
    height: 256,
    width: 256,
  },
  button: {
    backgroundColor: '#00b33c',
    paddingVertical: 10,
    paddingHorizontal: 50
  },
    backbutton: {
    backgroundColor: '#00b33c',
    paddingVertical: 10,
    paddingHorizontal: 50
  },
    text: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50
  },
  buttonText: {
    textAlign: 'center',
    color: '#00b33c'
  }
});
