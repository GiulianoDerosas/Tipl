import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#121212',
  },
});

export default styles;