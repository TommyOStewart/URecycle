import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import Modal, {ModalContent, ModalTitle} from "react-native-modals";
import ModalFooter from "react-native-modals/dist/components/ModalFooter";
import ModalButton from "react-native-modals/dist/components/ModalButton";
import {getPoints, setPoints} from "../Database";
import Dash from "react-native-dash";

export default class Redeem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myText: 'None',
            acceptModal: false,
            declineModal: false
        }
    }

    async onButtonPressHat() {
        if(await getPoints(this.props.username) < 9999){
            this.setState({
                declineModal: true
            })
        }
        else{
            this.setState({
                acceptModal: true
            })
            await setPoints(this.props.username, await getPoints(this.props.username) - 9999)
        }
    }

    async onButtonPressDiscount() {
        if(await getPoints(this.props.username) < 500){
            this.setState({
                declineModal: true
            })
        }
        else{
            this.setState({
                acceptModal: true
            })
            await setPoints(this.props.username, await getPoints(this.props.username) - 500)
        }
    }

    async onButtonPressCard() {
        if(await getPoints(this.props.username) < 1000){
            this.setState({
                declineModal: true
            })
        }
        else{
            this.setState({
                acceptModal: true
            })
            await setPoints(this.props.username, await getPoints(this.props.username) - 1000)
        }
    }

    async onButtonPressRaffle() {
        if(await getPoints(this.props.username) < 100){
            this.setState({
                declineModal: true
            })
        }
        else{
            this.setState({
                acceptModal: true
            })
            await setPoints(this.props.username, await getPoints(this.props.username) - 100)
        }
    }

    goBack(){

    }


    render() {
        return (

            <ScrollView contentContainerStyle={styles.container}>

                <Image style={styles.image} source={require('./hat.png')}/>
                <Text style={styles.text}>
                    A *Really* Cool hat
                </Text>
                <Text style={styles.text}>
                    9999 Points
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Button title={'Redeem'} onPress={_ => this.onButtonPressHat()} />
                </TouchableOpacity>

                <Dash style={{width:1000, height:2, padding: 20}}/>
                <Image style={styles.image} source={require('./discount.png')}/>
                <Text style={styles.text}>
                    Select Store Discounts*
                </Text>
                <Text style={styles.text}>
                    500 Points
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Button title={'Redeem'} onPress={_ => this.onButtonPressDiscount()} />
                </TouchableOpacity>

                <Dash style={{width:1000, height:2, padding: 20}}/>
                <Image style={styles.image} source={require('./giftcard.png')}/>
                <Text style={styles.text}>
                    Select Store Giftcards*
                </Text>
                <Text style={styles.text}>
                    1000 Points
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Button title={'Redeem'} onPress={_ => this.onButtonPressCard()} />
                </TouchableOpacity>

                <Dash style={{width:1000, height:2, padding: 20}}/>
                <Image style={styles.image} source={require('./raffle.png')}/>
                <Text style={styles.text}>
                    Raffle Entry
                </Text>
                <Text style={styles.text}>
                    100 Points
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Button title={'Redeem'} onPress={_ => this.onButtonPressRaffle()} />
                </TouchableOpacity>

                <Modal
                    width={0.9}
                    visible={this.state.acceptModal}
                    rounded
                    actionsBordered
                    onTouchOutside={() => {
                        this.setState({ acceptModal: false });
                    }}
                    modalTitle={
                        <ModalTitle
                            title="Congratulations!"
                            align="left"
                        />
                    }
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="OK"
                                bordered
                                onPress={() => {
                                    this.setState({ acceptModal: false });
                                }}
                                key="button-1"
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent
                        style={{ backgroundColor: '#fff' }}
                    >
                        <Text>Reward Successfully Redeemed!</Text>
                    </ModalContent>
                </Modal>

                <Modal
                    width={0.9}
                    visible={this.state.declineModal}
                    rounded
                    actionsBordered
                    onTouchOutside={() => {
                        this.setState({ declineModal: false });
                    }}
                    modalTitle={
                        <ModalTitle
                            title="Sorry"
                            align="left"
                        />
                    }
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="OK"
                                bordered
                                onPress={() => {
                                    this.setState({ declineModal: false });
                                }}
                                key="button-1"
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent
                        style={{ backgroundColor: '#fff' }}
                    >
                        <Text>You don't have enough points</Text>
                    </ModalContent>
                </Modal>

                {/*Bottom Buffer Text*/}
                <Text style={styles.text}>



                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 256,
        width: 256,
    },
    button: {
        // backgroundColor: '#00b33c',
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
        fontWeight: '900',
        // color: '#00b33c'
    }
});
