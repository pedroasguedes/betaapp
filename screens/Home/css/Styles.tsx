import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    header: {
        flexDirection:"row",
        backgroundColor: "black",
        justifyContent: "space-between",
        allignItems: "center",
        height: "35%",
        padding: 10,
        paddingTop: 50
    },
    logo:{
        width: 50,
        height: 50, 
        resizeMode: "cover",
    },
    titulo:{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
});