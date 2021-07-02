import React from "react";
import { View, FlatList, Checkbox, ListItem, Dimensions } from "react-native";
import styles from "./styles";
import BarItem from "../BarItem/index";
import ingredients from "../BarItem/ingredients";
const { width, height } = Dimensions.get('screen');

const MyBar = (props) => {

  return (

    <View style={styles.container}>
      <View style={{ marginTop: 140}}>
        <FlatList
          data={ingredients}
          renderItem={({item}) => <BarItem
          ingredient={item} />}
          />
      </View>
    </View>
  );
};

export default MyBar;
