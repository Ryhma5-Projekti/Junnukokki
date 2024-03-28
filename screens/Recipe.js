import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';

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
            <View style={Styles.container}>
                <Text style={Styles.h1}>{recipe.name}</Text>
                <Image source={require('../components/img.jpeg')} style={Styles.RecipeImage} />
                <Text style={Styles.RecipeTxt}>Valmistusaika: <Text style={Styles.RecipeTxtBold}>{recipe.time}</Text></Text>
                <Text style={Styles.RecipeTxt}>Annokset: <Text style={Styles.RecipeTxtBold}>{recipe.servings}</Text></Text>
                <Text style={[Styles.CatalogRow, Styles.h3]}>Ainekset:</Text>
                {recipe.ingredients.map((ingredient, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleIngredient(index)}>
                        <Text style={[Styles.RecipeTxt, { textDecorationLine: crossOutIngredients[index] ? 'line-through' : 'none' }]}>
                            <Text>{ingredient}</Text>
                        </Text>
                    </TouchableOpacity>
                ))}
                <Text style={[Styles.CatalogRow, Styles.h3]}>Ohje:</Text>
                {recipe.instructions.map((instruction, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleInstruction(index)}>
                        <Text style={[Styles.RecipeTxt, { textDecorationLine: crossOutInstructions[index] ? 'line-through' : 'none' }]}>
                            <Text style={Styles.h3}>{index + 1 + "."}</Text>
                            <Text>{instruction}</Text>
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

export default Recipe;
