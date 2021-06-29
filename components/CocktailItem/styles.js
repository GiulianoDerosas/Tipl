import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  cocktailContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default styles;