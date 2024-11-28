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
        marginTop: 40,
        padding: 10
    },
    titlePrincipal: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 500,
        marginBottom: 15
    },
    textoGeral: {
        fontSize: 20,
        textAlign: "center"
    }
})