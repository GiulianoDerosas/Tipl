import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CocktailList from '../components/CocktailList'
import { Text, View, Image} from 'react-native';
import { useState } from "react/cjs/react.development";
import Home from '../components/HomeScreen'
import MyBar from '../components/MyBar'
import Blog from '../components/Blog'
import React from 'react';

 const Tab = createBottomTabNavigator();
  
 export const Tabs = () => {
    const [usersIngredients, setUsersIngredients] = useState([]);

    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 15,
                right: 15,
                elevation: 0,
                backgroundColor: '#2e2e2e',
                borderRadius: 18,
                height: 70,
            }
        }}>

            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#6ccef2' : '#ffa68b'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#6ccef2' : '#ffa68b'}}>
                            HOME
                        </Text>
                    </View>
                )
            }}/>
            
            <Tab.Screen
            name="Guides"
            component={Blog}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={require('../assets/icons/guides.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#6ccef2' : '#ffa68b'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#6ccef2' : '#ffa68b'}}>
                            GUIDES
                        </Text>
                    </View>
                )
            }}
            />

            <Tab.Screen 
            name="Drinks List" 
            children={()=><CocktailList usersIngredients={usersIngredients}/>}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={require('../assets/icons/drinks.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#6ccef2' : '#ffa68b'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#6ccef2' : '#ffa68b'}}>
                            DRINKS
                        </Text>
                    </View>
                )
            }}
            />

            <Tab.Screen
            name="My Bar"
            children={()=><MyBar usersIngredients={usersIngredients} setUsersIngredients={setUsersIngredients}/>}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={require('../assets/icons/mybar.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#6ccef2' : '#ffa68b'
                        }}
                        />
                        <Text style={{fontSize: 12, color: focused ? '#6ccef2' : '#ffa68b'}}>
                            MY BAR
                        </Text>
                    </View>
                )
            }}
            />

        </Tab.Navigator>
    )
}

export default Tabs;