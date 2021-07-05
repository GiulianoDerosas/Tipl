import * as React from "react";
import styles from "./styles";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import cocktails from "../CocktailList/cocktails";
// ___________________________________________________________________________________

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  "https://i.ibb.co/qk31sHs/lolol.png",
  "https://i.ibb.co/687PhLX/lelele.png",
  "https://i.ibb.co/3NdDpnw/Mojito.png",
  "https://i.ibb.co/6wTJgPy/Negroni.png",
  "https://i.ibb.co/fNDrNs9/Old-Fashioned.png",
  "https://i.ibb.co/v1n5WH6/Daiquiri.png",
  "https://i.ibb.co/XY0yxx7/PrepMock.png",
];

// const masterdata = cocktails.map((cocktail) => {
//   cocktail.image.map((imageURI, index) => ({
//   key: String(index + 1),
//   photo: imageURI
//   }));
// })

const newData = cocktails.map((item => {
  return item.image
}))

const masterdata = newData.forEach((cocktail) => {
  cocktail.map((image, index) => ({
    key: String(index + 1),
    photo: image,
  }))
})

  // ___________________________________________________________________________________________________
  // Need help rendering a specific image for a cocktail item.
  // ___________________________________________________________________________________________________


const data = images.map((image, index) => ({
  key: String(index + 1),
  photo: image,
}));

console.log(data)
console.log(newData)
console.log(masterdata)


export default function CocktailItem(props) {
  const { image, name, ingredients } = props.cocktail;

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
                    source={{uri: item.photo}}
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

// ___________________________________________________________________________________
