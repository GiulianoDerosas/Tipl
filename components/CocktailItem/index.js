import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';

const CocktailItem = (props) => {

  const { name, tagline, image } = props.cocktail;

  return (
    <View style={styles.cocktailContainer}>

      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

    </View>
  );
};

export default CocktailItem;