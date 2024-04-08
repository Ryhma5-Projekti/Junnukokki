import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { storeData, getData, generateSHA256, getAllKeys, removeAllKeys } from "../util/LocalStorageUtil"
import Styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';

export default function MyRecipes() {
    const navigation = useNavigation()
    const [recipes, setRecipes] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [allRecipes, setAllRecipes] = useState([])
    useEffect(() => {
        (async () => {
            setRecipes(await getAllLocalRecipes())
        })()
    }, [])

    const getAllLocalRecipes = async () => {
        const recipes = []
        try {
            let keys = await getAllKeys()

            // Convert null/undefined/singleton into an array
            keys = !keys ? [] :
                !Array.isArray(keys) ? keys = [keys] : keys

            for (const key of keys) {
                const recipe = await getData(key);
                recipes.push(recipe);
            }

            return recipes
        } catch (error) {
            console.error("Error while fetching keys:", error)
        }
    }

    const handleRecipePress = (recipe) => {
        navigation.navigate('Recipe', { recipe });
    }

    return (
        <View>
            <RecipeSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <RecipeList filteredRecipes={filteredRecipes} handleRecipePress={handleRecipePress} />
        </View>
    );
}
