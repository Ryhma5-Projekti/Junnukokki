import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../styles/ThemeContext';

const OpenTips = ({ route }) => {
    const { selectedTheme } = useTheme(); 
    const { discover } = route.params;

    // Yliviivaa ainesosat ja ohjeet, kun niitä painetaan
    // Tekee uuden taulukon vertailuun, true = yliviivattu
    const [crossOutInstructions, setcrossOutInstructions] = useState(new Array(discover.instructions.length).fill(false));

    const toggleInstruction = (index) => {
        const newcrossOutInstructions = [...crossOutInstructions];
        newcrossOutInstructions[index] = !newcrossOutInstructions[index];
        setcrossOutInstructions(newcrossOutInstructions);
    };

    // Kuva placeholderina
    return (
        <ScrollView>
            <View style={selectedTheme.containerFullWidth}>

                <Image source={{ uri: discover.image }} style={selectedTheme.RecipeImage} />


                <View style={selectedTheme.containerRecipe}>
                    <Text style={selectedTheme.h1}>{discover.title}</Text>


                        <View style={{marginHorizontal: 10}}>
                    </View>
                    
                    <View style={selectedTheme.RecipeInstruction}>
                        {discover.instructions.map((instruction, index) => (
                            <TouchableOpacity key={index} onPress={() => toggleInstruction(index)}>
                                <View style={selectedTheme.RecipeInstRow}>
                                    <View style={selectedTheme.numberContainer}>
                                        <Text style={selectedTheme.RecipeH3}>{index + 1 + "."}</Text>
                                </View>
                                <View style={selectedTheme.textContainer}>
                                    <Text style={[selectedTheme.txt, { textDecorationLine: crossOutInstructions[index] ? 'line-through' : 'none' }]}>
                                        <Text>{instruction}</Text></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}</View>
            </View>
        </View>
        </ScrollView >
    );
}


export default OpenTips;

