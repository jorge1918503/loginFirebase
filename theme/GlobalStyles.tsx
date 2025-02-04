import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    loginInputText: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        padding: 10,
        borderRadius: 20,
        fontSize: 18
    },
    loginButtonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    },
    loginButton: {
        width: 140,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 20,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
})