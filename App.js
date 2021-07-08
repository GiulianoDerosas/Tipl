import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Image, LogBox, disable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react/cjs/react.development";
import CocktailList from "./components/CocktailList";
import Header from "./components/Header";
import Home from "./components/HomeScreen";
import MyBar from "./components/MyBar";
import Blog from "./components/Blog";
import Stir from "./components/Blog/Stir";

// Demo purpose only.
LogBox.ignoreAllLogs(disable);

const GuideStack = createStackNavigator();

const GuideStackScreen = ({}) => {
  return (
    <GuideStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <GuideStack.Screen name="Blog" component={Blog} />
      <GuideStack.Screen name="Stir" component={Stir} />
    </GuideStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Tabs = ({}) => {
  const [usersIngredients, setUsersIngredients] = useState([]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#2e2e2e",
          borderRadius: 18,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("./assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#6ccef2" : "#ffa68b",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#6ccef2" : "#ffa68b" }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Guides"
        component={GuideStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("./assets/icons/guides.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#6ccef2" : "#ffa68b",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#6ccef2" : "#ffa68b" }}
              >
                GUIDES
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Drinks List"
        children={() => <CocktailList usersIngredients={usersIngredients} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("./assets/icons/drinks.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#6ccef2" : "#ffa68b",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#6ccef2" : "#ffa68b" }}
              >
                DRINKS
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="My Bar"
        children={() => (
          <MyBar
            usersIngredients={usersIngredients}
            setUsersIngredients={setUsersIngredients}
          />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("./assets/icons/mybar.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#6ccef2" : "#ffa68b",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#6ccef2" : "#ffa68b" }}
              >
                MY BAR
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
