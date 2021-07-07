import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

const Stir = ({ navigation, route }) => {

  // const {item} = route.params;

  return (
      <View style={styles.container}>
            <Text style={{color: '#fff'}}>
                Blah Blah Blah
            </Text>

            <Text style={{color: '#fff'}}>
                Picture picture
            </Text>

            <Text style={{color: '#fff'}}>
                Blah Blah Blah
            </Text>
      </View>

  );
};

export default Stir;