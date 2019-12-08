
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#58FE58',
  },
});

const Chat = (props) => {

  return (
    <View style={styles.container}>
    <Text>Hello - {props.username}</Text>
  </View>
  );
};



export default Chat;
