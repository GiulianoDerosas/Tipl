import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
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