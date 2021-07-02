import React, {useState} from "react";
import { View, CheckBox, Text } from "react-native";
import styles from "./styles";


const BarItem = (props) => {
  const [isSelected, setSelection] = useState(false);

  const {name} = props.ingredient

  const ownedIngredients = []

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>{name}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
};


export default BarItem;