import React, { useState } from "react";
import { View, Switch, Text, Alert, RefreshControl,  } from "react-native";
import styles from "./styles";


const BarItem = (props) => {

  const { name, key } = props.ingredient;


// This function returns true or false based on whether the user owns an ingredient or not.
// ___________________________________________________________________________________________________________
  const isSelected = () => {
    return props.usersIngredients.includes(key)
  }


// This function will call the isSelected function and calls the required function from MyBar.
// ___________________________________________________________________________________________________________
  const handleChange = () => {
    if (isSelected() === false) {
      props.addToUsersIngredients(key)
    } else {
      props.removeFromUsersIngredients(key)
    }
  };


// ___________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________


  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>{name}</Text>
        <Switch
          value={isSelected()}
          onValueChange={handleChange}
          style={styles.checkbox}
          trackColor={{ true: "#6ccef2", false: "#ffa68b" }}
          ios_backgroundColor="#ffa68b"
        />
      </View>
    </View>
  );
};

export default BarItem;
