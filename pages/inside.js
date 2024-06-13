import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Dentro() {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="bounceIn"
        duration={1500}
        style={styles.text}
      >
        Acesso concedido!
      </Animatable.Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
