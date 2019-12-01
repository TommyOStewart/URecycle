import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import {RNCamera} from 'react-native-camera';

import BarcodeMask from 'react-native-barcode-mask';

export class Camera extends Component {

    constructor(){
        super();
        this.state = {
            myText: 'None'
        }
    }

    onBarCodeRead(scanResult) {
        if (scanResult.data != null) {
            console.log(scanResult.data);
            this.setState({myText: scanResult.data});
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
