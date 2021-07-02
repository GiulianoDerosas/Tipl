import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: Dimensions.get('window').height,
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#dee",
        width: Dimensions.get('window').width,
        justifyContent: "space-between",
        backgroundColor: '#232324',

      },
      checkbox: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
      },
      label: {
        margin: 8,
        alignSelf: "flex-start",
        color: '#fff'
      },
});

export default styles;