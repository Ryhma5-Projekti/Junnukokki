import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Recipe = ({ route }) => {
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
            <View style={Styles.containerFullWidth}>
            <Image style={Styles.DiscoverImage} source={{ uri: recipe.image }}/>
        
                <View style={Styles.containerRecipe}>
                    <Text style={Styles.h1}>{recipe.name}</Text>

                    <View style={Styles.RecipeInfo}>

                        <Text style={Styles.RecipeInfoTxt}>
                            <AntDesign name="clockcircle" style={Styles.RecipeIcon} />
                            &nbsp;&nbsp; {recipe.time}</Text>

                        <Text style={Styles.RecipeInfoTxt}>
                            <FontAwesome name="group" style={Styles.RecipeIcon} />
                            &nbsp;&nbsp; {recipe.servings}</Text>

                    </View>

                    <View style={Styles.hr} />

                    <Text style={Styles.RecipeH2}>
                        <FontAwesome5 name="carrot" style={Styles.RecipeIcon} />
                        &nbsp;&nbsp; Ainekset</Text>

                        <View style={{marginHorizontal: 10}}>

                    {recipe.ingredients.map((ingredient, index) => (
                        <TouchableOpacity key={index} onPress={() => toggleIngredient(index)}>
                            <Text style={[Styles.RecipeIngredients, {
                                textDecorationLine: crossOutIngredients[index] ? 'line-through' : 'none',
                                backgroundColor: index % 2 === 0 ? 'white' : 'transparent',
                            }]}>
                                <Text>{ingredient}</Text>
                            </Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    <Text style={[Styles.vali, Styles.RecipeH2]}>
                        <FontAwesome name="file-text" style={Styles.RecipeIcon} />
                        &nbsp;&nbsp; Ohjeet</Text>
                    <View style={Styles.RecipeInstruction}>
                        {recipe.instructions.map((instruction, index) => (
                            <TouchableOpacity key={index} onPress={() => toggleInstruction(index)}>
                                <View style={Styles.RecipeInstRow}>
                                    <View style={Styles.numberContainer}>
                                        <Text style={Styles.RecipeH3}>{index + 1 + "."}</Text>
                                </View>
                                <View style={Styles.textContainer}>
                                    <Text style={[Styles.txt, { textDecorationLine: crossOutInstructions[index] ? 'line-through' : 'none' }]}>
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