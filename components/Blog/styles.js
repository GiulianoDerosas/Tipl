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
  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#fff'
  },
  blurb: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7
  }
});

export default styles;