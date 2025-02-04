import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 22
    },
    loginInputText: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        fontSize: 18
    },
    loginButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    loginButton: {
        width: '45%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        fontSize: 18
    },
    loginButtonText: {
        fontSize: 18
    }
})