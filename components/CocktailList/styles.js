import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.8,
    width: Dimensions.get('window').width,
  },
  search: {
    height: 40,
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 1,
    marginTop: 150,
    borderColor: '#6ccef2',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#232324',
    borderRadius: 18,
    marginBottom: 20
  }, 
  toggle: {
    marginBottom: 200,
    width:30,
    backgroundColor: '#232324',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 18,
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 194,
    bottom: 796,
  },
});

export default styles;