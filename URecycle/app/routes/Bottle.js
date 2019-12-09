import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, ScrollView  } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';


var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'bottle (plastic)'},
    { id: 2, name: 'bottle (glass)' },
    { id: 3, name: 'cardboard' }
  ];
export default class Bottle extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigate('Home', { navigation: this.props.navigation })}>
            <SearchableDropdown
              onTextChange={text => console.log(text)}
              onItemSelect={item => console.log(item)}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#F5F5F5',
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: '#222',
              }}
              itemsContainerStyle={{
                maxHeight: '60%',
              }}
              items={items}
              defaultIndex={1}
              placeholder="Search"
              resetValue={false}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.card}>
               <Text style={styles.cardText}>Name</Text>
               <Text style={styles.bottleText}>
                Plastic Bottle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
            <Text style={styles.informationText}>INFORMATION</Text>
            <TouchableOpacity style={styles.smallGreenCard}>
            <Text style={styles.cardText}>Recyclable?</Text>
            <Text style={styles.bottleText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallCard}>
            <Text style={styles.cardText}>Points to Gain</Text>
            <Text style={styles.bottleText}>5 for Recycling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallCard}>
            <Text style={styles.cardText}>Recyle Information</Text>
            <Text style={styles.regularText}>The first PET disposable was introduced in 1975</Text>
            <Text style={styles.regularText}>MYTH: Plastic bottles cannot be recycled into new plastic bottles</Text>
            </TouchableOpacity>
            </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      backgroundColor: '#F5F5F5'
    },
    smallGreenCard: {
        backgroundColor: '#fff',
        paddingBottom: 2,
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 30,
        backgroundColor: '#228B22',
    },
    smallCard: {
        backgroundColor: '#fff',
        paddingBottom: 10,
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 30,
    },
    card: {
      backgroundColor: '#fff',
      paddingBottom: 10,
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
    cardText: {
      padding: 10,
      fontSize: 18,
      letterSpacing: 0.5
    },
    bottleText: {
      textAlign: 'center',
      fontSize: 24,
      letterSpacing: 2
    },
    informationText: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    regularText:{
        fontSize:14,
        padding: 10,
    }
  });

