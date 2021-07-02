import React from "react";
import { View, FlatList, Checkbox, ListItem } from "react-native";
import styles from "./styles";
import BarItem from "../BarItem/index";
import ingredients from "../BarItem/ingredients";

const MyBar = (props) => {

  return (

    <View style={styles.container}>
      <FlatList
        data={ingredients}
        renderItem={({item}) => <BarItem ingredient={item} />}
        />
    </View>
  );
};

export default MyBar;
