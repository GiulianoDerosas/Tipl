import React, {useState} from "react";
import { View, Switch, Text } from "react-native";
import styles from "./styles";


const BarItem = (props) => {
  const [isSelected, setSelection] = useState(false);

  const {name} = props.ingredient

  const ownedIngredients = []

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>{name}</Text>
        <Switch
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          trackColor={{ true: '#6ccef2', false: '#ffa68b' }}
          ios_backgroundColor="#ffa68b"
        />
      </View>
    </View>
  );
};


export default BarItem;
