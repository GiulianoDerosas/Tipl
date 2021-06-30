import React from "react";
import { View, FlatList, Checkbox } from "react-native";
import styles from "./styles";
import BarItem from "../BarItem";
import ingredients from "../BarItem";

const MyBar = (props) => {

  return (

    <View style={styles.container}>

      {ingredients.forEach(ingredient => (
        <BarItem name={ingredient.name}/>
      ))}

    </View>
  );
};

export default MyBar;
