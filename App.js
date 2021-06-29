import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.cocktailContainer}>

        <ImageBackground 
        source={require('./assets/images/orangeCoupe.jpeg')}
        style={styles.image}></ImageBackground>
        
        <View style={styles.titles}>
          <Text style={styles.title}>Orange Coupe</Text>
          <Text style={styles.subtitle}>Sweet & Citrusy</Text>
        </View>

      </View>

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
  cocktailContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }

});
