import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react/cjs/react.development";
import CocktailItem from "../CocktailItem";
import styles from "./styles";
import cocktails from "./cocktails";

const CocktailList = (props) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true);

  // This function sets the search value.
  // ___________________________________________________________________________________________________________
  const handleChange = (text) => {
    setSearch(text);
  };

  // This function filters for cocktails that have been searched for by name.
  // ___________________________________________________________________________________________________________
  const filteredCocktails = cocktails.filter((cocktail) =>
    cocktail.name.toLowerCase().includes(search.toLowerCase())
  );

  // These function will only display cocktails that can be made by the user based on ingredients.
  // ___________________________________________________________________________________________________________

  const filteredCocktails2 = cocktails.filter((cocktail) =>
    cocktail.ingredients.every((ingredient) => props.usersIngredients.includes(ingredient)
    )
  )

  const ShowDrinksThatCanBeMade = () => {
    setToggle(!toggle);
  };

  // ___________________________________________________________________________________________________________
  // ___________________________________________________________________________________________________________

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
          data={
            toggle
              ? filteredCocktails.sort((a, b) => a.key.localeCompare(b.key))
              : filteredCocktails2.sort((a, b) => a.key.localeCompare(b.key))
          }
          renderItem={({ item }) => <CocktailItem cocktail={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={ShowDrinksThatCanBeMade}
          style={styles.TouchableOpacityStyle}
        >
          <Image
            source={{ uri: "https://i.ibb.co/gPsRk1L/4526592.jpg" }}
            style={{
              resizeMode: "contain",
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CocktailList;
