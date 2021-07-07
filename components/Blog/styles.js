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
  },
  image: {
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 20,
    tintColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 40,
    textAlign: 'center',
    marginTop: 60
  },
  title2: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 0
  },
  containerText: {
    marginTop: 140,
    marginBottom: 110
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#232323',
    alignSelf: 'center',
    color: '#fff',
    marginTop: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    alignSelf: 'center',
    color: '#fff',
    marginHorizontal: 40,
    flexWrap: 'wrap'
  },
});

export default styles;