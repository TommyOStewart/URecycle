import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import Modal, {ModalContent, ModalTitle} from "react-native-modals";
import ModalFooter from "react-native-modals/dist/components/ModalFooter";
import ModalButton from "react-native-modals/dist/components/ModalButton";
import {getPoints, setPoints} from "../Database";

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




    render() {
        return (

            <ScrollView style={styles.container}>

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
                            title="Congratulation!"
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

                <TouchableOpacity style={styles.backbutton}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
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
