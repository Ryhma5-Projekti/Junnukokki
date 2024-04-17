import { StyleSheet } from 'react-native';

export const generateStyles = ({
    PRIMARY_BG_COLOR = "#FAF5F1",
    SECONDARY_BG_COLOR = "#78B29C",
    SECONDARY_BG_HIGHLIGHT_COLOR = "#6A9C89",
    PRIMARY_HEADING_COLOR = "#D2575C",
    PRIMARY_BORDER_COLOR = "#e4e4e4",
    SECONDARY_BORDER_COLOR = "#949494",
    BG_WHITE = "white",
    COLOR_WHITE = "white",
    COLOR_BLACK = "black",
    COLOR_GRAY = "gray",
    BORDER_BOTTOM_COLOR_LGRAY = "lightgrey",
    DIMMING_OPACITY = 'rgba(0, 0, 0, 0.5)' }) => {

    return StyleSheet.create({
        // Vaalean teeman tyylit
        scrollview: {
            backgroundColor: PRIMARY_BG_COLOR,
        },
        containerFullWidth: {
            flex: 1,
            backgroundColor: PRIMARY_BG_COLOR,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        headerStyle: {
            backgroundColor: PRIMARY_BG_COLOR,
        },
        bottomNavigationStyle: {
            backgroundColor: SECONDARY_BG_COLOR,
        },
        tabBarActiveBackgroundColor: SECONDARY_BG_HIGHLIGHT_COLOR,
        settingsColor: SECONDARY_BG_COLOR,

        container: {
            // normaalille sisällölle
            flex: 1,
            backgroundColor: PRIMARY_BG_COLOR,
            justifyContent: 'flex-start',
            paddingHorizontal: 30,
            paddingVertical: 20,
        },
        h1: {
            fontFamily: 'Exo',
            fontSize: 22,
            fontWeight: '500',
            textAlign: 'center',
            color: PRIMARY_HEADING_COLOR,
            paddingBottom: 20,
        },
        h2: {
            fontFamily: 'Exo',
            fontSize: 19,
            fontWeight: '500',
            textAlign: 'center',
            color: PRIMARY_HEADING_COLOR,
            paddingBottom: 20,
        },
        h3: {
            fontFamily: 'Exo',
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            color: PRIMARY_HEADING_COLOR,
            paddingBottom: 20,
        },
        h4: {
            fontFamily: 'Exo',
            fontSize: 14,
            textAlign: 'center',
            color: COLOR_WHITE,
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
            borderBottomColor: BORDER_BOTTOM_COLOR_LGRAY,
            borderBottomWidth: 1,
            marginVertical: 10,
            paddingTop: 20,
        },
        WhiteBox: {
            backgroundColor: SECONDARY_BG_COLOR,
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
            color: PRIMARY_HEADING_COLOR,
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
            backgroundColor: PRIMARY_BG_COLOR,
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
            color: SECONDARY_BG_COLOR,
            fontSize: 18,
        },
        RecipeH2: {
            fontFamily: 'Exo',
            fontSize: 18,
            fontWeight: '500',
            textAlign: 'left',
            color: PRIMARY_HEADING_COLOR,
            paddingVertical: 20,
        },
        RecipeH3: {
            fontFamily: 'Exo',
            fontSize: 15,
            color: COLOR_BLACK,
            textAlign: 'left',
        },
        RecipeH3Space: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 10,
            paddingLeft: 5,
            color: COLOR_BLACK,
        },
        RecipeIngredients: {
            fontSize: 14,
            paddingVertical: 10,
            paddingLeft: 10,
        },
        RecipeInstruction: {
            color: COLOR_WHITE,
            backgroundColor: BG_WHITE,
            borderRadius: 15,
            borderColor: PRIMARY_BORDER_COLOR,
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
        searchBar: {
            height: 50,
            borderColor: SECONDARY_BORDER_COLOR,
            backgroundColor: BG_WHITE,
            color: COLOR_BLACK,
            borderWidth: 1,
            borderRadius: 30,
            paddingHorizontal: 20,
        },
        searchBarPlaceholder: {
            color: COLOR_GRAY,
        },
        buttonAdd: {
            backgroundColor: SECONDARY_BG_COLOR,
            borderRadius: 30,
            padding: 10,
            marginVertical: 10,
            width: '70%',
            alignSelf: 'center',
        },
        buttonDelete: {
            borderColor: PRIMARY_HEADING_COLOR,
            borderWidth: 1,
            borderRadius: 30,
            padding: 10,
            marginVertical: 10,
            width: '70%',
            alignSelf: 'center',
        },
        buttonText: {
            color: COLOR_WHITE,
            textAlign: 'center',
            textTransform: 'uppercase',
            paddingVertical: 5,
        },
        buttonTextDelete: {
            color: PRIMARY_HEADING_COLOR,
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        buttonNotification: {
            textAlign: 'center',
            fontSize: 14,
            color: COLOR_GRAY,
        },
        DimmingCover: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: DIMMING_OPACITY,
        },
        Modal: {
            backgroundColor: BG_WHITE,
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
}
