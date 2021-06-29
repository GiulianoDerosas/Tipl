import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cocktail from './components/Cocktail';

export default function App() {
  return (
    <View style={styles.container}>

      <Cocktail 
      name={"Orange Coupe"}
      tagline={"Sweet & Citrusy"}
      image={require("./assets/images/orangeCoupe.jpeg")}/>

      <StatusBar style="auto" />
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
