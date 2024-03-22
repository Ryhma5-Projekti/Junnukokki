import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

/**
 * Function to generate SHA-256 hash based on key-value pairs of an object
 * @param {{key: value}} obj Object with key-value pairs
 */ 
const generateSHA256 = (obj) => {
    return CryptoJS.SHA256(JSON.stringify(obj)).toString(CryptoJS.enc.Hex);
}

/**
 * Get data from AsyncStorage
 * @throws Error related to AsyncStorage
 * @returns {String | null}
 */
const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw e
    }
};

/**
 * Store data into AsyncStorage
 * @throws Error related to AsyncStorage
 */
const storeData = async (key, value) => {
    try {
        console.log("storing: ", key, value)
        await AsyncStorage.setItem(key, value);
        await updateKeyList(key);
    } catch (e) {
        throw e
    }
};

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log(`Data associated with key '${key}' removed successfully.`);
    } catch (error) {
        console.error(`Error while removing data with key '${key}':`, error);
    }
};

/**
 * Remove all keys from storage and keyList
 */
const removeAllKeys = async () => {
    try {
        const keyList = await getAllKeys()
        keyList.forEach(key => {
            removeData(key)
        })
        removeData('keyList')
    } catch (error) {
        console.error("Error while removing keys:", error);
    }
}

/**
 * Function to update the list of keys in AsyncStorage
 * @throws Error related to AsyncStorage
 * @param {String} key
 */
const updateKeyList = async (key) => {
    try {
        const keyListJSON = await AsyncStorage.getItem('keyList');
        const keyList = keyListJSON ? JSON.parse(keyListJSON) : [];

        if (!keyList.includes(key)) {
            keyList.push(key);
            await AsyncStorage.setItem('keyList', JSON.stringify(keyList));
        } else {
            console.log("Key already exists:", key);
        }
    } catch (error) {
        console.error("Error while updating key list:", error);
    }
};

/**
 * Function to retrieve all stored keys from AsyncStorage
 * @throws Error related to AsyncStorage
 * @returns {[String]} List of stored keys
 */
const getAllKeys = async () => {
    try {
        const keyListJSON = await AsyncStorage.getItem('keyList');
        const keyList = keyListJSON ? JSON.parse(keyListJSON) : [];

        return keyList;
    } catch (error) {
        console.error("Error while retrieving key list:", error);
        return [];
    }
};

export { getData, storeData, removeData, generateSHA256, getAllKeys, removeAllKeys }