import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  menu: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  }
});

export default styles;