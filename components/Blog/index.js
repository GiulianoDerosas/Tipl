import React from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import styles from "./styles";
import guide1 from "./guide1"

const Blog = () => {

  const data = guide1.map((item, index) => ({
    title: item.title,
    blurb: item.blurb
  }))

  const ITEM_HEIGHT = Dimensions.get('window').height * 0.18


  return (
    <SafeAreaView style={styles.container}>

      <View style={{flex: 1}}>
      <FlatList
        style={{marginTop: 80}}
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={() => {}}
            style={{marginBottom: 20, height: ITEM_HEIGHT}}>

            <View style={{flex: 1, padding: 14, marginBottom: 0}}>
              <View style={[
                StyleSheet.absoluteFillObject,
                {backgroundColor: '#232324', borderRadius: 16}
              ]}
              />
              <Text>{item.title}</Text>
              <Text>{item.blurb}</Text>
            </View>

            </TouchableOpacity>
          )
        }}
      />

      </View>

    </SafeAreaView>
  );
};

export default Blog;
