import React, { useState } from "react"
import { View, Text, TextInput, ScrollView } from "react-native"
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../styles/ThemeContext'; 
/**
 * 
 * Constructs a recipe form based on schema. 
 * @see {@link RecipeSchema.json}
 * @param {Object} props.schema
 */
export default RecipeForm = ({ schema, inputChange }) => {
    const { selectedTheme } = useTheme(); 

    return (
        <ScrollView>
                <Text style={selectedTheme.h1}>Luo uusi resepti</Text>
                {Object.entries(schema).map(([key, item], index) => (
                    <React.Fragment key={index}>
                        <View style={selectedTheme.RecipeH3Space}>
                            <IconComponent icon={item.icon} iconSet={item.iconSet} iconSize={item.iconSize} iconColor={item.iconColor} />
                            <Text style={selectedTheme.RecipeH3}>&nbsp;{item.label}:</Text>
                        </View>
                        <TextInput value={item.value}
                            onChangeText={text => inputChange(key, text)}
                            multiline={item.multiline}
                            style={selectedTheme.RecipeInstruction} />
                    </React.Fragment>
                ))}
        </ScrollView>
    )
}

const IconComponent = ({ icon, iconSet, iconSize, iconColor }) => {
    let IconLib;
    switch (iconSet) {
        case 'AntDesign':
            IconLib = AntDesign;
            break;
        case 'FontAwesome':
            IconLib = FontAwesome;
            break;
        case 'FontAwesome5':
            IconLib = FontAwesome5;
            break;
        default:
            IconLib = AntDesign; // Oletusarvoisesti käytetään AntDesign-kirjastoa
    }

    return <IconLib name={icon} size={iconSize} color={iconColor} style={{ marginRight: 5 }} />;
};

/**
 * @todo Implement proper default styles
 */
