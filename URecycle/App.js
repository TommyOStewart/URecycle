/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Chat from './app/routes/Chat';

import Stories from './app/routes/Stories';
import Me from './app/routes/Me';
import Menu from './app/components/Menu';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Camera} from './Camera';

const SubMenu = () => (
  <Menu
    routes={[
      { component: Me },
      { component: Camera }
    ]}
    initialIndex={1}
    horizontal={false}
  />
);

const App: () => React$Node = () => {
  return (
    <>
     
      <Menu
      routes={[
        { component: Chat },
        { component: SubMenu },
        { component: Stories },
      ]}
      initialIndex={1}/>
    </>
  );
};


const styles = StyleSheet.create({
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

export default App;
