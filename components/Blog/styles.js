import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.8,
    width: Dimensions.get('window').width,
  },
  text: {
    color: '#fff'
  }
});

export default styles;