import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render(){
    return (
        <ScanScreen style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
