import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push("CocktailList");
  };

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../assets/images/homepage.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}> 
        <Text style={styles.title}>Welcome to Tipl</Text>
      </View>
      
      <View>
        <Button 
        title="Go To Drinks List" onPress={pressHandler}
        styles={styles.button} />
      </View>

    </View>
  );
};

export default Home;
