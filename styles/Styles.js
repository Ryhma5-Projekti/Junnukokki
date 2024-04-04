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
    RecipeImage: {
        width: '90%',
        height: 'auto', 
        aspectRatio: 1.875,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: '5%', 
        marginRight: '5%',
    },    
    RecipeTxt: {
        fontFamily: 'Exo',
        fontWeight: '500',
        textAlign: 'justify',
        paddingBottom: 5,
        paddingLeft: 10,
    },
    RecipeTxtBold: {
        fontFamily: 'Exo',
        fontWeight: 'bold'
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 10,
    },
});