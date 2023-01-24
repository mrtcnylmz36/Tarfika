import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        margin: 5,
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderRadius: 10,
        borderColor: "transparent",
    },
    text: {
        zIndex: 1,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        bottom: 0,
        height: 35,
        fontSize: 24,
        color: "white",
        textAlign:"center",
        fontWeight: "600",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 5,
        paddingRight: 5,
    }
})