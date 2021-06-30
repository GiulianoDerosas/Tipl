import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const PreperationItem = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.titles}>
        <Text style={styles.title}>
        Ingredients: 
        25ml Lemon Juice
        50ml Whisky
        12.5ml Sugar
        1 Egg White
        </Text>
      </View>

    </View>
  );
};

export default PreperationItem;