import React from 'react';
import {View, FlatList, Dimensions, TextInput} from 'react-native';
import { useState } from "react/cjs/react.development";
import CocktailItem from "../CocktailItem";

import styles from './styles';
import cocktails from './cocktails';


const CocktailList = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (text) => {
    setSearch(text);
  };

  const filteredCocktails = cocktails.filter((cocktail) =>
    cocktail.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

        <TextInput
        style={styles.search}
        onChangeText={handleChange}
        placeholder="Search Cocktails 🔍"
        keyboardAppearance="dark"
        placeholderTextColor="#fff"
        textAlign="center"
      />

      <View style={styles.container}>

        <FlatList
          style={styles.list}
          data={cocktails}
          renderItem={({item}) => <CocktailItem cocktail={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
        />

      </View>

    </View>
  );
};

export default CocktailList;