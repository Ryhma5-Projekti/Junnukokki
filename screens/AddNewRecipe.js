import React, { useState, useEffect } from "react"
import { TextInput, View, Text, Button, ScrollView, Pressable } from "react-native"
import { storeData, getData, generateSHA256, getAllKeys, removeAllKeys } from "../util/LocalStorageUtil"
import RecipeForm from "../components/RecipeForm"
import RecipeSchema from "../data/RecipeSchema.json"

import { useTheme } from '../styles/ThemeContext';

export default AddNewRecipe = () => {
    const { selectedTheme, toggleTheme } = useTheme();

    const [schema, setSchema] = useState({})
    useEffect(() => {
        // Create a deep copy
        setSchema(JSON.parse(JSON.stringify(RecipeSchema)))
    }, [])

    const [storedStatus, setStoredStatus] = useState(' ')
    const storeItem = async () => {
        let result = false
        try {
            const converted = convertSchemaToRecipe(schema)
            await storeData(generateSHA256(converted), converted)
            result = true
        } catch {
            console.error("Error while storing local data")
        }

        changeStatus(setStoredStatus, result)
    }
    const changeStatus = (setValue, boolean) => {
        setValue(boolean ? "Reseptin lisäys onnistui" : "Reseptiä ei lisätty")
    }
    const convertSchemaToRecipe = (schema) => {
        return recipe = Object.entries(schema).reduce((acc, [key, item]) => (
            { ...acc, ...{ [key]: item.multiline ? item.value.split('\n') : item.value } }
        ), {})
    }

    const [allRecipes, setAllRecipes] = useState([])
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

            setAllRecipes(recipes)
        } catch (error) {
            console.error("Error while fetching keys:", error)
        }
    }

    const inputChange = (key, text) => {
        setSchema(prevSchema => ({
            ...prevSchema,
            [key]: {
                ...prevSchema[key],
                value: text
            }
        }))
    }

    return (
        <ScrollView>
            <View style={selectedTheme.container}>
            <RecipeForm schema={schema} inputChange={inputChange} />

        <View style={selectedTheme.vali}>
            <Pressable onPress={storeItem} style={selectedTheme.buttonAdd}>
                <Text style={selectedTheme.buttonText}>Lisää resepti</Text></Pressable>
                </View>
                <Text style={selectedTheme.buttonNotification}>{storedStatus}</Text>
            </View>
        </ScrollView>
    )
}
