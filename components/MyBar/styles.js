import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#121212',
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
  }
});

export default styles;