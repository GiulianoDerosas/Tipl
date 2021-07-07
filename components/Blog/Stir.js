import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

const Stir = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
    </SafeAreaView>
  );
};

export default Stir;