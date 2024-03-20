import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerFullWidth: {
        // tätä käytetään, kun halutaan sisällön menevän reunasta reunaan
        flex: 1,
        backgroundColor: '#FAF5F1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        // normaalille sisällölle
        flex: 1,
        backgroundColor: '#FAF5F1',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});