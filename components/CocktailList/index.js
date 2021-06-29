import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import CocktailItem from "../CocktailItem";

import styles from './styles';
import cocktails from './cocktails';

const CocktailList = (props) => {
  return (
    <View style={styles.container}>

      <FlatList
        data={cocktails}
        renderItem={({item}) => <CocktailItem cocktail={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />

    </View>
  );
};

export default CocktailList;