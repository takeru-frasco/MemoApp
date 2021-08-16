import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

export default function App() {
  // HTMLにあたる部分
  return (
    <View style={styles.container}>
      <Hello bang={false}>World</Hello>
      <Hello bang style={{ fontSize: 16 }}>Small world</Hello>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

// CSSnにあたる部分
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
