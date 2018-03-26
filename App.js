import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import Weather from './src/Weather';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header" />
        <Weather />
        <Footer footerText="Footer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#004D40'
  }
});
