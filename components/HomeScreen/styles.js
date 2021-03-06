import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#121212'
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 100
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    position: 'absolute',
    top: 60
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 40
  }
});

export default styles;