import React from 'react';
import {View, FlatList, Dimensions, SectionList} from 'react-native';
import CocktailItem from "../CocktailItem";
import PreperationItem from "../PreperationItem"

import styles from './styles';
import cocktails from './cocktails';

const CocktailList = (props) => {
  return (
    <View style={styles.container}>

      <SectionList
        sections={cocktails}
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