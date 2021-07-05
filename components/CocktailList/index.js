import React from 'react';
import {View, FlatList, Dimensions, TextInput, Switch, Button} from 'react-native';
import { useState } from "react/cjs/react.development";
import CocktailItem from "../CocktailItem";

import styles from './styles';
import cocktails from './cocktails';


const CocktailList = (props) => {
  const [search, setSearch] = useState("");
  const [ownedIngredients, setOwnedIngredients]= useState([])

  const handleChange = (text) => {
    setSearch(text);
  };

  const filteredCocktails = cocktails.filter((cocktail) =>
    cocktail.name.toLowerCase().includes(search.toLowerCase())
  );


  // ___________________________________________________________________________________________________
  // Filter drinks on toggle
  // ___________________________________________________________________________________________________

//   const filteredCocktailsToggle = cocktails.filter((cocktail) =>
//   cocktail.ingredients.map().toLowerCase().includes(ownedIngredients.map().toLowerCase())
// );

// const handleToggle = () => {
//   !isOn
//   if (isOn === true) {
//   setOwnedIngredients(ownedIngredients)}
//   else {
//     setOwnedIngredients([])
//   }
// };
  // ___________________________________________________________________________________________________


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
          data={filteredCocktails}
          renderItem={({item}) => <CocktailItem cocktail={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
        />
        </View>

{/* 
        <View style={styles.toggle}>
        <Switch
          title="My Drinks"
          isOn = {false}
          onValueChange={handleToggle}
        />
        </View> */}

    </View>
  );
};

export default CocktailList;