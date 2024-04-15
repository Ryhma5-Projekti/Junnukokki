import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getData, getAllKeys } from "../util/LocalStorageUtil"
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';
import useRecipes from '../hooks/useRecipes';
import Styles from '../styles/Styles';
import RemoveRecipeModal from '../components/RemoveRecipeModal';
import { useForceUpdate } from '../hooks/ForceUpdateProvider';

export default function MyRecipes() {
    const { setRecipes, searchQuery, setSearchQuery, filteredRecipes, handleRecipePress } = useRecipes()
    // const [forceRecipeUpdate, setForceRecipeUpdate] = useState(false);
    const { forceUpdate } = useForceUpdate();

    useEffect(() => {
        (async () => {
            setRecipes(await getAllLocalRecipes())
        })()
    }, [forceUpdate])

    const getAllLocalRecipes = async () => {
        const recipes = []
        try {
            let keys = await getAllKeys()

            // Convert null/undefined/singleton into an array
            keys = !keys ? [] :
                !Array.isArray(keys) ? keys = [keys] : keys

            for (const key of keys) {
                const recipe = await getData(key);
                recipe && recipes.push(recipe)
            }

            return recipes
        } catch (error) {
            console.error("Error while fetching keys:", error)
        }
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState({})

    const toggleModal = ({ forceState } = {}) => {
        if (forceState !== undefined) {
            // setForceRecipeUpdate(prevState => !prevState)
        }
        setModalVisible(forceState === undefined ? !modalVisible : forceState)
    };

    const onLongPress = (recipe) => {
        console.log("LONG PRESSED!")
        setSelectedRecipe(recipe)
        toggleModal()
    }

    return (
        <View style={Styles.vali}>
            <RemoveRecipeModal toggleModal={toggleModal}
                modalVisible={modalVisible}
                recipe={selectedRecipe} />

            <RecipeSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <RecipeList filteredRecipes={filteredRecipes}
                handleRecipePress={handleRecipePress}
                onLongPress={onLongPress} />
        </View>
    );
}
