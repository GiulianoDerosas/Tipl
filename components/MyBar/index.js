import React from "react";
import {
  View,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./styles";
import BarItem from "../BarItem/index";
import ingredients from "../BarItem/ingredients";
import { useState } from "react/cjs/react.development";
import { TextInput } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const MyBar = (props) => {
  const [search, setSearch] = useState("");
  const [usersIngredients, setUsersIngredients] = useState([]);

  const handleChange = (text) => {
    setSearch(text);
  };

  const addToUsersIngredients = (key) => {
    setUsersIngredients([...usersIngredients, key]);
    console.log(usersIngredients);
  };


  const removeFromUsersIngredients = (key) => {
    let index = usersIngredients.indexOf(key);
    setUsersIngredients([...usersIngredients.slice(0, index), ...usersIngredients.slice(index + 1)]);
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
              usersIngredients={usersIngredients}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyBar;
