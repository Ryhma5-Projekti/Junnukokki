import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../styles/ThemeContext';

const Recipe = ({ route }) => {
    const { selectedTheme } = useTheme();
    const { recipe } = route.params;

    // Yliviivaa ainesosat ja ohjeet, kun niitä painetaan
    // Tekee uuden taulukon vertailuun, true = yliviivattu
    const [crossOutIngredients, setcrossOutIngredients] = useState(new Array(recipe.ingredients.length).fill(false));
    const [crossOutInstructions, setcrossOutInstructions] = useState(new Array(recipe.instructions.length).fill(false));

    const toggleIngredient = (index) => {
        const newcrossOutIngredients = [...crossOutIngredients];
        newcrossOutIngredients[index] = !newcrossOutIngredients[index];
        setcrossOutIngredients(newcrossOutIngredients);
    };

    const toggleInstruction = (index) => {
        const newcrossOutInstructions = [...crossOutInstructions];
        newcrossOutInstructions[index] = !newcrossOutInstructions[index];
        setcrossOutInstructions(newcrossOutInstructions);
    };

    // Kuva placeholderina
    return (
        <ScrollView>
            <View style={selectedTheme.containerFullWidth}>

            <Image style={selectedTheme.RecipeImage}
            source={ recipe.image ? { uri: recipe.image } : require('../components/myrecipes.png') }/>

                <View style={selectedTheme.containerRecipe}>
                    <Text style={selectedTheme.h1}>{recipe.name}</Text>

                    <View style={selectedTheme.RecipeInfo}>

                        <Text style={selectedTheme.RecipeInfoTxt}>
                            <AntDesign name="clockcircle" style={selectedTheme.RecipeIcon} />
                            &nbsp;&nbsp; {recipe.time}</Text>

                        <Text style={selectedTheme.RecipeInfoTxt}>
                            <FontAwesome name="group" style={selectedTheme.RecipeIcon} />
                            &nbsp;&nbsp; {recipe.servings}</Text>

                    </View>

                    <View style={selectedTheme.hr} />

                    <Text style={selectedTheme.RecipeH2}>
                        <FontAwesome5 name="carrot" style={selectedTheme.RecipeIcon} />
                        &nbsp;&nbsp; Ainekset</Text>

                        <View style={{marginHorizontal: 10}}>

                    {recipe.ingredients.map((ingredient, index) => (
                        <TouchableOpacity key={index} onPress={() => toggleIngredient(index)}>
                            <Text style={[selectedTheme.RecipeIngredients, {
                                textDecorationLine: crossOutIngredients[index] ? 'line-through' : 'none',
                                backgroundColor: index % 2 === 0 ? 'white' : 'transparent',
                            }]}>
                                <Text>{ingredient}</Text>
                            </Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    <Text style={[selectedTheme.vali, selectedTheme.RecipeH2]}>
                        <FontAwesome name="file-text" style={selectedTheme.RecipeIcon} />
                        &nbsp;&nbsp; Ohjeet</Text>
                    <View style={selectedTheme.RecipeInstruction}>
                        {recipe.instructions.map((instruction, index) => (
                            <TouchableOpacity key={index} onPress={() => toggleInstruction(index)}>
                                <View style={selectedTheme.RecipeInstRow}>
                                    <View style={selectedTheme.numberContainer}>
                                        <Text style={selectedTheme.RecipeH3}>{index + 1 + "."}</Text>
                                </View>
                                <View style={selectedTheme.textContainer}>
                                    <Text style={[selectedTheme.RecipeInstTxt, { textDecorationLine: crossOutInstructions[index] ? 'line-through' : 'none' }]}>
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

export default Recipe;
