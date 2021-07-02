import * as React from 'react';
import styles from './styles';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import cocktails from '../CocktailList/cocktails';
// ___________________________________________________________________________________

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
'https://i.ibb.co/3490vQt/cocktail-black-background-menu-layout-restaurant-bar-vodka-whiskey-orange-yellow-cucumber-74333-50.jpg',
'https://i.ibb.co/5MmJbkV/cocktail-black-background-menu-layout-restaurant-bar-vodka-wiskey-tonic-orange-74333-57.jpg'
];

const data = images.map((image, index) => ({
  key: String(index + 1),
  photo: image,
}));


export default function CocktailItem(props) {

  const { image, name, ingredients } = props.cocktail

  return (
    <View style={styles.container}>

      <StatusBar hidden />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <View style={{ width, justifyContent: 'center', alignItems: 'center', height}}>

              <View
               style={{
                borderRadius: 18,
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 30,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                borderRadius: 18,
                padding: 8,
                backgroundColor: '#e2e2e2'
                }}>
                <View style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: 'hidden',
                    alignItems: 'center',
                    borderRadius: 14,
                  }}>
                    <Image
                    source={{uri: item.photo}}
                    style={{
                      width: ITEM_WIDTH * 1.4,
                      height: ITEM_HEIGHT* 1,
                      resizeMode: 'cover'
                    }}
                    />
                </View>

              </View>

            </View>
          );
        }}
      />
    </View>
  );
}

// ___________________________________________________________________________________
