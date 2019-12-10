import React, {Component, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, Text, ScrollView, View, TextInput} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';


var items = [
    //name key is must.It is to show the text in front
    {id: 1, name: 'bottle (plastic)'},
    {id: 2, name: 'bottle (glass)'},
    {id: 3, name: 'cardboard'}
];

export default class Bottle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        }
    }

    onChange(text) {
        this.setState({selectedItem: text});
        console.log(text);
        console.log('bottle (plastic)'.includes(text.toLowerCase()) );
        console.log(text === '');
        console.log(('bottle (plastic)'.includes(text.toLowerCase()) || text === ''));
    }

    renderPlasticBottle() {
        if (('bottle (plastic)'.includes(this.state.selectedItem.toLowerCase()) || this.state.selectedItem === '')) {
            return (
                <View >
                    {/*Buffer*/}
                    <Text>


                    </Text>
                    <TouchableOpacity style={styles.card} >
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
                            <Text style={styles.cardText}>Recycle Information</Text>
                            <Text style={styles.regularText}>The first PET disposable was introduced in 1975</Text>
                            <Text style={styles.regularText}>MYTH: Plastic bottles cannot be recycled into new
                                plastic
                                bottles</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    }

    renderGlassBottle() {
        if (('bottle (glass)'.includes(this.state.selectedItem.toLowerCase()) || this.state.selectedItem === '')) {
            return (
                <View >
                    {/*Buffer*/}
                    <Text>


                    </Text>
                    <TouchableOpacity style={styles.card} >
                        <Text style={styles.cardText}>Name</Text>
                        <Text style={styles.bottleText}>
                            Glass Bottle</Text>
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
                            <Text style={styles.cardText}>Recycle Information</Text>
                            <Text style={styles.regularText}>Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity</Text>
                            <Text style={styles.regularText}>MYTH: Broken glass cannot be recycled... (it can)</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    }

    renderCardboardBottle() {
        if (('cardboard'.includes(this.state.selectedItem.toLowerCase()) || this.state.selectedItem === '')) {
            return (
                <View >
                    {/*Buffer*/}
                    <Text>


                    </Text>
                    <TouchableOpacity style={styles.card} >
                        <Text style={styles.cardText}>Name</Text>
                        <Text style={styles.bottleText}>
                            Cardboard</Text>
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
                            <Text style={styles.cardText}>Recycle Information</Text>
                            <Text style={styles.regularText}>Recycling 1 ton of cardboard saves 46 gallons of oil</Text>
                            <Text style={styles.regularText}>MYTH: Pizza boxes can't be recycled... (They can as long as they are grease free!)</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <Fragment>
                {/*<TouchableOpacity onPress={() => navigate('Home', {navigation: this.props.navigation})}>*/}
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#000000"
                    returnKeyType="next"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={text => this.onChange(text)}
                />

                <ScrollView style={styles.container}>
                    {/*Plastic Bottle*/}
                    {this.renderPlasticBottle()}
                    {this.renderGlassBottle()}
                    {this.renderCardboardBottle()}
                    {/*</TouchableOpacity>*/}
                </ScrollView>
            </Fragment>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#F5F5F5'
    },
    smallGreenCard: {
        // backgroundColor: '#fff',
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
    input: {
        height: 50,
        width: '95%',
        backgroundColor: '#F5F5F5',
        left: '2.5%',
        right: '2.5%',
        color: 'black',
        paddingHorizontal: 10
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    regularText: {
        fontSize: 14,
        padding: 10,
    }
});
