import React, { useState } from "react";
import { View, Switch, Text, Alert, RefreshControl,  } from "react-native";
import styles from "./styles";


const BarItem = (props) => {

  const { name, key } = props.ingredient;

  const isSelected = () => {
    return props.usersIngredients.includes(key)
  }

  const handleChange = () => {
    if (isSelected() === false) {
      props.addToUsersIngredients(key)
    } else {
      props.removeFromUsersIngredients(key)
    }
  };


  // ___________________________________________________________________________________________________
  // Need help pushing toggled items to the array, and removing un-toggled items.
  // ___________________________________________________________________________________________________

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
