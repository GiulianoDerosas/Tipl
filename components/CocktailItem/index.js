import * as React from "react";
import styles from "./styles";
import {
  Dimensions,
  Image,
  FlatList,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;


export default function CocktailItem(props) {
  const { image, name, ingredients } = props.cocktail;


// This function maps each cocktails item to retrieve the associated images.
// ___________________________________________________________________________________________________________
  const data = image.map((image, index) => ({
    key: String(index + 1),
    photo: image,
  }));


// ___________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 0,
                height,
              }}
            >
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: "#000",
                  shadowOpacity: 0.5,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  borderRadius: 18,
                  padding: 8,
                  backgroundColor: "#232324",
                }}
              >
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT * 1.2,
                    overflow: "hidden",
                    alignItems: "center",
                    borderRadius: 14,
                  }}
                >
                  <Image
                    source={{uri: item.photo
                    }}
                    style={{
                      width: ITEM_WIDTH * 1.4,
                      height: ITEM_HEIGHT * 1.2,
                      resizeMode: "cover",
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
