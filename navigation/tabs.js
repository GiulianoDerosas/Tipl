import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../components/HomeScreen'
import MyBar from '../components/MyBar'
import CocktailList from '../components/CocktailList'
import Blog from '../components/Blog'
import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Drinks List" component={CocktailList}/>
            <Tab.Screen name="My Bar" component={MyBar}/>
            {/* <Tab.Screen name="Blog" component={Blog}/> */}
        </Tab.Navigator>
    )
}

export default Tabs;