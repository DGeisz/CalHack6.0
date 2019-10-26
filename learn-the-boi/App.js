import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let pic = {
  url: 'download.jpg'};
  return (
    <View style={styles.container}>
      <Text>Whats Frickin Popin</Text>
      <Image source={pic} style={{width: 193, height: 110}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
