import React, { useState, useEffect } from "react"
import { TextInput, View, Text, Button, ScrollView, Pressable } from "react-native"
import { storeData, getData, generateSHA256, getAllKeys, removeAllKeys } from "../util/LocalStorageUtil"
import RecipeForm from "../components/RecipeForm"
import RecipeSchema from "../data/RecipeSchema.json"
import Styles from "../styles/Styles"

export default AddNewRecipe = () => {
    const [schema, setSchema] = useState({})
    useEffect(() => {
        // Create a deep copy
        setSchema(JSON.parse(JSON.stringify(RecipeSchema)))
    }, [])

    const [storedStatus, setStoredStatus] = useState('-')
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
        setValue(boolean ? "success" : "failed")
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
            <View style={Styles.container}>
            <RecipeForm schema={schema} inputChange={inputChange} />

            <Text>SHA256: {generateSHA256(schema)}</Text>

            <Pressable onPress={storeItem} style={Styles.buttonAdd}>
                <Text style={Styles.buttonText}>Lisää resepti</Text></Pressable>
            <Text>Last stored status: {storedStatus}</Text>

            <Text>fetch all local recipes:</Text>

            <Pressable onPress={getAllLocalRecipes} style={Styles.buttonAdd}>
                <Text style={Styles.buttonText}>Fetch all</Text></Pressable>
            {allRecipes.map((item, index) => (
                <Text key={index}>
                    recipe #{index}: {JSON.stringify(item)}
                </Text>
            ))}

            <Pressable onPress={removeAllKeys} style={Styles.buttonDelete}>
                <Text style={Styles.buttonTextDelete}>Remove all keys</Text></Pressable>
            </View>
        </ScrollView>
    )
}