import React, { useState, useEffect } from "react"
import { TextInput, View, Text, Button, ScrollView } from "react-native"
import { storeData, getData, generateSHA256, getAllKeys, removeAllKeys } from "../util/LocalStorageUtil"
import RecipeForm from "../components/RecipeForm"
import RecipeSchema from "../data/RecipeSchema.json"

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
            await storeData(generateSHA256(converted), JSON.stringify(converted))
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
            <RecipeForm schema={schema} inputChange={inputChange} />

            <Text>SHA256: {generateSHA256(schema)}</Text>

            <Button title="store" onPress={storeItem} />
            <Text>Last stored status: {storedStatus}</Text>

            <Text>fetch all local recipes:</Text>

            <Button title="fetch" onPress={getAllLocalRecipes} />
            {allRecipes.map((item, index) => (
                <Text key={index} style={{ borderWidth: 2, padding: 5 }}>
                    recipe #{index}: {JSON.stringify(item)}
                </Text>
            ))}

            <Button title="remove all" onPress={removeAllKeys} />
        </ScrollView>
    )
}