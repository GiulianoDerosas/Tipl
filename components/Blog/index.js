import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import styles from "./styles";

const Blog = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>

      <View style={styles.titles}>
        <Text style={styles.title}>My Blog!</Text>
      </View>

      <View>
        <Button
          title="Go To Home"
          onPress={pressHandler}
          styles={styles.button}
        />
      </View>
    </View>
  );
};

export default Blog;
