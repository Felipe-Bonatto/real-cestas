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
        marginTop: 35,
        padding: 10
    },
    titlePrincipal: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: 500,
        marginBottom: 15
    },
    textoGeral: {
        fontSize: 18,
    },
    viewCesta: {
        justifyContent: "center",
        alignItems: "center"
    },
    imagemCesta: {
        width: "85%",
        height: 200
    },
    imagemConteudo: {
        width: "85%",
        height: 250
    },
    buttonComprar: {
        backgroundColor: themas.colors.primary,
        width: "55%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 5},
    textoButton: {
        fontSize: 18,
        color: themas.colors.whiteColor,
        textAlign: "center"
    }
})