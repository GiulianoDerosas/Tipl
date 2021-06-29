import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'

const Cocktail = (props) => {

    const {name, tagline, image} = props;

    return (
        <View style={styles.cocktailContainer}>

        <ImageBackground 
        source={image}
        style={styles.image}></ImageBackground>
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>

      </View>

    )
}

export default Cocktail;