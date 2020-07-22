import React from 'react';
import { View,StyleSheet } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>
      Test!
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#dd6260',
    marginBottom: 5,
  },
});