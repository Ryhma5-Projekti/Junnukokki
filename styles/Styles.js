import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
    // Vaalean teeman tyylit
    scrollview: {
        backgroundColor: '#FAF5F1',
    },   
    containerFullWidth: {
        flex: 1,
        backgroundColor: '#FAF5F1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerStyle: {
        backgroundColor: '#FAF5F1',
    },
    bottomNavigationStyle: {
        backgroundColor: '#78B29C',
    },
    tabBarActiveBackgroundColor: '#6A9C89',
    settingsColor: '#78B29C',

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
    h2: {
        fontFamily: 'Exo',
        fontSize: 19,
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
    h4: {
        fontFamily: 'Exo',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        lineHeight: 20,
        paddingVertical: 10,
    },
    vali: {
        paddingTop: 40,
        marginBottom: 10,
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
    WhiteBox: {
        backgroundColor: '#78b29c',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
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
        marginHorizontal: 10,
    },

    //Discover.js + Tips.js styles
    DiscoverH3: {
        fontFamily: 'Exo',
        fontSize: 16,
        textAlign: 'center',
        color: '#D2575C',
        paddingBottom: 30,
    },
    TipsImageContainer: {
        width: '100%',
        height: 130,
        overflow: 'hidden',
    },
    TipsImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
    },
    maxWidth: {
        alignSelf: 'center',
        maxWidth: 160,
    },
    // MyRecipes.js styles
    MyRecipesImage: {
        width: '100%',
        height: 90,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
        marginHorizontal: 10,
        alignSelf: 'center',
    },

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
    RecipeH3: {
        fontFamily: 'Exo',
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
    },
    RecipeH3Space: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 5,
        color: 'black',
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
    RecipeInstTxt:{
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
    }, 
    numberContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    searchBar: {
        height: 50,
        borderColor: '#949494',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    buttonAdd: {
        backgroundColor: '#78B29C',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonDelete: {
        borderColor: '#D2575C',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingVertical: 5,
    },
    buttonTextDelete: {
        color: '#D2575C',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    buttonNotification: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray',
    },
    DimmingCover: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    Modal: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 10,
    },
    SideBySideButton: {
        flex: 1,
        maxWidth: '50%',
        padding: 10,
        margin: 5,
    },
});

//TUMMA TEEMA ALKAA TÄSTÄ
export const darkTheme = StyleSheet.create({
    // Tumman teeman tyylit
    scrollview: {
        backgroundColor: '#2b2b2b',
    },
    containerFullWidth: {
        flex: 1,
        backgroundColor: '#2b2b2b', // tummanharmaa
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerStyle: {
        backgroundColor: '#2b2b2b',
    },
    bottomNavigationStyle: {
        backgroundColor: '#78B29C', 
    },
    tabBarActiveBackgroundColor: '#6A9C89',
    settingsColor: '#78B29C',

    container: {
        // normaalille sisällölle
        flex: 1,
        backgroundColor: '#2b2b2b',
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
    h4: {
        fontFamily: 'Exo',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        lineHeight: 20,
        paddingVertical: 10,
    },
    vali: {
        paddingTop: 40,
        marginBottom: 10,
    },
    txt: {
        fontSize: 14,
        lineHeight: 20,
        color: 'white',
    },
    hr: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingTop: 20,
    },
    WhiteBox: {
        backgroundColor: '#78b29c',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
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
        marginHorizontal: 10,
    },

    //Discover.js + Tips.js styles
    DiscoverH3: {
        fontFamily: 'Exo',
        fontSize: 16,
        textAlign: 'center',
        color: '#D2575C',
        paddingBottom: 30,
    },
    TipsImageContainer: {
        width: '100%',
        height: 130,
        overflow: 'hidden',
    },
    TipsImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
    },
    maxWidth: {
        alignSelf: 'center',
        maxWidth: 160,
    },
    // MyRecipes.js styles
    MyRecipesImage: {
        width: '100%',
        height: 90,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    //Recipe.js styles
    containerRecipe: {
        // reseptin tekstien sisällölle
        flex: 1,
        width: '100%',
        backgroundColor: '#2b2b2b',
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
        color: 'white',
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
    RecipeH3: {
        fontFamily: 'Exo',
        fontSize: 15,
        color: 'white',
        textAlign: 'left',
    },
    RecipeH3Space: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 5,
        color: 'black',
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
    RecipeInstTxt:{
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
    }, 
    numberContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    searchBar: {
        height: 50,
        borderColor: '#949494',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    buttonAdd: {
        backgroundColor: '#78B29C',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonDelete: {
        borderColor: '#D2575C',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingVertical: 5,
    },
    buttonTextDelete: {
        color: '#D2575C',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    buttonNotification: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray',
    },
    DimmingCover: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    Modal: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 10,
    },
    SideBySideButton: {
        flex: 1,
        maxWidth: '50%',
        padding: 10,
        margin: 5,
    },
});

//VÄRISOKEUSTILA ALKAA TÄSTÄ
export const colorblindTheme = StyleSheet.create({
    // värisokeustilan tyylit
    scrollview: {
        backgroundColor: 'white',
    },
    containerFullWidth: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
        headerStyle: {
            backgroundColor: 'white',
    },
        bottomNavigationStyle: {
            backgroundColor: 'black', 
    },
    tabBarActiveBackgroundColor: '#black',
    settingsColor: 'black',
        
    container: {
        // normaalille sisällölle
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    h1: {
        fontFamily: 'Exo',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
        paddingBottom: 20,
    },
    h3: {
        fontFamily: 'Exo',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
        paddingBottom: 20,
    },
    h4: {
        fontFamily: 'Exo',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        lineHeight: 20,
        paddingVertical: 10,
    },
    vali: {
        paddingTop: 40,
        marginBottom: 10,
    },
    txt: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
    },
    hr: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingTop: 20,
    },
    WhiteBox: {
        backgroundColor: 'black',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
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
        marginHorizontal: 10,
    },

    //Discover.js + Tips.js styles
    DiscoverH3: {
        fontFamily: 'Exo',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        paddingBottom: 30,
    },
    TipsImageContainer: {
        width: '100%',
        height: 130,
        overflow: 'hidden',
    },
    TipsImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
    },
    maxWidth: {
        alignSelf: 'center',
        maxWidth: 160,
    },
    // MyRecipes.js styles
    MyRecipesImage: {
        width: '100%',
        height: 90,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 10,
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    
    //Recipe.js styles
    containerRecipe: {
        // reseptin tekstien sisällölle
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
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
        color: 'black',
        fontSize: 18,
    },
    RecipeH2: {
        fontFamily: 'Exo',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
        color: 'black',
        paddingVertical: 20,
    },
    RecipeH3: {
        fontFamily: 'Exo',
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
    },
    RecipeH3Space: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 5,
        color: 'black',
    },
    RecipeIngredients: {
        fontSize: 14,
        paddingVertical: 10,
        paddingLeft: 10,
    },
    RecipeInstruction: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'black',
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
    RecipeInstTxt:{
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
    }, 
    numberContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    searchBar: {
        height: 50,
        borderColor: '#949494',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    buttonAdd: {
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonDelete: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingVertical: 5,
    },
    buttonTextDelete: {
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    buttonNotification: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray',
    },
    DimmingCover: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    Modal: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 10,
    },
    SideBySideButton: {
        flex: 1,
        maxWidth: '50%',
        padding: 10,
        margin: 5,
    },
});
const Styles = { lightTheme, darkTheme, colorblindTheme };

export default Styles;
