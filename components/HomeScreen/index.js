import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./styles";
import MyBar from "../MyBar";
import Blog from "../Blog";
import CocktailList from "../CocktailList";


const Home = ({ navigation }) => {

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../assets/images/homepage.jpg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Homepage</Text>
      </View>

    </View>
  );
};

export default Home;
