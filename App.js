import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb3345',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
