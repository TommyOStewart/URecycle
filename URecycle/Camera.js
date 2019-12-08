import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import Modal, { ModalTitle, ModalContent } from 'react-native-modals';
import {checkRecyclable, getPoints, setPoints} from "./Database";
import ModalFooter from "react-native-modals/dist/components/ModalFooter";
import ModalButton from "react-native-modals/dist/components/ModalButton";


export class Camera extends Component {

    constructor(props){
        super(props);
        this.state = {
            myText: 'None',
            acceptModal: false,
            declineModal: false
        }
    }


    async onBarCodeRead(scanResult) {
        if (scanResult.data != null) {

            console.log("CAMERA:", this.props.username);

            this.setState({myText: scanResult.data});
            if(await checkRecyclable(scanResult.data)){
                this.setState({
                    acceptModal: true,
                })
            }
            else{
                this.setState({
                    declineModal: true,
                });
            }
        }

    };



    styles = StyleSheet.create({
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

    render () {
        return (
            <View style={{flex: 1}}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    defaultTouchToFocus
                    mirrorImage={false}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    style={{flex: 16}}
                    onBarCodeRead={this.onBarCodeRead.bind(this)}

                >
                    <BarcodeMask width={300} height={100} edgeBorderWidth={1}/>
                </RNCamera>

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
                            title="Barcode Accepted"
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
                        <Text>5 Points Added to your Account.</Text>
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
                            title="Barcode Not Accepted"
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
                        <Text>We dont recognize the code. Try again?</Text>
                    </ModalContent>
                </Modal>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={this.styles.capture}>
                        <Text style={{fontSize: 14}}> {this.state.myText} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default {Camera};
