import React, { useState, useEffect } from "react"
import { TextInput, View, Text, Button } from "react-native"
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
            await storeData(generateSHA256(schema), JSON.stringify(schema))
            result = true
        } catch {
            console.error("Error while storing local data")
        }

        changeStatus(setStoredStatus, result)
    }
    const changeStatus = (setValue, boolean) => {
        setValue(boolean ? "success" : "failed")
    }

    const [allKeys, setAllKeys] = useState([])
    const inputChange = (fieldName, value) => {
        setSchema(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const getKeys = async () => {
        let keys = []
        try {
            keys = await getAllKeys(); // Wait for the asynchronous getAllKeys function to complete
        } catch (error) {
            console.error("Error while fetching keys:", error);
        }
        setAllKeys(keys);
    };

    return (
        <View>
            <RecipeForm schema={schema} inputChange={inputChange} />
            {Object.keys(schema).map((field, index) => (
                <React.Fragment key={index}>
                    <Text>{field}: {schema[field]}</Text>
                </React.Fragment>
            ))}
            <Text>SHA256: {generateSHA256(schema)}</Text>

            <Button title="store" onPress={storeItem} />
            <Text>Last stored status: {storedStatus}</Text>

            <Text>fetch all keys:</Text>

            <Button title="fetch" onPress={getKeys} />
            {allKeys.map((key, index) => (
                <Text key={index}>
                    key #{index}: {key}
                </Text>
            ))}

            <Button title="remove all" onPress={removeAllKeys} />
        </View>
    )
}