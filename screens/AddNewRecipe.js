import React, { useState, useEffect } from "react"
import { View, Text, ScrollView, Pressable } from "react-native"
import { storeData, generateSHA256 } from "../util/LocalStorageUtil"
import RecipeForm from "../components/RecipeForm"
import RecipeSchema from "../data/RecipeSchema.json"
import Styles from "../styles/Styles"
import { useForceUpdate } from "../hooks/ForceUpdateProvider"

export default AddNewRecipe = () => {
    const [schema, setSchema] = useState({})
    useEffect(() => {
        // Create a deep copy
        setSchema(JSON.parse(JSON.stringify(RecipeSchema)))
    }, [])

    const [storedStatus, setStoredStatus] = useState(' ')
    const { setForceUpdate } = useForceUpdate();
    const storeItem = async () => {
        let result = false
        try {
            const converted = convertSchemaToRecipe(schema)
            await storeData(generateSHA256(converted), converted)
            result = true
        } catch {
            console.error("Error while storing local data")
        }

        result && setForceUpdate(prevState => !prevState);
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

        <View style={Styles.vali}>
            <Pressable onPress={storeItem} style={Styles.buttonAdd}>
                <Text style={Styles.buttonText}>Lisää resepti</Text></Pressable>
                </View>
                <Text style={Styles.buttonNotification}>{storedStatus}</Text>
            </View>
        </ScrollView>
    )
}