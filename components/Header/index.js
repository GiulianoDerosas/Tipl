import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Tipl.png")}
      />

      <Image
        style={styles.menu}
        source={require("../../assets/images/menu.png")}
      />
    </View>
  );
};

export default Header;
