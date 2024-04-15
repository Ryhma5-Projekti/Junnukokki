import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getData, getAllKeys } from "../util/LocalStorageUtil"
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import useRecipes from '../hooks/useRecipes';
import Styles from '../styles/Styles';

export default function MyRecipes() {
    const { setRecipes, searchQuery, setSearchQuery, filteredRecipes, handleRecipePress } = useRecipes()

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

    return (
        <View style={Styles.vali}>
            <RecipeSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <RecipeList filteredRecipes={filteredRecipes} handleRecipePress={handleRecipePress} />
        </View>
    );
}