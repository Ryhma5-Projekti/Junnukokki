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
    h1: {
        fontFamily: 'Exo',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: '#D2575C',
        paddingBottom: 20,
    },
    h3: {
        fontFamily: 'Exo',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#D2575C',
        paddingBottom: 20,
    },
    vali: {
        paddingTop: 40,
    },
    txt: {
        fontSize: 14,
        lineHeight: 20,
    },
    CatalogRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    CatalogItem: {
        flexDirection: 'column',
        alignContent: 'center',
    },
    CatalogImage: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    
    //Recipe.js styles
    RecipeImage: {
        width: 375,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    RecipeTxt: {
        fontFamily: 'Exo',
        fontWeight: '500',
        textAlign: 'left-justify',
        paddingBottom: 5,
        paddingLeft: 10,
    },
    RecipeTxtBold: {
        fontFamily: 'Exo',
        fontWeight: 'bold'
    },
});