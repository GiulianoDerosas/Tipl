import React from "react";
import {
  View,
  FlatList,
  Checkbox,
  ListItem,
  Dimensions,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import BarItem from "../BarItem/index";
import ingredients from "../BarItem/ingredients";
import { useState } from "react/cjs/react.development";
import { TextInput } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const MyBar = (props) => {
  const [search, setSearch] = useState("");

  const usersIngredients = [];

  const handleChange = (text) => {
    setSearch(text);
  };

  const addToUsersIngredients = (key) => {
    usersIngredients.push(key);
    console.log(usersIngredients);
  };

  const removeFromUsersIngredients = (key) => {
    let index = usersIngredients.indexOf(key);
    usersIngredients.splice(index, 1);
    console.log(usersIngredients);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.key.includes(search.toLowerCase())
  );

  // _______________________________________________________________________

  return (
    <View style={styles.container}>
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
          data={filteredIngredients.sort((a, b) => a.key.localeCompare(b.key))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BarItem
              ingredient={item}
              addToUsersIngredients={addToUsersIngredients}
              removeFromUsersIngredients={removeFromUsersIngredients}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyBar;
