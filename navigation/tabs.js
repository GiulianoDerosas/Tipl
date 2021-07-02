import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CocktailList from '../components/CocktailList'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../components/HomeScreen'
import MyBar from '../components/MyBar'
import Blog from '../components/Blog'
import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,

            }
        }}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#121212' : '#30b6ba'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#121212' : '#30b6ba'}}>
                            HOME
                        </Text>
                    </View>
                )
            }}/>

            <Tab.Screen 
            name="Drinks List" 
            component={CocktailList}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        source={require('../assets/icons/drinks.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#121212' : '#30b6ba'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#121212' : '#30b6ba'}}>
                            DRINKS
                        </Text>
                    </View>
                )
            }}
            />

            <Tab.Screen
            name="My Bar"
            component={MyBar}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                        source={require('../assets/icons/mybar.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#121212' : '#30b6ba'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#121212' : '#30b6ba'}}>
                            MY BAR
                        </Text>
                    </View>
                )
            }}
            />
            
            {/* <Tab.Screen name="Blog" component={Blog}/> */}
        </Tab.Navigator>
    )
}

export default Tabs;

