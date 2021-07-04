import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: Dimensions.get('window').height,
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: "space-between",
        backgroundColor: '#232324',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 18
      },
      checkbox: {
        alignSelf: "center",
        justifyContent: "center",
      },
      label: {
        margin: 12,
        alignSelf: "flex-start",
        color: '#fff',
        fontSize: 16
      },
});

export default styles;