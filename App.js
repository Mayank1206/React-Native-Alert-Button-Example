import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View  style={styles.container}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>        
        </View>
        <View  style={styles.buttonAlert}>
          <Button
            onPress={() => { Alert.alert('You tapped the button!')}}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAlert: {
    marginTop: 50,
  }
});
