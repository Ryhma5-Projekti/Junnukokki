import { useState } from "react"
import { TextInput, View, Text, Button } from "react-native"
import { storeData, getData } from "../util/LocalStorageUtil"

export default AddNewRecipe = () => {
    const [storeKey, setStoreKey] = useState('')
    const [storeValue, setStoreValue] = useState('')
    const [storedStatus, setStoredStatus] = useState('-')
    const [getKey, setGetKey] = useState('')
    const [getValue, setGetValue] = useState('-')

    const changeStatus = (setValue, boolean) => {
        setValue(boolean ? "success" : "failed")
    }

    const storeItem = async () => {
        let result = null

        try {
            result = await storeData(storeKey, storeValue)
        } catch {
            console.error("Error while storing local data")
        }

        changeStatus(setStoredStatus, result !== null)
    }

    const getItem = async () => {
        let result = null

        try {
            result = await getData(getKey)
        } catch {
            console.error("Error while getting local data")
        }

        setGetValue(result ? result : "ERROR!")
    }

    return (
        <View>
            <Text>Key:</Text>
            <TextInput value={storeKey} onChangeText={text => setStoreKey(text)} />

            <Text>Value:</Text>
            <TextInput value={storeValue} onChangeText={text => setStoreValue(text)} />

            <Button title="store" onPress={storeItem} />
            <Text>Last stored status: {storedStatus}</Text>

            <Text>fetch by key:</Text>
            <TextInput value={getKey} onChangeText={text => setGetKey(text)} />

            <Button title="fetch" onPress={getItem} />
            <Text>{getValue}</Text>
        </View>
    )
}