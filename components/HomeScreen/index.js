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
        source={{uri: 'https://i.ibb.co/0QjYm20/Homepage.png'}}
        style={styles.image}
      />

      <View style={styles.titles}>

      </View>

    </View>
  );
};

export default Home;
