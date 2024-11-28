import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: themas.colors.whiteColor,
        flex: 1
    },
    viewLogo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10
    },
    imagemLogo: {
        width: "80%"
    },
    naveGator: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    naviText: {
        color: themas.colors.secondary,
        fontSize: 18
    },
    principal: {
        marginTop: 25,
        padding: 10
    },
    titlePrincipal: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: 500,
        marginBottom: 15
    },
    ViewInputs: {
        marginBottom: 10
    },
    textoLabel: {
        fontSize: 18
    },
    inputs: {
        height: 35,
        width: "100%",
        borderWidth: 2,
        borderColor: themas.colors.blackColor,
        borderRadius: 8,
        backgroundColor: "#fefae0",
        paddingLeft: 5,
        fontSize: 10,
    }, 
    ViewButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonComprar: {
        backgroundColor: themas.colors.primary,
        width: "55%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 10},

    textoButton: {
        fontSize: 18,
        color: themas.colors.whiteColor,
        textAlign: "center"
    }
})