import React, {useState} from "react";
import { View, Switch, Text, Alert } from "react-native";
import styles from "./styles";


const BarItem = (props) => {
  const [isSelected, setSelection] = useState(false);

  const {name, key} = props.ingredient

  const ownedIngredients = []

  const handleChange = () => {
    setSelection(!isSelected);
    if (isSelected) {
      ownedIngredients.push(key)
    } else {
      let index = ownedIngredients.indexOf(key);
      ownedIngredients.splice(index , 1)
    }
    console.log(ownedIngredients);
  };

  // ___________________________________________________________________________________________________
  // Need help pushing toggled items to the array, and removing un-toggled items.
  // ___________________________________________________________________________________________________

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>{name}</Text>
        <Switch
          value={isSelected}
          onValueChange={handleChange}
          style={styles.checkbox}
          trackColor={{ true: '#6ccef2', false: '#ffa68b' }}
          ios_backgroundColor="#ffa68b"
        />
      </View>
    </View>
  );
};


export default BarItem;
