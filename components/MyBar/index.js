import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import BarItem from "../BarItem/index";
import ingredients from "../BarItem/ingredients";
import { useState } from "react/cjs/react.development";
import { TextInput } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const MyBar = ({usersIngredients, setUsersIngredients}) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true);


  const handleChange = (text) => {
    setSearch(text);
  };

  // This function will add a specific ingredient to the users owned ingredients.
  // ___________________________________________________________________________________________________________
  const addToUsersIngredients = (key) => {
    setUsersIngredients([...usersIngredients, key]);
    console.log(usersIngredients);
  };

  // This function will remove everything before and after the index in order to remove a specific value.
  // ___________________________________________________________________________________________________________
  const removeFromUsersIngredients = (key) => {
    let index = usersIngredients.indexOf(key);
    setUsersIngredients([
      ...usersIngredients.slice(0, index),
      ...usersIngredients.slice(index + 1),
    ]);
    console.log(usersIngredients);
  };

  // This function will change the displayed ingredients to only ones searched for by name.
  // ___________________________________________________________________________________________________________
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.key.includes(search.toLowerCase())
  );

  // These function will only display ingredients owned by the user by changing the data provided to the flatlist.
  // ___________________________________________________________________________________________________________
  const filteredIngredients2 = ingredients.filter((ingredient) =>
    usersIngredients.includes(ingredient.key)
  );

  const ShowIngredientsOwned = () => {
    setToggle(!toggle);
  };

  // ___________________________________________________________________________________________________________
  // ___________________________________________________________________________________________________________

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={ShowIngredientsOwned}
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

      <TextInput
        style={styles.search}
        onChangeText={handleChange}
        placeholder="Search Ingredients 🔍"
        keyboardAppearance="dark"
        placeholderTextColor="#fff"
        textAlign="center"
      />

      <View style={styles.list}>
        <FlatList
          data={
            toggle
              ? filteredIngredients.sort((a, b) => a.key.localeCompare(b.key))
              : filteredIngredients2.sort((a, b) => a.key.localeCompare(b.key))
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BarItem
              ingredient={item}
              addToUsersIngredients={addToUsersIngredients}
              removeFromUsersIngredients={removeFromUsersIngredients}
              usersIngredients={usersIngredients}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyBar;
