import { StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "../commons/constants";

export const stylesGLobal = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 70
    },
    containterBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    titleWelcome:{
        fontSize: 17,
        fontWeight: 'bold'
    }

})