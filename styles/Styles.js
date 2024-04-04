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
    hr: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingTop: 20,
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

    //Discover.js styles
    DiscoverH3: {
        fontFamily: 'Exo',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: '#D2575C',
        paddingBottom: 10,
    },
    DiscoverRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    DiscoverItem: {
        flexDirection: 'column',
        alignContent: 'center',
    },
    DiscoverImage: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1.875,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    // Viiva erottamaan objektit testaamiseen
    //    DiscoverSeparator: {
    //    borderBottomWidth: 3,
    //    borderBottomColor: 'green',
    //    paddingBottom: 10, 
    //    marginBottom: 10, 
    //},

    //Recipe.js styles
    containerRecipe: {
        // reseptin tekstien sisällölle
        flex: 1,
        width: '100%',
        backgroundColor: '#FAF5F1',
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
        paddingVertical: 30,
        marginTop: -30,
        borderRadius: 30,
    },
    RecipeImage: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1.875,
        resizeMode: 'cover',
    },
    RecipeInfoTxt: {
        fontFamily: 'Exo',
        fontSize: 14,
        paddingLeft: 30,
    },
    RecipeInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingVertical: 10,
        marginLeft: -30,
    },
    RecipeIcon: {
        color: '#78B29C',
        fontSize: 18,
    },
    RecipeH2: {
        fontFamily: 'Exo',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
        color: '#D2575C',
        paddingVertical: 20,
    },
    RecipeIngredients: {
        fontSize: 14,
        paddingVertical: 10,
        paddingLeft: 10,
    },
    RecipeInstruction: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#e4e4e4',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    RecipeInstRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        width: '100%',
        height: 'auto',
    },
    numberContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    RecipeH3: {
            fontFamily: 'Exo',
            fontSize: 14,
            color: '#D2575C',
    },
});